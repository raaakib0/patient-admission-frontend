<template>
  <LuckyNumberPareantComponent>
    <template v-slot:default>
      <p class="P-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fugiat
        dolo
      </p>
      <hr />
    </template>
    <template v-slot:moreInfo>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fugiat
        dolo
      </p>
    </template>

    <template v-slot:learnSlot>
      <button @click="showMessage">what will we lern?</button>
      <h4 class="text-success">{{ message }}</h4>
    </template>
  </LuckyNumberPareantComponent>
</template>

<script setup>
import { ref } from "vue";
import LuckyNumberPareantComponent from "./Components/LuckyNumberPareantComponent.vue";

const message = ref("");

function showMessage() {
  message.value = "how to use slots";
}
</script>
