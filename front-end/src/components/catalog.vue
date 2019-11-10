<template>
    <div class="d-flex flex-column">
        <h2 class="headline categoryTitle mx-5 mt-5 mb-2" @click="showCategoryBeacon = !showCategoryBeacon"
            :class="{ categoryTitle_click : showCategoryBeacon}">Категорії</h2>
        <div v-show="showCategoryBeacon" class="categoryListCard elevation-9">
            <router-link v-for="(item, i) in getCategories"
                        :key=i
                        to='/store'>
                <p @click="getProducts(item)" class="categoryListParag">
                    {{item.Name}}
                </p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                showCategoryBeacon: false,
            }
        },

        methods: {
            getProducts(item) {
                let categoryId = item.ID;
                this.$store.dispatch('getProducts', categoryId);
                this.showCategoryBeacon = !this.showCategoryBeacon;
            }
        },
        computed: {
            getCategories() {
                return this.$store.getters.getCategories;
            },
        }


    }
</script>

<style>
    .categoryTitle{
        text-align: center;
        border-radius: 5px;
        padding: 3px 20px 3px 20px;
        width: 200px;
        border: 1px solid rgba(238,238,238, 0.1);
        cursor: pointer;
        color: rgba(224,224,224, 0.9); 
    }

    .categoryTitle_click{
        border: 1px solid rgba(238,238,238, 0.2);
    }

    .categoryTitle:hover{
        border: 1px solid rgba(238,238,238, 0.2);
        transition-duration: 0.3s;
        color: rgba(255, 202, 40, 0.9);
    }

    .categoryListCard {
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 65vh;
        min-width: 70vw;
        background-color: rgba(66,66,66, 0.9);
        overflow-x:initial;
        padding: 5px!important;
    }

    .categoryListParag:hover {
        color: rgba(224,224,224, 0.9); 
        border: 1px solid rgba(238,238,238, 0.2);
        color: rgba(255, 202, 40, 0.9);
    }

    .categoryListParag {
        padding: 1.5px 15px;
        margin: 0 !important;
        border-radius: 5px;
        cursor: pointer;
        color: rgba(224,224,224, 0.9);
        border: 1px solid rgba(66,66,66, 0.0);
        box-sizing: border-box;
    }

    .categoryListParag:first-child {
        padding-top: 10px;
    }

    .categoryListParag:last-child {
        padding-bottom: 10px;
    }

    a {
        text-decoration: none;
    }

</style>
