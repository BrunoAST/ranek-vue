<template>
    <section class="login">
        <h1>Login</h1>
        
        <!-- FORMULÁRIO -->
        <form>
            <!-- EMAIL -->
            <label for="email">Email</label>
            <input type="email" name="email" id="email" v-model="loginData.email" />
            <!-- /EMAIL -->

            <!-- PASSWORD -->
            <label for="password">Senha</label>
            <input type="password" name="password" id="password" v-model="loginData.password" />
            <!-- /PASSWORD -->

            <button class="btn" type="button" @click="login()">Logar</button>
        </form>
        <!-- /FORMULÁRIO -->

        <p class="forgot-password">
            <a href="/" target="_blank">Esqueceu sua senha? Clique aqui.</a>
        </p>

        <CreateAccount />
    </section>
</template>

<script>
import CreateAccount from '../components/CreateAccount.vue';

export default {
    name: "Login",
    
    components: {
        CreateAccount
    },

    data() {
        return {
            loginData: {
                email: "",
                password: ""
            }
        }
    },

    methods: {
        login() {
            // Atualizando o estado de login.
            this.$store.dispatch("getUser", this.loginData.email);

            this.$router.push({ name: "user" });
        }
    }
}
</script>

<style scoped>
    .login {
        max-width: 500px;
        margin: 0 auto;
        padding: 0 20px;
    }

    h1 {
        text-align: center;
        font-size: 2rem;
        margin-top: 40px;
        color: #87f;
    }

    form {
        display: grid;
    }

    .btn {
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
    }

    .forgot-password {
        text-align: center;
        margin: 20px auto 0 auto;
    }

    .forgot-password a:hover {
        color: #87f;
        text-decoration: underline;
    }
</style>
