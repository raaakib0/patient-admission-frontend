<template>
  <div>
    <h1>Products List</h1>
    <p>here is the list of products:</p>
    <div v-for="product in products">
      <router-link
        :to="{ name: 'productDetails', params: { productId: product.id, categoryId:77 } }"
        >{{ product.name }}</router-link
      >
    </div>
    <button @click="$router.go(-1)" >Back</button>
  </div>
</template>

<script setup>
import router from '@/Router';

const products = [
  { id: 1, name: "products-1" },
  { id: 2, name: "products-2" },
  { id: 3, name: "products-3" },
];
</script>
