<template>
  <h1>{{ message }}</h1>
  <Button @click="showMessage">Show Message</Button>
  <br />
  <h1>{{ count }}</h1>
  <button @click="count++">Clicked{{ count }} time</button>
  <ButtonCounter v-if="count==1" />
</template>

<script setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";
import ButtonCounter from "./Components/ButtonCounter.vue";

const message = ref("Hello Vue");
const showMessage = () => {
  message.value = "Hello from function";
};

const count = ref(0);

onBeforeMount(() => {
  console.log("onBeforemount - App.vue");
});
onMounted(() => {
  console.log("onMounted - App.vue");
});
onBeforeUpdate(() => {
  console.log("onBeforeUpdate - App.vue");
});
onUpdated(() => {
  console.log("onUpdated - App.vue");
});
onBeforeUnmount(() => {
  console.log("onBeforeUnmount - App.vue");
});
onUnmounted(() => {
  console.log("onUnmounted - App.vue");
});
</script>
