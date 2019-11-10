<template>
    <v-window v-model="window"
              class="pa-5 slider-container"
              show-arrows>
        <v-window-item v-for="(item, i) in getProducts" :key="i">
          <v-card flat class="d-flex elevation-5">
            <v-img :src="getProducts[i].PhotoUrl || ''"
                   height="300px">
            </v-img>
          </v-card>
        </v-window-item>
      </v-window>
</template>

<script>
    export default {
        data() {
            return {
                window: 0,
                categoriesID: '2873'
            }
        },

        mounted() {
          this.$store.dispatch('getProducts', this.categoriesID);
        },

        computed: {
          getProducts() {
              return this.$store.getters.getProducts;
            },
            
        },

        created () {
            setInterval(() => {
            if (++this.window >= this.getProducts) this.window = 0
            }, 10000)
        }
    }
</script>

<style>
    .slider-container{
        margin: 50px 100px!important;
    }
</style>
