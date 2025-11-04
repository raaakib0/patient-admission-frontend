<template>
  <div class="container border rounded p-2">
    <div class="text-center text-white">Add New Contact</div>
    <form @submit.prevent="addContact">
      <div class="row">
        <div class="col-4">
          <input
            type="text"
            class="form-control"
            v-model="contact.name"
            placeholder="Enter Name "
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            class="form-control"
            v-model="contact.email"
            placeholder="Enter email "
          />
        </div>
        <div class="col-4">
          <input
            type="number"
            class="form-control"
            v-model="contact.phone"
            placeholder="Enter number "
          />
        </div>
        <div class="col-6 offset:-3 p-2">
            <button type="submit" class="btn btn-secondary w-100" >Add Contact</button>

        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, defineEmits } from "vue";
const emit = defineEmits(["add-contact"]);
const contact = reactive({
  name: "",
  phone: "",
  email: "",
});

function addContact() {
    emit("add-contact",{
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
    });
  console.log(contact);
  contact.name = "";
  contact.email = "";
  contact.phone = "";
}
</script>
