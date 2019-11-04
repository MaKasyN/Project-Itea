<template>
    <div class="storeCardWrapper 
                pa-5">

        <v-card class="mx-auto ma-5"
                color="grey lighten-4"
                width="400"
                max-width="600"
                v-for="(item, i) in getProducts"
                :key="`storeCards${i}`"
                @click="openCurrentItem(i)">
            <v-img :aspect-ratio="16/9"
                   :src="item.PhotoUrl || ''">
            </v-img>
            <v-card-text class="pt-6"
                         style="position: relative;">
                <v-btn
                        absolute
                        color="orange"
                        class="white--text"
                        fab
                        large
                        right
                        top>
                    <v-icon>mdi-cart</v-icon>
                </v-btn>
                <h3 class="body-1 font-weight-medium orange--text mb-2">{{item.Name}}</h3>
                <div class="priceCardParag  body-2 font-weight-light grey--text title mb-2">
                    <span>Ціна</span>
                    <span class="font-weight-medium">{{item.Price}} UAH</span>
                </div>
                <div class="body-2
                                font-weight-light 
                                mb-2
                                priceCardParag">
                    <span>{{item.Description}}</span>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
            openCurrentItem(i) {
                const currentItem = this.getProducts[i];
                this.$store.dispatch('getCurrentItem', currentItem);
                this.$router.push("/goods");
            }
        },
        computed: {
            getProducts() {
                return this.$store.getters.getProducts;
            }
        }
    }
</script>

<style>
    .storeCardWrapper {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        box-sizing: border-box;
        cursor: pointer;
    }

    .priceCardParag {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
</style>