<template>
 <ButtonCounter/>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';
import ButtonCounter from './Components/ButtonCounter.vue';

onBeforeMount(()=>{
  console.log("onBeforemount - App.vue");
});
onMounted(()=>{
  console.log('onMounted - App.vue');
});
onBeforeUpdate(()=>{
  console.log("onBeforeUpdate - App.vue");
});
onUpdated(()=>{
  console.log('onUpdated - App.vue');
});
onBeforeUnmount(()=>{
  console.log('onBeforeUnmount - App.vue');
});
onUnmounted(()=>{
  console.log('onUnmounted - App.vue');
});

</script>
