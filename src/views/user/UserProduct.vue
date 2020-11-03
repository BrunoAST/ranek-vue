<template>
    <section>
        <h2>Adicionar produto</h2>
        <AddProduct />

        <h2>Seus produtos</h2>
        <transition-group v-if="user_products" name="list" tag="ul">
            <li v-for="(product, index) in user_products" :key="index">
                <ProductItem :product="product">
                    <p>{{ product.description }}</p>
                </ProductItem>
            </li>
        </transition-group>
    </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import AddProduct from '../../components/AddProduct.vue';
import ProductItem from '../../components/ProductItem.vue';

export default {
    name: "UserProduct",

    components: {
        AddProduct,
        ProductItem
    },

    computed: {
        ...mapState(["logged", "user", "user_products"])
    },

    created() {
        if (this.logged) this.getUserProducts();
    },

    watch: {
        logged() {
            this.getUserProducts();
        }
    },

    methods: {
        ...mapActions(["getUserProducts"])
    }
}
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
    }
</style>
