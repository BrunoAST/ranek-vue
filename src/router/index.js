import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/produto/:id",
    name: "product",
    component: () => import(/* webpackChunkName: "product" */ "../views/Product.vue"),
    props: true
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/usuario",
    component: () => import(/* webpackChunkName: "user" */ "../views/user/User.vue"),
    children: [
      {
        path: "",
        name: "user",
        component: () => import(/* webpackChunkName: "userProduct" */ "../views/user/UserProduct.vue")
      },
      {
        path: "compras",
        name: "shopping",
        component: () => import(/* webpackChunkName: "userShopping" */ "../views/user/UserShopping.vue")
      },
      {
        path: "vendas",
        name: "sales",
        component: () => import(/* webpackChunkName: "userSales" */ "../views/user/UserSales.vue")
      },
      {
        path: "editar",
        name: "userEdit",
        component: () => import(/* webpackChunkName: "userEdit" */ "../views/user/UserEdit.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // Ao navegar para a página, o scroll iniciará no topo daquela página.
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

export default router;
