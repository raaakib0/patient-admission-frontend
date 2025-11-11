<template>
  <div>
    <h1>Products Details</h1>
    <div v-if="route.params.productID">
      <p>Products ID: {{ route.params.productID }}</p>
    </div>
    <div v-else>
      <p>No Products Found</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.params);
</script>
