import Vue from 'vue';
import Vuex from 'vuex';
import apiService from '../services/apiServices.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        beaconCategoriesVisibility: false,
        categories: [],
        products: [],
        currentItem: {},
    },
    mutations: {
        CHANGE_BEACON_CATEGORIES_VISIBILITY(state) {
            state.beaconCategoriesVisibility = !state.beaconCategoriesVisibility
        },
        SET_CATEGORIES(state, categories) {
            state.categories = categories;
        },
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        SET_CURRENT_ITEM(state, currentItem) {
            state.currentItem = currentItem;
        }

    },
    actions: {
        toggleCategoriesList(context) {
            context.commit('CHANGE_BEACON_CATEGORIES_VISIBILITY');
        },
        async getCategories(context) {
            const categories = await apiService.getCategories();
            console.log(`retrieved categories: ${JSON.stringify(categories)}`);
            context.commit('SET_CATEGORIES', categories);
        },
        async getProducts(context, id) {
            const products = await apiService.getProducts(id);
            console.log(`retrieved products for category #${id}: ${JSON.stringify(products)}`);
            context.commit('SET_PRODUCTS', products);
        },
        getCurrentItem(context, currentItem) {
            console.log(currentItem);
            context.commit('SET_CURRENT_ITEM', currentItem)
        }
    },
    modules: {},
    getters: {
        getBeaconCatVisibility: state => state.beaconCategoriesVisibility,
        getCategories: state => state.categories,
        getProducts: state => state.products,
        getCurrentItem: state => state.currentItem,
    }
})
