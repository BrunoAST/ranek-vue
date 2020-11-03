<template>
    <div class="product" v-if="product">
        <p>{{ product.description }}</p>

        <router-link class="product-img" :to="navigateToProduct(product.id)">
            <img v-if="product.photos" :src="product.photos[0].source" :alt="product.photos[0].title" />
            <p>Ver produto</p>
        </router-link>
        <div class="info">
            <p class="price">{{ product.price | numberToPrice }}</p>
            <h2 class="title">{{ product.name }}</h2>

            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
   name: "ProductItem",

   props: {
       product: {
           required: true,
           type: Object
       }
   },

   methods: {
       navigateToProduct(productId) {
           return { name: "product", params: { id: productId } };
       }
   }
}
</script>

<style scoped>
    .product {
        display: grid;
        grid-template-columns: minmax(100px, 200px) 1fr;
        gap: 20px;
        margin-bottom: 40px;
        position: relative;
    }

    .info {
        align-self: end;
    }

    .product-img {
        border-radius: 4px;
        overflow: hidden;
        max-height: 100px;
    }
</style>
