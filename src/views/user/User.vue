<template>
    <section class="user">
        <nav class="sidenav">
            <ul>
                <li>
                    <router-link :to="navigateToProducts">Produtos</router-link>
                </li>
                <li>
                    <router-link :to="navigateToShopping">Compras</router-link>
                </li>
                <li>
                    <router-link :to="navigateToSales">Vendas</router-link>
                </li>
                <li>
                    <router-link :to="navigateToEdit">Editar usuário</router-link>
                </li>
                <li>
                    <button type="button" to="/" @click="logout()">Sair</button>
                </li>
            </ul>
        </nav>

        <transition mode="out-in">
            <router-view></router-view>
        </transition>
    </section>
</template>

<script>
export default {
    name: "User",

    computed: {
        navigateToProducts() {
           return { name: "user" };
        },

        navigateToShopping() {
           return { name: "shopping" };
        },

        navigateToSales() {
           return { name: "sales" };
        },

        navigateToEdit() {
           return { name: "userEdit" };
        }
    },

    methods: {
        logout() {
            this.$store.dispatch("logoutUser");
            this.$router.push({ name: "login" });
        }
    }
}
</script>

<style scoped>
    .user {
        display: grid;
        grid-template-columns: minmax(140px, 200px) 1fr;
        gap: 30px;
        max-width: 900px;
        margin: 40px auto;
        padding: 20px;
    }

    .sidenav a, .sidenav button {
        padding: 10px;
        display: block;
        background: #f4f7fc;
        margin-bottom: 10px;
        border-radius: 4px;
    }

    .sidenav a.router-link-exact-active, .sidenav a:hover, .sidenav button:hover {
        background: #87f;
        color: white;
    }

    .sidenav button {
        border: none;
        width: 100%;
        font-size: 1rem;
        text-align: left;
        font-family: 'Nunito', sans-serif;
        cursor: pointer;
    }

    @media screen and (max-width: 500px) {
        .user {
            grid-template-columns: 1fr;
            margin: 0 auto;
        }
    }
</style>
