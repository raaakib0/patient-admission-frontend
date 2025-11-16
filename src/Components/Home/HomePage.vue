<template>
  <div class="text-center">
    <p class="pt-3">Let's Play The Game</p>
    <h2 class="text-primary pb-3">Current Score: {{ gameStore.getScore }}</h2>
    <span class="text-primary pb-3">Max Score:{{ gameStore.maxHeat }}</span>
    <br />
    <span class="text-success pb-3 h3" v-if="gameStore.getScore >= 100"
      >You Won!</span
    >
    <span class="text-danger pb-3 h3" v-else-if="gameStore.getScore < 0"
      >You Lost!</span
    >
    <div class="row" v-if="gameStore.getScore < 100 && gameStore.getScore > 0">
      <div class="col-5 offset-1">
        <button class="form-control btn btn-success p-3" @click="Increment">
          Increment
        </button>
      </div>
      <div class="col-5">
        <button class="form-control btn btn-danger p-3" @click="Decrement">
          Decrement
        </button>
      </div>
      <div class="col-6 pt-2 offset-3">
        <button class="form-control btn btn-warning p-3" @click="Random">
          Random
        </button>
      </div>
    </div>
    <div class="" v-else>
      <button
        class="btn btn-primary form-control p-4"
        @click="gameStore.resetScore()"
      >
        Reset Game
      </button>
    </div>
  </div>
</template>

<script setup>
import { useGameStore } from "@/Store/GameStore";

function Increment() {
  gameStore.setNextAttack();
}

function Decrement() {
  gameStore.setNextDefense();
}

function Random() {
  Math.random() > 0.5 ? Increment() : Decrement();
}

const gameStore = useGameStore();
</script>
