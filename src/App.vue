<template>
    <div id="app">
        <!--    <router-link to="/">Home</router-link> |-->
        <!--    <router-link to="/about">About</router-link>-->
        <MevnHeader :categories="categories" :cartCount="cartCount"/>
        <router-view/>
    </div>

</template>

<script>
    import  {mapGetters,mapActions} from 'vuex'
    import MevnHeader from '@/components/layouts/Header'

    export default {
        name: 'App',
        components: {
            MevnHeader
        },
        mounted() {
            this.fetchCategories()
            console.log(this.$store)
        },
        methods:{
            ...mapActions({
                fetchCategories: 'fetchCategories'
            })
        },
        computed:{
            ...mapGetters({
                categories: 'categories',
                cartCount: 'cartCount'
            }),
        }
    }
</script>

<style lang="scss">
    body, html {
        padding: 0;
        margin: 0;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
