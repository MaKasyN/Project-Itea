<template>
    <div class="cartTable">
        <confirm ref="confirm"></confirm>
        <v-data-table :headers="headers" :items="getProducts" :hide-default-footer="true">
            <template v-slot:no-data>
                <p>Your cart is empty</p>
            </template>

            <template v-slot:item.Price="{ item }">
                <v-chip :color="'green'" dark>{{ item.Price }}</v-chip>
            </template>

            <template v-slot:item.action="{ item }">
                <v-icon medium @click="deleteItem(item)">
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
        <v-btn class="buyButton">
            Buy
        </v-btn>
    </div>
</template>

<script>
    import confirm from '../additional/confirm';

    export default {
        components: {
            confirm,
        },
        data() {
            return {
                headers: [
                    {
                        text: 'Product',
                        value: 'Name',
                        sortable: true,
                        width: 300,
                    },
                    {
                        text: 'Price',
                        value: 'Price',
                        sortable: true,
                        width: 100,
                    },
                    {
                        text: 'Delete',
                        value: 'action',
                        sortable: false,
                        align: 'center',
                        width: 100,
                    },
                ]
            }
        },
        methods: {
            async deleteItem(item) {
                if (await this.$refs.confirm.open('Delete', 'Are you sure?', {color: 'red'})) {
                    console.log(`deleting this item: [${JSON.stringify(item)}]`);
                    this.$store.dispatch('deleteItemFromCart', item);
                } else {
                    console.log('deletion has been cancelled');
                }
            }
        },
        computed: {
            getProducts() {
                let items = this.$store.getters.getCartItems;
                console.log(`cart items: ${JSON.stringify(items)}`);
                return items;
            }
        }
    }
</script>

<style>
    .cartTable {
        margin: 50px;
    }

    .buyButton {
        margin-top: 50px;
        float: right;
        width: 100px;
    }
</style>
