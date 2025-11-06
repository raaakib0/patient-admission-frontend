<template>
<LuckyNumberPareantComponent>

<p class="P-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fugiat dolo</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fugiat dolo</p>
<button @click="showMessage">what will we lern?</button>
<hr/>
</LuckyNumberPareantComponent>
</template>

<script setup>
import { ref } from 'vue';
import LuckyNumberPareantComponent from './Components/LuckyNumberPareantComponent.vue';

const message = ref("");

function showMessage(){
  message.value= "how to use slots"
}

</script>