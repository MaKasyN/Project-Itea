<template>
    <div class="cardWrapper blue lighten-5">
        <v-card v-for="(item, i) in cards"
                :key="`cards${i}`"
                class="blue lighten-3 elevation-1"
                width="344"
                height="85"
                outlined>
        <v-list-item three-line>
            <v-list-item-content>
            <v-list-item-title class="mb-1 blue--text font-weight-medium body text--darken-4">{{item.head}}</v-list-item-title>
            <v-list-item-subtitle class="blue--text body-2 text--darken-4">{{item.content}}</v-list-item-subtitle>
            </v-list-item-content>
    
            <v-list-item-avatar
            tile
            size="60"
            color="grey"
            ></v-list-item-avatar>
        </v-list-item>
        </v-card>
    </div>
</template>

<script>
export default {
    data () {
        return {
            cards: {
                item1: {
                    head: "Зручність",
                    content: "Купуй в кілька кліків"
                },
                item2: {
                    head: "Якість",
                    content: "Товар від перевірених виробників"
                },
                item3: {
                    head: "Асортимент",
                    content: "Більше 50 партнерських компаній"
                }
            }
        }
    }
}
</script>

<style>
    .cardWrapper{
        height: 15vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
</style>