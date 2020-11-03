// Core
import Vue from "vue";
import App from "./App.vue";

// Router
import router from "./router";

// Store
import store from "./store";

// Components
import PageLoading from './components/PageLoading.vue';

// Filters
import NumberToPrice from './filters/NumberToPrice.fiter';

Vue.config.productionTip = false;

Vue.component("PageLoading", PageLoading);

Vue.filter("numberToPrice", NumberToPrice);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
