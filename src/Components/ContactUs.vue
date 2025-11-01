<template>
  <div class="bg-info p-4 m-2 rounded">
    <div class="row">
      <div class="col-12">
        <h1>Contact Us</h1>
        <p>Name: {{ name }}</p>
        <p>Email: {{ email }}</p>
        <p>Phone: {{ phone }}</p>
        <p class="float-end small" v-if="ownername != ''">
          this info for {{ ownername }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
// const email = ref("karim@gmail.com");
const props = defineProps({
name:{type:String, required:true},
phone: Number,
ownername: String,
email: {type: String, require: false, default:'N/A'},
isFavourite: Boolean,
});
</script>
