<template>
    <button @click="count++" >Clicked {{ count }} times</button>
</template>
<script>

import { ref } from 'vue';

export default{
    setup(){
        const count = ref(0);
        return {count};
    }
};

import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';

onBeforeMount(()=>{
  console.log("onBeforemount - ButtonCounter.vue");
});
onMounted(()=>{
  console.log('onMounted - ButtonCounter.vue');
});
onBeforeUpdate(()=>{
  console.log("onBeforeUpdate - ButtonCounter.vue");
});
onUpdated(()=>{
  console.log('onUpdated - ButtonCounter.vue');
});
onBeforeUnmount(()=>{
  console.log('onBeforeUnmount - ButtonCounter.vue');
});
onUnmounted(()=>{
  console.log('onUnmounted - ButtonCounter.vue');
});

</script>