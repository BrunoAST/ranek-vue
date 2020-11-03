<template>
    <form>
        <!-- NOME -->
        <label for="name">Nome</label>
        <input type="text" id="name" name="name" v-model="name" />
        <!-- /NOME -->

        <!-- EMAIL -->
        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model="email" />
        <!-- /EMAIL -->

        <!-- PASSWORD -->
        <label for="password">Senha</label>
        <input type="password" id="password" name="password" v-model="password" />
        <!-- /PASSWORD -->

        <!-- CEP -->
        <label for="cep">CEP</label>
        <input type="text" id="cep" name="cep" @keyup="autoFillAddress()" v-model="cep" />
        <!-- /CEP -->

        <!-- RUA -->
        <label for="street">Rua</label>
        <input type="text" id="street" name="street" v-model="street" />
        <!-- /RUA -->

        <!-- NÚMERO -->
        <label for="number">Número</label>
        <input type="text" id="number" name="number" v-model="number" />
        <!-- /NÚMERO -->

        <!-- BAIRRO -->
        <label for="neighborhood">Bairro</label>
        <input type="text" id="neighborhood" name="neighborhood" v-model="neighborhood" />
        <!-- /BAIRRO -->

        <!-- CITY -->
        <label for="city">Cidade</label>
        <input type="text" id="city" name="city" v-model="city" />
        <!-- /CITY -->

        <!-- ESTADO -->
        <label for="state">Estado</label>
        <input type="text" id="state" name="state" v-model="state" />
        <!-- /ESTADO -->

        <div class="button">
            <slot></slot>
        </div>
    </form>
</template>

<script>
import { mapFields } from '../helpers/MapFields.js';
import HttpService from '../services/HttpService.js';

export default {
    name: "UserForm",

    computed: {
        ...mapFields({
            fields: ["name", "email", "password", "cep", "street", "number", "neighborhood", "city", "state"],
            base: "user",
            mutation: "UPDATE_USER"
        })
    },

    methods: {
        autoFillAddress() {
            const cep = this.cep.replace(/\D/g, "");

            if (!cep || cep.length < 8) return;

            HttpService.getCep(cep)
                .then(res => {
                    this.street = res.data.logradouro;
                    this.neighborhood = res.data.bairro;
                    this.state = res.data.uf;
                    this.city = res.data.localidade;
                });
        }
    }
}
</script>

<style scoped>
    form {
        display: grid;
        grid-template-columns: 80px 1fr;
        align-items: center;
    }

    .button {
        grid-column: 2;
        margin-top: 10px;
    }
</style>
