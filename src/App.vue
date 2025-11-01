
<template>
  <!-- <contact-us></contact-us> -->
  <!-- <button-counter></button-counter> -->
   <ContactUs
   name="mr.x"
   phone="01911111111"
   :ownername="contactsOwner"
   ></ContactUs>
  <ButtonCounter></ButtonCounter>
  
  <h1 class="text-3xl font-bold text-blue-600">Hello Tailwind + Vue 🎉</h1>

  <h1>You did it!</h1>
  
</template>

<script setup>
import ContactUs from './Components/ContactUs.vue';
import ButtonCounter from './Components/ButtonCounter.vue';
const contactsOwner = "abcd"
</script>

<style scoped></style>
