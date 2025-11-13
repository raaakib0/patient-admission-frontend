<template>
  <h1>hello</h1>

  <div v-for="user in userObj.users" :key="user.id">
    <p>{{ user.name }}</p>
    <p>{{ user.email }}</p>
    <hr />
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import Header from "./Components/Layout/Header.vue";
import axios from "axios";

const userObj = reactive({
  user: [],
});

onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data)=>{
    console.log(data);
    userObj.users= data;
  });

  // axios.get("https://jsonplaceholder.typicode.com/users")
  // .then((response) => {
  //   console.log(response.data);

  //   userObj.users = response.data;
  // });
});
</script>
