<template>
  <v-app class="blue lighten-2">
    <appHeader class="blue lighten-5"></appHeader>
    <div class="d-flex">
      <catalog class="catalog"></catalog>
      <router-view></router-view>
    </div>
    <appFooter class="blue lighten-3"></appFooter>
  </v-app>
</template>

<script>
import appHeader from './components/layout/header/appHeader.vue';
import appFooter from './components/layout/footer/appFooter.vue';
import catalog from './components/catalog.vue'; 

export default {


  name: 'App',
  components: {
    appHeader,
    appFooter,
    catalog,
  },
  data: () => ({
    
  }),
  computed: {
    beaconCategoriesVisible () {
      return this.$store.getters.getBeconCatVisibility;
    },
    
  },
  mounted() {
      this.$store.dispatch('getCategoriesList');
    }
};
</script>

<style>
.catalog{
  max-height: 65vh;
  max-width: 400px;
  z-index: 3;
  margin: 50px;
  overflow: scroll;
}
</style>
