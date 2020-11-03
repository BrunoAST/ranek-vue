<template>
    <section>
        <h1>Compre ou Venda</h1>

        <ProductsSearch />

        <ProductsList />
    </section>
</template>

<script>
import ProductsSearch from '@/components/ProductsSearch.vue';
import ProductsList from '@/components/ProductsList.vue';

export default {
    name: "home",

    components: {
        ProductsSearch,
        ProductsList
    }
}
</script>

<style scoped>
    h1 {
        font-size: 2rem;
        color: #87f;
        margin-top: 40px;
        text-align: center;
    }
</style>
