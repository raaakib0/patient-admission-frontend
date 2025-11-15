<template>
<div class="text-center">
<p class=" pt-3">Let's Play The Game</p>
<h2 class="text-primary pb-3">Current Score: {{ gameStore.score }}</h2>
<span class="text-primary pb-3 ">Max Score:{{ gameStore.maxHeat }}</span>
<br/>
<div class="row">
    <div class="col-5 offset-1">
        <button class="form-control btn btn-success p-3">Increment</button>
    </div>
    <div class="col-5 ">
        <button class="form-control btn btn-danger p-3">Decrement</button>
    </div>
    <div class="col-6  pt-2 offset-3">
        <button class="form-control btn btn-warning p-3">Random</button>
    </div>
</div>

</div>
</template>

<script setup>
import { useGameStore } from '@/Store/GameStore';

const gameStore= useGameStore();
</script>