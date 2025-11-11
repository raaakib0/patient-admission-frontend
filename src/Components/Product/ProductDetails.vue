<template>
  <div>
    <h1>Products Details</h1>
    <div v-if="route.params.productId">
      <p>Products ID: {{ route.params.productId }}</p>
    </div>
    <div v-else>
      <p>No Products Found</p>
    </div>
    <div v-if="route.params.categoryId">
        <p>Category Id: {{ route.params.categoryId }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.params);
</script>
