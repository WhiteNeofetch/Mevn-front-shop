<template>
    <div class="container">
        <template v-if="cartItems.length > 0">
            <ul class="list-group">
                <li class="list-group-item" v-for="(item,key) in cartItems" :key="key">
                    {{item.title}} - {{item.price}}
                </li>
            </ul>
            <div class="panel">
                Quantity: {{cartCount}}
                Total:{{cartTotalPrice}}
            </div>

            <button class="btn btn-success" @click="handleGetPaymentIntent">Купить</button>
            <template v-if ="paymentIntent">
            <card class='stripe-card'
                  :class='{ complete }'
                  stripe='pk_test_51HfDYfFPsYJOypJEFcvJE8T34m4OGy89erz5sVZ3lDyEBH0H9ZPHYDS1nN7FVU4lKcMLKOBXvXAifBmrnd04Vdtr00s92f9A1k'
                  :options='stripeOptions'
                  @change='complete = $event.complete'
            />
            <button class='btn btn-success' @click='pay' :disabled='!complete'>Pay with credit card</button>
        </template>
</template>

<template v-else>
    Your cart is empty please add items to it
</template>
</div>
</template>

<script>
    import {Card, handleCardPayment} from 'vue-stripe-elements-plus'
    import {mapGetters, mapActions, mapMutations} from 'vuex'

    export default {
        name: 'Cart',
        components: {
            Card
        },
        data() {
            return {
                complete: false,
                stripeOptions: {
                    // see https://stripe.com/docs/stripe.js#element-options for details
                },
                paymentIntent: null
            }
        },
        computed: {
            ...mapGetters({
                cartItems: 'cartItems',
                cartTotalPrice: 'cartTotalPrice',
                cartCount: 'cartCount'
            })
        },
        methods: {
            ...mapActions({
                handleBuy: 'handleBuy',
            }),
            ...mapMutations({
                clearCart: 'clearCart'
            }),
            async handleGetPaymentIntent() {
                const intent = await this.handleBuy()
                this.paymentIntent = intent.client_secret;
            },
            async pay() {
                try {
                    await handleCardPayment(this.paymentIntent)
                    this.clearCart();
                } catch (e) {

                }

            }
        }
    }
</script>

<style lang="scss">
    .stripe-card {
        width: 300px;
        border: 1px solid grey;
    }

    .stripe-card.complete {
        border-color: green;
    }
</style>