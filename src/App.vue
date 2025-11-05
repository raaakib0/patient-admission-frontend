<template>
  <div class="bg-black text pt-3" :style="{ height: '100vh' }">
    <h1 class="text-center text- success">ConcoPedia</h1>
    <div class="container">
<LuckyNumberV1></LuckyNumberV1>
<br/>
<LuckyNumberV2></LuckyNumberV2>

    </div>
    <ButtonCounter></ButtonCounter>
  </div>
</template>

<script setup>
import ButtonCounter from "./Components/ButtonCounter.vue";
import { provide, reactive, ref } from "vue";
import LuckyNumberV1 from "./Components/LuckyNumberV1.vue";
import LuckyNumberV2 from "./Components/LuckyNumberV2.vue";
</script>

<style scoped></style>
