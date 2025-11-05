<template>
  <div class="bg-black text pt-3" :style="{ height: '100vh' }">
    <h1 class="text-center text- success">ConcoPedia</h1>
    <div class="col-6 text-end text-white">
      Max Lucky Number : <input v-model.number="maxNumber" />
    </div>

    Contact Owner Name : <input v-model="ownername" />
    <AddContact @add-contact="onAddContact"></AddContact>
    <div class="row">
      <div class="col-12" v-for="contact in contacts" :key="contact.name">
        <ContactUs
          :name="contact.name"
          :phone="contact.phone"
          :ownername="contact.ownername"
          :email="contact.email"
          :isFavorite="contact.isFavorite"
          <!-- :maxLuckyNumber="maxNumber" -->
          @update-favorite="
            contact.isFavorite = onUpdateFavorite($event, contact.phone)
          "
        ></ContactUs>
      </div>
    </div>
    <ButtonCounter></ButtonCounter>
  </div>
</template>

<script setup>
import ContactUs from "./Components/ContactUs.vue";
import ButtonCounter from "./Components/ButtonCounter.vue";
import AddContact from "./Components/AddContact.vue";
import { provide, reactive, ref } from "vue";
const ownername = ref("abcd");
const maxNumber = ref(100);
provide("maxLuckyNumber", maxNumber);
const contacts = reactive([
  {
    name: "rahim",
    phone: 1911111111,
    ownername: ownername.value,
    isFavorite: true,
  },
  {
    name: "karim",
    phone: 1911111111,
    ownername: ownername.value,
    isFavorite: true,
  },
  {
    name: "jabaar",
    phone: 1911111111,
    ownername: ownername.value,
    isFavorite: true,
  },
]);

function onAddContact(contact) {
  contact.ownername = ownername.value;
  contact.isFavorite = false;
  contact.push(contact);
}

function onUpdateFavorite(oldValueFromChildComponent, phoneNumberFromParent) {
  console.log(oldValueFromChildComponent);
  console.log(phoneNumberFromParent);
  return !oldValueFromChildComponent.isFavorite;
}
</script>

<style scoped></style>
