<template>
  <div class="col-6 bg-white text-center p-4">
    <h4 class="text-success">Random Number Generator</h4>
    <hr/>
    Max Range:
    <input v-model.number= "maxNumber" class="rounded" type="number" />
    <button class="btn btn-danger text-black" @click="genereateLuckyNumber">
      <span v-if="luckyNumber === 0">
        Generate Lucky Number <br />
        Range(1-{{maxNumber}})
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
const maxNumber = ref(100);
function genereateLuckyNumber() {
  luckyNumber.value = Math.floor(Math.random() * maxNumber.value);
  console.log(luckyNumber.value);
}
</script>
