<template>
    <div class="bg-info">
<h1>Contact Us</h1>
<p>Name: {{ name }}</p>
<p>Email: {{ email }}</p>
<p>Phone: {{ phone }}</p>
<p class="float-end small " v-if="ownername!=''">this info for {{ ownername }}</p>
    </div>
</template>

<script setup>
import {ref, defineProps} from "vue";
const email= ref('karim@gmail.com');
const props = defineProps(['name', 'phone', 'ownername']);
</script>