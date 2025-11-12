<template>
    <h1>home page</h1>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
function goToContact(){
    router.push({name: 'contact'});
}
</script>