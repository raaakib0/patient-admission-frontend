import LogIn from "@/Components/Authentication/LogIn.vue";
import Contact from "@/Components/Home/Contact.vue";
import HomePage from "@/Components/Home/HomePage.vue";
import NotFound from "@/Components/Layout/NotFound.vue";
import ProductDetails from "@/Components/Product/ProductDetails.vue";
import ProductList from "@/Components/Product/ProductList.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", component: HomePage },
        { path: "/contact-us", component: Contact, name: 'contact' },
        { path: '/contact', redirect: { name: 'contact' } },
        { path: "/productList", component: ProductList },
        { path: "/login", component: LogIn, name: "login" },
        {
            path: "/product/:productId/:categoryId?", component: ProductDetails, name:
                'productDetails', props: true
        },
        { path: "/product", component: ProductDetails },
        {path: "/:catchAll(.*)", component: NotFound},
    ],
});

export default router;