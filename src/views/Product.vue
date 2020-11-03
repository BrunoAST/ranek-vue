<template>
    <section>
        <div class="product" v-if="product">
            <!-- LISTA DE FOTOS -->
            <ul class="photos" v-if="product.photos">
                <li v-for="(photo, index) in product.photos" :key="index">
                    <img :src="photo.source" :alt="photo.title" />
                </li>
            </ul>
            <!-- /LISTA DE FOTOS -->

            <!-- INFORMAÇÕES DO PRODUTO -->
            <div class="info">
                <h1>{{ product.name }}</h1>
                <p class="price">{{ product.price | numberToPrice }}</p>
                <p class="description">{{ product.description }}</p>
                <button class="btn" v-if="product.sold === 'false'">Comprar</button>
                <button class="btn" disabled v-else>Produto vendido</button>
            </div>
            <!-- /INFORMAÇÕES DO PRODUTO -->
        </div>

        <!-- INDICADOR DE PAGINA CARREGANDO -->
        <PageLoading v-else />
        <!-- /INDICADOR DE PAGINA CARREGANDO -->
    </section>
</template>

<script>
import HttpService from '../services/HttpService';

export default {
    name: "Product",

    props: {
        id: {
            required: true,
            type: String
        }
    },

    data() {
        return {
            product: null
        }
    },

    created() {
        this._getProduct();
    },

    methods: {
        _getProduct() {
            HttpService.get(`/products/${this.id}`)
                .then(res => this.product = res.data);
        }
    }
}
</script>

<style scoped>
    .product {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
        max-width: 900px;
        padding: 60px 20px;
        margin: 0 auto;
    }

    .photos {

    }

    .info {

    }

    .price {
        color: #e80;
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: 40px;
    }

    .description {
        font-size: 1.2rem;
    }

    .btn {
        margin-top: 60px;
        width: 200px;
    }
</style>
