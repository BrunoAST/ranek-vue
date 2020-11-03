<template>
    <section class="products-container">
        <transition mode="out-in">
            <!-- LISTA DE PRODUTOS -->
            <div v-if="hasProducts" class="products" key="products">
                <ul class="product" v-for="(product, index) in products" :key="index">
                    <!-- QUANDO ITEM CLICADO, NAVEGAR PARA -->
                    <router-link :to="navigateTo(product.id)">
                        <li>
                            <img
                                v-if="product.photos"
                                :src="product.photos[0].source"
                                :alt="product.photos[0].title"
                            />
                            <p class="price">
                                {{ product.price | numberToPrice }}
                            </p>
                            <h2 class="title">
                                {{ product.name }}
                            </h2>
                            <p>
                                {{ product.description }}
                            </p>
                        </li>
                    </router-link>
                    <!-- /QUANDO ITEM CLICADO, NAVEGAR PARA -->
                </ul>

                <ProductsPagination :total="total" :pageSize="pageSize" />
            </div>
            <!-- /LISTA DE PRODUTOS -->

            <!-- NENHUM PRODUTO ENCONTRADO -->
            <div v-else-if="productsListEmpty" key="no-results">
                <p class="no-results">Busca sem resultados. Tente buscar por outro termo.</p>
            </div>
            <!-- /NENHUM PRODUTO ENCONTRADO -->

            <!-- INDICADOR DE PAGINA CARREGANDO -->
            <PageLoading v-else key="loading" />
            <!-- /INDICADOR DE PAGINA CARREGANDO -->
        </transition>
    </section>
</template>

<script>
import ProductsPagination from './ProductsPagination.vue';
import HttpService from '../services/HttpService';
import { serialize } from '../helpers/Serialize';

export default {
    name: "ProductsList",
    
    components: {
        ProductsPagination
    },

    data() {
        return {
            products: null,
            total: 0,
            pageSize: 3
        }
    },

    created() {
        this._getProducts();
    },

    methods: {
        navigateTo(productId) {
            return { name: 'product', params: { id: productId } }
        },

        _getProducts() {
            HttpService.get(this.url).then(res => {
                this.products = res.data;
                this.total = Number(res.headers['x-total-count']);
            });
        }
    },

    computed: {
        hasProducts() {
            return this.products && this.products.length;
        },

        productsListEmpty() {
            return this.products && this.products.length === 0;
        },
        
        url() {
            return `/products?_limit=${this.pageSize}${serialize(this.$route.query)}`;
        }
    },

    watch: {
        url() {
            this._getProducts();
        }
    }
}
</script>

<style scoped>
    .products-container {
        max-width: 1000px;
        margin: 0 auto;
    }

    .v-enter, .v-leave-to {
        opacity: 0;
    }

    .v-enter {
        transform: translate3d(0, -20px, 0);
    }

    .v-leave-to {
        transform: translate3d(0, 20px, 0);
    }

    .v-enter-active, .v-leave-active {
        transition: all 300ms;
    }

    .products {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        margin: 30px;
    }

    .product {
        box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
        padding: 10px;
        background: white;
        border-radius: 4px;
        transition: all 200ms;
    }

    .product:hover {
        box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
        transform: scale(1.1);
        position: relative;
        z-index: 1;
    }

    .product img {
        border-radius: 4px;
        margin-bottom: 20px;
    }

    .title {
        margin-bottom: 10px;
    }

    .price {
        font-weight: bold;
        color: #e80;
    }

    .no-results {
        text-align: center;
    }
</style>
