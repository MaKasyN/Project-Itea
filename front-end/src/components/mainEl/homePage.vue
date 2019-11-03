<template>
    <div class="homePageContainer">
        <slider/>
        <cards/>
        <informationBlock/>
    </div>
</template>

<script>
    import slider from "@/components/slider.vue";
    import cards from "@/components/cards.vue";
    import informationBlock from "@/components/informationBlock.vue";

    export default {
        components: {
            slider,
            cards,
            informationBlock,

        }
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