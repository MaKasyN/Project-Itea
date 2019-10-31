<template>
    <div class="goodsWindowWrapper">
        <h2 class="grey--text
                   text--darken-2 
                   display-1 
                   font-weight-medium">
            {{getCurrentItem.Name}}
        </h2>
        <div class="imgAndDescribeContainer">
            <div class="goods__imgContainer">
                <v-img class="goodsWindowImg" 
                    :src="getCurrentItem.PhotoUrl">
                </v-img>
            </div>
            <div class="goods__describeContainer
                        elevation-1
                        grey
                        lighten-5
                        body-1 
                        font-weight-medium
                        grey--text
                        text--darken-2">
                <p class="describe">describe</p>
                <p class="priceBlock
                          d-flex 
                          justify-space-between">
                    <span>Ціна:</span>
                    <span>{{getCurrentItem.Price}} UAH</span>
                </p>
                <div class="buttonContainer
                            d-flex
                            flex-row-reverse">
                    <v-btn  color="orange"
                            class="white--text"
                            fab
                            large>
                            <v-icon>mdi-cart</v-icon>
                    </v-btn>
                </div>
            </div>
        </div>
        <div class="reviews grey lighten-5">
            <h2 class="font-weight-medium 
                       headline">
                Відгуки:
            </h2>
            <div class="reviewBox 
                        ma-5 
                        pa-5 
                        elevation-1
                        grey--text
                        text--darken-2">
                <h3 class="px-2">username</h3>
                <p class="">comment text</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        getCurrentItem () {
            return this.$store.getters.getCurrentItem;
        }
    }
}
</script>

<style>

    .goodsWindowWrapper{
        width: 100%;
        height: 100%;
        padding: 30px;
    }

    .imgAndDescribeContainer{
        width: 100%;
        display: flex;
        padding: 40px 20px;
    }

    .goods__imgContainer{
        width: 50%;
        padding-right: 40px;
    }

    .goods__describeContainer{
        width: 50%;
        padding: 50px 100px;
        border-radius: 5px;
    }

    .describe{
        width: 100%;
        height: 200px;
    }

    .priceBlock,
    .buttonContainer,
    .reviews{
        width: 100%;
    }

    .reviewBox{
        border-radius: 5px;
        width: 85%;
    }

    
</style>