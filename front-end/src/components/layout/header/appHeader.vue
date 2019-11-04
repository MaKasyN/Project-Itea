<template>
    <div class="header">
        <div class="logoAndTitleContainer blue--text text--darken-3">
            <h1 class="headerTitle">Food store (logo & Title)</h1>
        </div>
        <div class="headerContainer">
            <div class="wrapper_topLine">
                <div class="rightHeaderPart">

                    <div class="headerBox blue--text text--darken-4">
                        <v-icon v-show="isCartEmpty()" class="headerBox__icon blue--text text--darken-4"
                                size="40px">
                            mdi-cart
                        </v-icon>
                        <p v-show="!isCartEmpty()"
                           class="ml-3 body-1 labelContainer__items bottomLable">{{ getCartItemsCount() }}</p>
                        <div class="labelContainer blue--text text--darken-4">
                            <p class="ml-3 body-1 labelContainer__items bottomLable"> Кошик</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            toggleCategoriesVisible() {
                this.$store.dispatch('toggleCategoriesList');
            },
            getCartItemsCount() {
                return this.$store.getters.getCartItemsCount;
            },
            isCartEmpty() {
                return this.$store.getters.getCartItemsCount === 0;
            },
        },
    }
</script>

<style>

    .menuButton {
        width: 90%;
    }

    .tolBarMenuWrapper {
        width: 140px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        z-index: 1;
    }

    .bottomLevelOfHeader {
        width: 100%;
        height: 50%;
        display: flex;
    }

    .underLogoBox {
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .underTopLineToolBar {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .wrapper_topLine {
        width: 100%;
        height: 50%;
        display: flex;
    }

    .headerTitle {
        font-size: 24px;
    }

    .header {
        display: flex;
        width: 100%;
        height: 20vh;
        padding: 10px 40px;
    }

    .topLevelOfHeader {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        width: 100%;
        height: 50%;
    }

    .logoAndTitleContainer {
        height: 100%;
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .searchTextField {
        margin: 0 !important;
        height: 50px;
    }

    .searchTextFieldContainer {
        width: 50%;
        margin: 0 20px !important;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .headerBox {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15%;
        height: 100%;
        margin: 0 20px 0 !important;

    }

    .labelContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .labelContainer__items {
        padding: 0 !important;
        margin: 0 0 0 5px !important;
    }

    .topLable {
        font-size: 16px;
    }

    .bottomLable {
        font-size: 12px;
    }

    .bottomLevelOfHeader {
        height: 50%;
        width: 100%;
    }

    .rightHeaderPart {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        padding: 5px 0 0 0;
    }

    .headerBox__icon {
        height: 100%;
    }

    .headerContainer {
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 100%;
    }

</style>