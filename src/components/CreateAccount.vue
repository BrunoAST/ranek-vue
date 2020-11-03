<template>
    <section>
        <h2>Cadastrar</h2>

        <transition mode="out-in">
            <button
                type="button"
                class="btn"
                v-if="!create"
                @click="create = true"
            >
                Cadastrar
            </button>

            <UserForm v-else>
                <button type="button" class="btn btn-form" @click="createUser()">
                    Cadastrar usuário
                </button>
            </UserForm>
        </transition>
    </section>
</template>

<script>
import UserForm from '../components/UserForm.vue';

export default {
    name: "CreateAccount",

    components: {
        UserForm
    },

    data() {
        return {
            create: false
        }
    },

    methods: {
        async createUser() {
            try {
                await this.$store.dispatch("createUser", this.$store.state.user);
                await this.$store.dispatch("getUser", this.$store.state.user.email);
                this.$router.push({ name: "user" });
            } catch(error) {
                console.error(error);
            }
        }
    }
}
</script>

<style scoped>
    h2 {
        text-align: center;
        margin-top: 40px;
        margin-bottom: 10px;
    }

    .btn {
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
    }

    .btn-form {
        max-width: 100%;
    }
</style>
