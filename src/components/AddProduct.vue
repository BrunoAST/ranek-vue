<template>
    <form class="add-product">
        <!-- NOME -->
        <label for="name">Nome</label>
        <input type="text" id="name" name="name" v-model="product.name" />
        <!-- /NOME -->

        <!-- PREÇO -->
        <label for="price">Preço (R$)</label>
        <input type="number" id="price" name="price" v-model="product.price" />
        <!-- /PREÇO -->

        <!-- FOTOS -->
        <label for="photos">Fotos</label>
        <input type="file" id="photos" name="photos" ref="photos" />
        <!-- /FOTOS -->

        <!-- DESCRIÇÃO -->
        <label for="description">Descrição</label>
        <textarea id="description" name="description" v-model="product.description"></textarea>
        <!-- /DESCRIÇÃO -->

        <button class="btn" type="submit" @click.prevent="addProduct()">Adicionar produto</button>
    </form>
</template>

<script>
import HttpService from "../services/HttpService.js";

export default {
    name: "AddProduct",

    data() {
        return {
            product: {
                name: "",
                price: "",
                description: "",
                photos: null
            }
        }
    },

    methods: {
        formatProduct() {
            this.product.user_id = this.$store.state.user.id;
        },

        addProduct() {
            HttpService.post("/products", this.product)
                .then(() => this.$store.dispatch("getUserProducts"));
        }
    }
}
</script>

<style scoped>
    .add-product {
        display: grid;
        grid-template-columns: 100px 1fr;
        align-items: center;
        margin-bottom: 60px;
    }

    .btn {
        grid-column: 2;
    }
</style>
