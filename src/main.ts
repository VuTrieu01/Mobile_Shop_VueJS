import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "./scss/main.scss";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "normalize.css";
import "./firebase";
import VueFire from "vuefire";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueFire);

Vue.config.productionTip = false;

let app: any;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
