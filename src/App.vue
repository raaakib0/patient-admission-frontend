<template>
  <!-- <contact-us></contact-us> -->
  <!-- <button-counter></button-counter> -->
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
        @update-favorite="contact.isFavorite = onUpdateFavorite($event, contact.phone) "
      ></ContactUs>
    </div>
  </div>
<LuckyNumber></LuckyNumber>
  <ButtonCounter></ButtonCounter>

  <h1 class="text-3xl font-bold text-blue-600">Hello Tailwind + Vue 🎉</h1>

  <h1>You did it!</h1>
</template>

<script setup>
import ContactUs from "./Components/ContactUs.vue";
import ButtonCounter from "./Components/ButtonCounter.vue";
import AddContact from "./Components/AddContact.vue";
import LuckyNumber from "./Components/LuckyNumber2.vue"
import { reactive, ref } from "vue";
import LuckyNumber2 from "./Components/LuckyNumber2.vue";
const ownername = ref("abcd");
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

function onAddContact(contact){
  contact.ownername = ownername.value;
  contact.isFavorite= false;
  contact.push(contact);
}

function onUpdateFavorite(oldValueFromChildComponent, phoneNumberFromParent){
  console.log(oldValueFromChildComponent);
  console.log(phoneNumberFromParent);
  return !oldValueFromChildComponent.isFavorite;
}

</script>

<style scoped></style>
