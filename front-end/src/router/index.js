import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '@/components/mainEl/homePage.vue';
import storeWindow from '@/components/mainEl/storeWindow.vue';
import goodsWindow from '@/components/mainEl/goodsWindow.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: homePage
    },
    {
        path: '/store',
        name: 'store',
        component: storeWindow
    },
    {
        path: '/goods',
        name: 'goods',
        component: goodsWindow
    },
    {
        path: '/store/'
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
