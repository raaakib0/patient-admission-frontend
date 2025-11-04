<template>
  <div class="bg-info p-4 m-2 rounded">
    <div class="row">
      <div class="col-6">
        <h1>Contact Us</h1>
        <p>Name: {{ name }}</p>
        <p>Email: {{ email }}</p>
        <p>Phone: {{ phone }}</p>
        <p class="float-end small" v-if="ownername != ''">
          this info for {{ ownername }}
        </p>
      </div>
      <div class="col-3">
        <!-- <p>isFavourite : {{ isFavourite }}</p> -->
        <button
          @click="emit('update-favorite', {isFavorite: props.isFavourite, name: props.name});"
          :class="[isFavorite ? 'btn btn-warning' : 'btn btn-success']"
        >
          {{ isFavourite ? "Remove From" : "Add to" }} Favorite
        </button>
      </div>
      
      <div class="col-3">
<LuckyNumber :maxNumber="100"></LuckyNumber>

      </div>
    </div>
  </div>
</template>

<script setup>
// import LuckyNumber from "./Components/LuckyNumber2.vue"
import LuckyNumber from "./LuckyNumber2.vue";
import { ref, defineProps } from "vue";
// const email = ref("karim@gmail.com");
const props = defineProps({
  name: { type: String, required: true },
  phone: Number,
  ownername: String,
  email: { type: String, require: false, default: "N/A" },
  isFavourite: Boolean,
});

const emit = defineEmits(["update-favorite"]);

// function toggleFavorite() {
//   // props.isFavourite = !props.isFavourite;
//   emit("update-favorite", {isFavorite: props.isFavourite, name: props.name});
// }
</script>
