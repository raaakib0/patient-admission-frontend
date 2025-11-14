<template>
  <div v-if="destinationObj.isLoading" class="d-flex justify-content-center">
    <Loader></Loader>
  </div>
  <div class="container p-4 bg-white">
    <div><h1 class="text-success text-center">Travelopedia</h1></div>
    <hr />
    <table class="table table-striped table-light">
      <thead>
        <tr>
          <th>Name</th>
          <th>Days</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="table-light"
          v-for="destination in destinationObj.destinationList"
          :key="destination.ID"
        >
          <td>{{ destination.Name }}</td>
          <td>{{ destination.Days }}</td>
          <td>{{ destination.Price_USD }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- <div v-for="destination in destinationObj.destinationList" :key="destination.ID">
    <p>{{ user.name }}</p>
    <p>{{ user.email }}</p>
    <hr />
  </div> -->
</template>

<script setup>
import { onMounted, reactive } from "vue";
import axios from "axios";

const destinationObj = reactive({
  destinationList: [],
  isLoading: false,
});

onMounted(() => {
  // fetch("https://jsonplaceholder.typicode.com/users")
  // .then((response) => response.json())
  // .then((data)=>{
  //   console.log(data);
  //   destinationObj.destinationList= data;
  // });

  loadDestination();
});

function loadDestination() {
  destinationObj.isLoading = true;
  axios.get("http://localhost:3000/destination").then((response) => {
    new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
      console.log(response.data);
      destinationObj.destinationList = response.data;
      destinationObj.isLoading = false;
    });
  });
}
</script>
