<template>
  <div>
    <div
      class="nav d-flex justify-content-between align-items-center py-3"
      v-if="!checkRoute"
    >
      <router-link :to="{ name: 'Home', params: { pageTitle: 'Main Page' } }">
        <img src="../../assets/logo.png" class="logo" />
      </router-link>
      <ul class="menu">
        <router-link
          tag="li"
          :to="{ name: 'Home', params: { pageTitle: 'Main Page' } }"
          exact
        >
          <a>Home</a>
        </router-link>
        <router-link tag="li" :to="{ name: 'Product' }">
          <a>Product</a>
        </router-link>
        <router-link tag="li" :to="{ name: 'About' }">
          <a>About</a>
        </router-link>
        <router-link tag="li" :to="{ name: 'New' }">
          <a>New</a>
        </router-link>
        <router-link tag="li" :to="{ name: 'Contact' }">
          <a>Contact</a>
        </router-link>
        <router-link
          tag="li"
          :to="{ name: 'Todo', params: { pageTitle: 'Todo Page' } }"
        >
          <a>Todo</a>
        </router-link>
      </ul>
      <div>
        <div v-if="!user" class="login fw-bold">
          <router-link tag="li" :to="{ name: 'Login' }">
            <a>Login/Register</a>
          </router-link>
        </div>
        <div class="d-flex align-items-center" v-else>
          <div class="cart"><i class="bi bi-cart"></i></div>
          <div @click="toggleProfileMenu" class="profile">
            <span>{{ $store.state.profileInitials }}</span>
            <div v-show="profileMenu" class="profile__menu">
              <div class="info">
                <p class="initials">{{ $store.state.profileInitials }}</p>
                <div class="right">
                  <p>{{ $store.state.name }}</p>
                  <p>{{ $store.state.user.email }}</p>
                </div>
              </div>
              <div class="options">
                <div>
                  <router-link class="option" to="#">
                    <i class="bi bi-person"></i>
                    <p>Profile</p>
                  </router-link>
                </div>
                <div>
                  <router-link class="option" to="#">
                    <i class="bi bi-box-seam"></i>
                    <p>Order status</p>
                  </router-link>
                </div>
                <div @click="signOut" class="option">
                  <i class="bi bi-box-arrow-right"></i>
                  <p>Sign out</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import firebase from "firebase";
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class MainMenuPage extends Vue {
  public navigation: boolean = false;
  public profileMenu: boolean = false;
  public get checkRoute() {
    if (this.$route.name === "Login" || this.$route.name === "Register") {
      return (this.navigation = true);
    }
    return (this.navigation = false);
  }
  public toggleProfileMenu() {
    this.profileMenu = !this.profileMenu;
  }
  public get user() {
    return this.$store.state.user;
  }
  public signOut() {
    firebase.auth().signOut();
    window.location.reload();
  }
}
</script>

<style lang="scss" scoped>
.nav {
  background-color: #fff;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #e0e6ec;
  z-index: 2;
  .logo {
    cursor: pointer;
    margin: 5px;
    height: 50px;
  }
  .menu {
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      margin: 0 5px;
      a {
        text-decoration: none;
        padding: 10px;
        display: block;
        color: #4f4f60;
        font-weight: bold;
      }
    }
    li:hover {
      border-bottom: 3px solid #3f51b5;
    }
    li.router-link-active {
      border-bottom: 3px solid #3f51b5;
      a {
        color: #3f51b5;
      }
    }
  }
  .cart {
    margin-right: 10px;
  }
  .profile {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #303030;
    &__menu {
      position: absolute;
      cursor: auto;
      top: 50px;
      right: 0;
      width: 250px;
      background-color: #303030;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      .info {
        display: flex;
        align-items: center;
        padding: 15px;
        border-bottom: 1px solid #fff;
        .initials {
          position: initial;
          width: 40px;
          height: 40px;
          background-color: white;
          color: #303030;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin: 0;
        }
        .right {
          text-align: start;
          margin-left: 24px;
          p:nth-child(1) {
            font-size: 14px;
            margin: 0;
          }
          p:nth-child(2),
          p:nth-child(3) {
            font-size: 12px;
            margin: 0;
          }
        }
      }
      .options {
        margin-block: 15px;
        .option {
          cursor: pointer;
          text-decoration: none;
          color: #fff;
          display: flex;
          align-items: center;
          padding: 12px;
          i {
            font-size: 18px;
          }
          p {
            font-size: 14px;
            margin: 0;
            margin-left: 12px;
          }
          &:last-child {
            margin-bottom: 0px;
          }
          &:hover {
            background-color: #fff;
            color: #303030;
          }
        }
      }
    }
  }
  .login {
    color: #4f4f60;
    cursor: pointer;
    li {
      display: inline-block;
      margin: 0 5px;
      a {
        text-decoration: none;
        padding: 10px;
        display: block;
        color: #4f4f60;
        font-weight: bold;
      }
      a:hover {
        color: #3f51b5;
      }
    }
  }
}
</style>
