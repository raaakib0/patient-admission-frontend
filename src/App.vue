<template>
<button @click="increment">Increment</button>
<button @click="decrement">Decrement</button>
</template>

<script setup>

const count = ref(10);

const increment = ()=>{
  count.value++;
};

const decrement = ()=>{
  count.value--;
};

</script>
