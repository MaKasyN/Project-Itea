<template>
    <div class="footerContainer">
        <div class="footersParagsBlock">
            <div class="pWrapper"
                 v-for="item in footersParags" :key="item">
                <p class="footersParags blue--text text--darken-4">
                    {{item}}
                </p>
            </div>
        </div>
        <p class="body-2">
            <span class="mr-2 blue--text text--darken-4">
                <span class="mr-2">МИ В СОЦМЕРЕЖАХ:</span>
                <v-icon size="18" class="blue--text text--darken-4">mdi-telegram</v-icon>
                <v-icon size="18" class="blue--text text--darken-4">mdi-facebook</v-icon>
                <v-icon size="18" class="blue--text text--darken-4">mdi-instagram </v-icon>
            </span>
            <span class="ml-2 blue--text text--darken-4">
                <v-icon size="18" class="blue--text text--darken-4"> mdi-phone</v-icon>
                <span class="ml-2">(xxx)xxx-xx-xx</span>
            </span>
        </p>
        <p class="overline blue--text text--darken-4">food-store company</p>
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

<style scoped>
    .footerContainer {
        width: 100%;
        height: 30vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .footersParagsBlock {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }

    .pWrapper {
        margin: 15px 0;
        border-left: 1px solid #1976D2;
    }

    .pWrapper:first-child {
        border-left: none;
    }

    .footersParags {
        text-transform: uppercase;
        padding: 0 30px;
        margin: 0;
    }

    .footersParags:hover:after {
        width: 100%;
    }

    .footersParags:after {
        background-color: #1976D2;
        display: block;
        content: "";
        height: 2px;
        width: 0%;
        -webkit-transition: width .3s ease-in-out;
        -moz-transition: width .3s ease-in-out;
        transition: width .3s ease-in-out;
    }

</style>