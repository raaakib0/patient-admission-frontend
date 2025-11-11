import Contact from "@/Components/Home/Contact.vue";
import HomePage from "@/Components/Home/HomePage.vue";
import ProductDetails from "@/Components/Product/ProductDetails.vue";
import ProductList from "@/Components/Product/ProductList.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", component: HomePage },
        { path: "/contact", component: Contact },
        { path: "/productList", component: ProductList },
        { path: "/product/:productId", component: ProductDetails },
        { path: "/product", component: ProductDetails }
    ],
});

export default router;