<template>
<div class="text-center">
<p class=" pt-3">Let's Play The Game</p>
<h2 class="text-primary pb-3">Current Score:</h2>
<span class="text-primary pb-3 ">Max Score:</span>
<br/>
<div class="row">
    <div class="col-5 offset-1">
        <button class="form-control btn btn-success p-3">Increment</button>
    </div>
    <div class="col-5 ">
        <button class="form-control btn btn-danger p-3">Decrement</button>
    </div>
</div>

</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
function goToContact(){
    router.push({name: 'contact'});
}
</script>