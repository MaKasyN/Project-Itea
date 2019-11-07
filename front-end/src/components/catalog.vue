<template>
    <v-card class="categoryListCard elevation-1">
        <router-link v-for="(item, i) in getCategories"
                     :key=i
                     to='/store'>
            <p @click="getProducts(item)" class="categoryListParag blue--text text--darken-4">
                {{item.Name}}
                <v-icon class="blue--text text--darken-4">mdi-arrow-right</v-icon>
            </p>
        </router-link>
    </v-card>
</template>

<script>
    export default {
        methods: {
            getProducts(item) {
                let categoryId = item.ID;
                this.$store.dispatch('getProducts', categoryId);
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
    .categoryListCard {
        border-radius: 10px;
    }

    .categoryListParag:hover {
        background-color: #E3F2FD;
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 0;
    }

    ::-webkit-scrollbar-button {
        background-color: #42A5F5;
    }

    ::-webkit-scrollbar-track {
        background-color: #42A5F5;
    }

    ::-webkit-scrollbar-track-piece {
        background-color: #ffffff;
    }

    ::-webkit-scrollbar-thumb {
        height: 50px;
        background-color: #42A5F5;
        border-radius: 3px;
    }

    ::-webkit-scrollbar-corner {
        background-color: #42A5F5;
    }

    ::-webkit-resizer {
        background-color: #42A5F5;
    }

    .categoryListParag {
        padding: 2.5px 30px;
        margin: 0 !important;
        border-radius: 10px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
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
