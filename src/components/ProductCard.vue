<template>
    <div class="card">
        <div class="card_header">
            {{title}} - {{price}}$
        </div>

        <img :src="imageUrl" alt="">
        <div class="card_footer">
            <button class="btn btn-info" @click="$emit('add-to-cart')" v-if="!inCart">Добавить в корзину</button>
            <button class="btn btn-danger" @click="$emit('add-to-cart')" v-else>Убрать из корзины</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductCard',
        props: {
            title: {
                type: String,
                default: ''
            },
            price: {
                type: Number,
                default: 0
            },
            imageUrl: {
                type: String,
                default: ''
            },
            inCart:{
                type:Boolean,
                default: false
            }
        }
    }
</script>


<style lang="scss">
    .card {
        width: 340px;
        height: 200px;
        padding: 20px;
        margin: 10px;
        border: 1px solid black;
        border-radius: 10px;

        img {
            background-size: cover;
            width: 50%
        }

    }

</style>