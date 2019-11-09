<template>
    <v-app class="">
        <v-parallax src="./assets/main_background.jpg" height="100%">
            <appHeader class=""></appHeader>
            <div class="main-container">
                <router-view></router-view>
            </div>
            <appFooter class=""></appFooter>
        </v-parallax>
    </v-app>
</template>

<script>
    import appHeader from './components/layout/header/appHeader.vue';
    import appFooter from './components/layout/footer/appFooter.vue';

    export default {
        name: 'App',
        components: {
            appHeader,
            appFooter
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
    .main-container{
        min-height: 60vh;
    }

    .v-parallax__content{
        padding: 0!important;
    }
</style>
