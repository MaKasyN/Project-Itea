<template>
    <div class="footerContainer">
        <div class="footersParagsBlock">
            <div class="d-flex align-center pWrapper"
                 v-for="item in footersParags" :key="item">
                <p class="footersParags cursor-pointer paragraph-color">
                    {{item}}
                </p>
            </div>
        </div>
        <p class="body-2">
            <span class="mr-2">
                <span class="mr-2 cursor-default paragraph-color">МИ В СОЦМЕРЕЖАХ:</span>
                <v-icon size="18" class="cursor-pointer layout-icon-color">mdi-telegram</v-icon>
                <v-icon size="18" class="cursor-pointer layout-icon-color">mdi-facebook</v-icon>
                <v-icon size="18" class="cursor-pointer layout-icon-color">mdi-instagram </v-icon>
            </span>
            <span class="ml-2">
                <v-icon size="18" class="cursor-pointer layout-icon-color"> mdi-phone</v-icon>
                <span class="ml-2 cursor-default paragraph-color">(xxx)xxx-xx-xx</span>
            </span>
        </p>
        <p class="overline cursor-default paragraph-color">food-store company</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                footersParags: {
                    item1: "Про Нас",
                    item2: "Блог",
                    item3: "Акції",
                    item4: "Розрахунок і доставка",
                    item5: "Як зробити замовлення",
                    item6: "Бонуси",
                    item7: "Контакти"
                }
            }
        }
    }
</script>

<style>
    .footerContainer {
        width: 100%;
        height: 30vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(66,66,66,0.1);
    }

    .footersParagsBlock {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }

    .pWrapper {
        margin: 15px 0;
        border-left: 1px solid rgba(117,117,117, 0.9);
    }

    .pWrapper:first-child {
        border-left: none;
    }

    .footersParags {
        text-transform: uppercase;
        padding: 0 30px!important;
        margin: 0!important;
    }

    .footersParags:hover:after {
        width: 100%;
    }

    .footersParags:after {
        background-color: rgba(117,117,117, 0.9);
        display: block;
        content: "";
        height: 2px;
        width: 0%;
        -webkit-transition: width .3s ease-in-out;
        -moz-transition: width .3s ease-in-out;
        transition: width .3s ease-in-out;
    }

    .cursor-pointer{
        cursor: pointer;
    }

    .cursor-default{
        cursor: default;
    }

    .layout-icon-color{
        color: rgba(117,117,117, 0.9)!important;
    }

    .paragraph-color{
        color:rgba(224,224,224, 0.9);
    }

</style>
