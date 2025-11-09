import Contact from "@/Components/Home/Contact.vue";
import HomePage from "@/Components/Home/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
history: createWebHistory(),
routes: [
    {path: "/", component:HomePage},
    {path: "/contact", component: Contact}
],
});