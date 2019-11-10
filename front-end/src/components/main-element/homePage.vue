<template>
    <div class="homePageContainer">
        <slider></slider>
    </div>
</template>

<script>
    import slider from "../slider.vue";

    export default {
        components: {
            slider
        },

    }
</script>

<style>
    .homePageContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
