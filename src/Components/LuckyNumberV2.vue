<template>
  <div class="col-4 bg-white text-center p-4">
    <h4 class="text-success">Random Number Generator</h4>
    <hr/>
    Max Range:
    <input v-model.number= "maxNumber" class="rounded" type="number" />
    <button class="btn btn-danger text-black" @click="genereateLuckyNumber">
      <span v-if="luckyNumber === 0">
        Generate Lucky Number <br />
        Range(1-100)
      </span>
      <span v-else >
        Lucky Number: {{ luckyNumber }} <br/> 
        Click to Generate new Lucky Number
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref, } from "vue";
let luckyNumber = ref(0);

function genereateLuckyNumber() {
  luckyNumber.value = Math.floor(Math.random() * 100);
  console.log(luckyNumber.value);
}
</script>
