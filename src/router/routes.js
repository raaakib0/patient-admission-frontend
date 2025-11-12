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
        {
            path: "/productList",
            component: ProductList,
            name: 'productsList',
            beforeEnter: (to, from) => {
                console.log('before enter per route')
                console.log(to, from);

                const isAdmin = true;
                if (isAdmin) {
                    return true;
                }

                return false;
            },
        },
        { path: "/login", component: LogIn, name: "login" },
        {
            path: "/product/:productId/:categoryId?", component: ProductDetails, name:
                'productDetails', props: true
        },
        { path: "/product", component: ProductDetails },
        { path: "/:catchAll(.*)", component: NotFound },
    ],
});

router.beforeEach((to, from) => {
    console.log("global before each");
    console.log(to, from);

    const isAuthenticated = true;

    if (to.name == 'home') {
        return true;
    }

    if (!isAuthenticated && to.name !== 'login') {
        return { name: 'login' }
    }

    return true;
});

export default router;