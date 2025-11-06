<template>
  <div class="bg-black text pt-3" :style="{ height: '100vh' }">
    <h1 class="text-center text- success">ConcoPedia</h1>
    <div class="container">
      <button
        class="btn btn-primary text-black m-2"
        @click="newVersion = !newVersion"
      >
        Toggle Component
      </button>
      <br />
      <button
        class="btn btn-primary text-black m-2"
        @click="newVersion = false"
      >
        Lucky Number V1
      </button>
      <button class="btn btn-primary text-black m-2" @click="newVersion = true">
        Lucky Number V2
      </button>
      <br />

      <KeepAlive :include="['LuckyNumberV1','LuckyNumberV2']">
        <component :is="currentComponenet" />
      </KeepAlive>
    </div>
    <ButtonCounter></ButtonCounter>
  </div>
</template>

<script setup>
import ButtonCounter from "./Components/ButtonCounter.vue";
import { computed, provide, reactive, ref } from "vue";
import LuckyNumberV1 from "./LuckyNumberV1.vue";
import LuckyNumberV2 from "./LuckyNumberV2.vue";

const newVersion = ref(false);

const currentComponenet = computed(() => {
  return newVersion.value ? LuckyNumberV2 : LuckyNumberV1;
});
</script>

<style scoped></style>
