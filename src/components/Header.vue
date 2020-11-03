<template>
    <header>
        <nav>
            <!-- LOGO -->
            <router-link class="logo" to="/">
                <img src="@/assets/ranek.svg" alt="Ranek" />
            </router-link>
            <!-- /LOGO -->

            <!-- USUARIO LOGADO -->
            <router-link class="btn" to="/usuario" v-if="isLogged">
                {{ name }}
            </router-link>
            <!-- /USUARIO LOGADO -->

            <!-- LOGIN -->
            <router-link class="btn" to="/login" v-else>
                Vender/Login
            </router-link>
            <!-- /LOGIN -->
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header",

    computed: {
        isLogged() {
            return this.$store.state.logged;
        },

        name() {
            return this.$store.state.user.name.replace(/\s.*/, "");
        }
    }
}
</script>

<style scoped>
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 20px;
        box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
    }

    .logo {
        padding: 10px 0;
    }

    .logo img {
        width: 90px;
        transition: opacity 200ms;
    }

    .logo img:hover {
        opacity: 0.8;
    }
</style>
