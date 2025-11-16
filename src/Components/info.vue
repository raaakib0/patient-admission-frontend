<template>
  <h1 class="text-center">Info</h1>
  <p class="text-center">This is the info page</p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero
    doloribus quasi. Necessitatibus, assumenda similique optio libero ex autem
    nulla, vero placeat dolorem sunt numquam voluptate neque tempora debitis
    impedit.{{ gameStore.getWinningScore }}
  </p>
  <input type="text" v-model="gameStore.maxHeat"/>
</template>

<script setup>
import { useGameStore } from '@/Store/GameStore';

const gameStore= useGameStore();
</script>
