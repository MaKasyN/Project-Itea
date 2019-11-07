<template>
    <div class="storeCardWrapper pa-5">
        <v-dialog v-model="dialog">
            <v-btn class="closeBtn grey--text text--lighten-1" @click="dialog = !dialog" icon>
                <v-icon>mdi-close</v-icon>
            </v-btn>
             <v-card class="mx-auto ma-5 woodCard" color="grey lighten-4" width="400" max-width="600">
                    <v-img :aspect-ratio="16/9" :src="getProducts[index].PhotoUrl || ''">
                    </v-img>
                    <v-card-text class="pt-6" style="position: relative;">
                        <v-btn @click="addToCart(getProducts[index])" absolute color="orange" class="white--text" fab large right top>
                            <v-icon>mdi-cart</v-icon>
                        </v-btn>
                        <h3 class="body-1 font-weight-medium orange--text mb-2">
                            {{getProducts[index].Name}}
                        </h3>
                        <div class="priceCardParag body-2 font-weight-light grey--text title mb-2">
                            <span>Ціна</span>
                            <span class="font-weight-medium">{{getProducts[index].Price}} UAH</span>
                        </div>
                        <div class="body-2 font-weight-light mb-2 priceCardParag">
                            <span>{{getProducts[index].Description}}</span>
                        </div>
                    </v-card-text>
                </v-card>
        </v-dialog>
        
        <v-card class="mx-auto ma-5 woodCard" color="grey lighten-4" width="400" max-width="600"
                v-for="(item, i) in getProducts"
                :key="`storeCards${i}`">
            <v-img :aspect-ratio="16/9" :src="item.PhotoUrl || ''" @click="dialogTogge(i)"></v-img>
            <v-card-text class="pt-6" style="position: relative;">
                <v-btn @click="addToCart(item)" absolute color="orange" class="white--text" fab large right top>
                    <v-icon>mdi-cart</v-icon>
                </v-btn>
                <h3 class="body-1 font-weight-medium orange--text mb-2">
                    {{item.Name}}
                </h3>
                <div class="priceCardParag  body-2 font-weight-light grey--text title mb-2">
                    <span>Ціна</span>
                    <span class="font-weight-medium">{{item.Price}} UAH</span>
                </div>
                <div class="body-2 font-weight-light mb-2 priceCardParag">
                    <span>{{item.Description}}</span>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialog: false,
                index: 1,
            }
        },
        methods: {
            addToCart(item) {
                console.log(`before adding to cart: [${JSON.stringify(item)}]`);
                this.$store.dispatch('addItemToCart', item);
            },
            dialogTogge(i){
                this.dialog = !this.dialog;
                this.index = i;
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
    }

    .priceCardParag {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .woodCard{
        cursor: pointer;
    }

    .v-dialog--active{
        width: 50%!important;
        height: 70%!important;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .closeBtn{
        position: absolute;
        top: 18%;
        right: 27%;
    }
</style>
