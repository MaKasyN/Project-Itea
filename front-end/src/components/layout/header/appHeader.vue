<template>
    <div class="header paragraph-color">
        <div class="logoAndTitleContainer">
            <h1 class="headerTitle">Food delivery</h1>
        </div>
        <div class="headerContainer">
            <div class="wrapper_topLine">
                <div class="rightHeaderPart">
                    <v-hover v-slot:default="{ hover }">
                        <div class="headerBox" @click="redirectToCartPage" :class='{"elevation-6" : hover}'>
                            <v-icon v-show="isCartEmpty()" class="headerBox__icon layout-icon-color" size="40px">
                                mdi-cart
                            </v-icon>
                            <p v-show="!isCartEmpty()" class="ml-3 body-1 basketCircle labelContainer__items bottomLable elevation-4">
                                {{ getCartItemsCount() }}
                            </p>
                            <div class="labelContainer">
                                <p class="ml-3 body-1 labelContainer__items bottomLable"> Кошик</p>
                            </div>
                        </div>
                    </v-hover>
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
            redirectToCartPage() {
                this.$router.push('/cart');
            }
        },
    }
</script>

<style>

    .menuButton {
        width: 90%;
    }
    
    .headerBox:hover{
        border: 1px solid rgba(238,238,238, 0.2);
        transition-duration: 0.3s;
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
        height: 100%;
        display: flex;
    }

    .headerTitle {
        font-size: 24px;
    }

    .header {
        display: flex;
        width: 100%;
        height: 10vh;
        padding: 10px 40px;
        background-color: rgba(66,66,66, 0.1);
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
        align-items: center;
        padding-right: 30px;
        padding-left: 10px;
        height: 100%;
        margin: 0 20px 0 !important;
        border-radius: 5px;
        cursor: pointer;
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

    .basketCircle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }

</style>
