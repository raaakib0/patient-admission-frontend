<template>
  <h1>{{ count }}</h1>
<button @click="increment">Increment</button>
<button @click="decrement">Decrement</button>
<ButtonCounter></ButtonCounter>
</template>

<script setup>
import { useCounter } from './composibles/useCounter';
import ButtonCounter from './Components/ButtonCounter.vue';
const {count, increment, decrement} = useCounter(100,10);

</script>
