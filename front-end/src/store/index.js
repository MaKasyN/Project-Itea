import Vue from 'vue';
import Vuex from 'vuex';
import apiServise from '../services/apiServices.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beaconCategoriesVisibility: false,
    categoriesList: [],
    currentCategories: [],
    currentItem: [],
  },
  mutations: {
    CHANGE_BEACON_CATEGOTIES_VISIBILITY(state){
      state.beaconCategoriesVisibility = !state.beaconCategoriesVisibility
    },
    SET_CATEGORIES_LIST(state, categoriesList){
      state.categoriesList = categoriesList;
    },
    SET_CURRENT_CATEGORIES(state, currentCategories) {
      state.currentCategories = currentCategories;
    },
    SET_CURRENT_ITEM(state, currentItem) {
      state.currentItem = currentItem;
    }
    
  },
  actions: {
    toggleCategoriesList(context) {
      context.commit('CHANGE_BEACON_CATEGOTIES_VISIBILITY');
    },
    async getCategoriesList(context) {
      
      const categoriesList = await apiServise.getCategoryList();
      console.log(categoriesList);
      context.commit( 'SET_CATEGORIES_LIST', categoriesList )
    },
    async getCurrentCategories(context, id) {
      const currentCategories = await apiServise.getCurrentCategories(id);
      console.log(currentCategories)
      context.commit( 'SET_CURRENT_CATEGORIES', currentCategories )
    },
    getCurentItem(context, currentItem) {
      console.log(currentItem);
      context.commit( 'SET_CURRENT_ITEM', currentItem)
    }
  },
  modules: {

  },
  getters: {
    getBeconCatVisibility: state => state.beaconCategoriesVisibility,
    getCategoriesList: state => state.categoriesList,
    getCurrentCategories: state => state.currentCategories,
    getCurrentItem: state => state.currentItem,
  }
})
