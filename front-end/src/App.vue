<template>
    <v-app class="">
        <div class="categoriesBoxContainer">
            <appHeader class="haderContainer"></appHeader>
            <div class="main-container">
                <router-view></router-view>
            </div>
            <catalog class="categoriesBox"></catalog>
            <appFooter class=""></appFooter>
        </div>
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
            catalog
        },
        data: () => ({}),
        computed: {
            beaconCategoriesVisible() {
                return this.$store.getters.getBeaconCatVisibility;
            },

        },
        mounted() {
            this.$store.dispatch('getCategories');
        }
    };
</script>

<style>
    .categoriesBoxContainer{
        position: relative;
        top: 0;
        left: 0;
        background: fixed url("./assets/main_background_new.jpg");
        width: 100%;
    }

    .categoriesBox{
        position: absolute;
        top: 11vh;
        left: 30px;
        z-index: 5;
    }

    .main-container{
        min-height: 80vh;
    }

    .v-parallax__content{
        padding: 0!important;
    }

    ::-webkit-scrollbar-button {
        background-color: #42A5F5;
    }

    ::-webkit-scrollbar-track {
        background-color: #42A5F5;
    }

    ::-webkit-scrollbar-track-piece {
        background-color: #ffffff;
    }

    ::-webkit-scrollbar-thumb {
        height: 50px;
        background-color: #42A5F5;
        border-radius: 3px;
    }

    ::-webkit-scrollbar-corner {
        background-color: #42A5F5;
    }

    ::-webkit-resizer {
        background-color: #42A5F5;
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 0;
    }

    .haderContainer{
        margin-bottom: 100px;
    }
</style>
