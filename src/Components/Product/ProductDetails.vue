<template>
    <div>
        <h1>Products Details</h1>
        <p>Products ID: {{ route.params.productID }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.params);
</script>