<template>
<button @click="increment">Increment</button>
<span>{{ count }}</span>
<button @click="decrement">Decrement</button>
</template>

<script setup>
import { useCounter } from '@/composibles/useCounter';

const {count, increment, decrement} = useCounter();

</script>
