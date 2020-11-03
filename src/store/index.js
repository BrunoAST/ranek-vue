import Vue from "vue";
import Vuex from "vuex";

import HttpService from '../services/HttpService';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    logged: false,
    user: {
      id: "",
      name: "",
      email: "",
      password: "",
      cep: "",
      rua: "",
      number: "",
      neighborhood: "",
      city: "",
      state: ""
    },
    user_products: null
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.logged = payload;
    },

    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    },

    UPDATE_USER_PRODUCTS(state, payload) {
      state.user_products = payload;
    },

    ADD_USER_PRODUCTS(state, payload) {
      state.user_products.unshift(payload);
    }
  },
  actions: {
    getUser(context, payload) {
      return HttpService.get(`/users/${payload}`)
        .then(res => {
          context.commit("UPDATE_USER", res.data);
          context.commit("UPDATE_LOGIN", true);
        });
    },

    createUser(context, payload) {
      context.commit("UPDATE_USER", { id: payload.email });
      return HttpService.post("/users", payload);
    },

    logoutUser(context) {
      context.commit("UPDATE_USER", {
        id: "",
        name: "",
        email: "",
        password: "",
        cep: "",
        rua: "",
        number: "",
        neighborhood: "",
        city: "",
        state: ""
      });

      context.commit("UPDATE_LOGIN", false);
    },

    getUserProducts(context) {
      return HttpService.get(`/products?user_id${context.state.user.id}`)
        .then(res => {
          context.commit("UPDATE_USER_PRODUCTS", res.data);
        });
    }
  },
  modules: {}
});
