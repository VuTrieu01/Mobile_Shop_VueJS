<template>
  <div id="app" class="container">
    <MainMenuPage />
    <footer-bar />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import MainMenuPage from "./components/navbar/MainMenuPage.vue";
import FooterBar from "./components/footerbar/FooterBar.vue";
import firebase from "firebase/app";
import "firebase/auth";

@Component({
  components: {
    MainMenuPage,
    FooterBar,
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
    });
    this.$store.dispatch("getDbInfo");
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
.container {
  max-width: 600px;
  margin: 0 auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
