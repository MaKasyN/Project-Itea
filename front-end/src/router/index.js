import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../components/main-element/homePage'
import storeWindow from '../components/main-element/storeWindow.vue';
import cart from "../components/main-element/cart";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: homePage,
    },
    {
        path: '/store',
        name: 'store',
        component: storeWindow,
    },
    {
        path: '/cart',
        name: 'cart',
        component: cart,
    },
    {
        path: '/store/',
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
