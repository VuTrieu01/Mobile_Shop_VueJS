import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("../views/ProductPage.vue"),
  },
  {
    path: "/product/:productName/:productId",
    name: "ProductDetail",
    component: () => import("../components/product/ProductDetail.vue"),
  },
  {
    path: "/product/car/:carTypes",
    name: "EachCar",
    component: () => import("../components/product/EachCar.vue"),
  },
  {
    path: "/product/car/:carName/:carFileId",
    name: "CarInfo",
    component: () => import("../components/product/CarInfo.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutPage.vue"),
  },
  {
    path: "/new",
    name: "New",
    component: () => import("../views/NewPage.vue"),
  },
  {
    path: "/new/:newTitle/:newId",
    name: "NewDetail",
    component: () => import("../components/new/NewDetail.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/ContactPage.vue"),
  },
  {
    path: "/todo",
    name: "Todo",
    component: () => import("../views/Todo.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: () => import("../views/ErrorPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  let documentTitle = `${process.env.VUE_APP_TITLE} | ${to.name}`;
  if (to.params.pageTitle) {
    documentTitle += `${to.params.pageTitle}`;
  }
  document.title = documentTitle;
  next();
});

export default router;
