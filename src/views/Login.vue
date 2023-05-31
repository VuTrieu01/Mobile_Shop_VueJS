<template>
  <div class="panel row">
    <Loading v-if="loading" />
    <div class="col-md-6 col-md-offset-3">
      <img @click="goHome" src="../assets/logo.png" class="image" />
      <div class="panel__login">
        <div class="panel__heading">
          <div class="row">
            <div class="col">
              <a class="active">Login</a>
            </div>
            <div class="col" @click="handleRegister">
              <a>Register</a>
            </div>
          </div>
        </div>
        <div class="panel__body">
          <div class="row">
            <div class="col-lg-12">
              <form>
                <div class="form-group">
                  <div v-if="errorEmail" class="form-error text-danger">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-exclamation-triangle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                      />
                    </svg>
                    &nbsp;{{ errorEmail }}
                  </div>
                  <div class="form-error" v-else></div>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Username"
                    v-model="email"
                  />
                </div>
                <div class="form-group">
                  <div v-if="errorPassword" class="form-error text-danger">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-exclamation-triangle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                      />
                    </svg>
                    &nbsp;{{ errorPassword }}
                  </div>
                  <div class="form-error" v-else></div>
                  <div class="form-input">
                    <input
                      :type="!isVisible ? 'password' : 'text'"
                      class="form-control"
                      placeholder="Password"
                      v-model="password"
                    />
                    <svg
                      v-if="!isVisible"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye"
                      viewBox="0 0 16 16"
                      @click="handleToggle"
                    >
                      <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                      />
                      <path
                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                      />
                    </svg>
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye-slash"
                      viewBox="0 0 16 16"
                      @click="handleToggle"
                    >
                      <path
                        d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
                      />
                      <path
                        d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
                      />
                      <path
                        d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="form-group">
                  <div v-if="error" class="form-error text-danger">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-exclamation-triangle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                      />
                    </svg>
                    &nbsp;{{ error }}
                  </div>
                  <div class="form-error" v-else></div>
                  <input
                    type="submit"
                    class="form-control btn btn-login"
                    value="Log In"
                    @click.prevent="signIn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import firebase from "firebase/app";
import "firebase/auth";
import Loading from "../components/loading/Loading.vue";
import { ruleEmail } from "@/helpers";

@Component({
  components: {
    Loading,
  },
})
export default class LoginPage extends Vue {
  public email: string = "";
  public password: string = "";
  public error: string = "";
  public errorEmail: string = "";
  public errorPassword: string = "";
  public isVisible: boolean = false;
  public loading: boolean = false;
  public handleToggle() {
    this.isVisible = !this.isVisible;
  }
  public signIn() {
    if (!ruleEmail(this.email)) {
      this.errorEmail = "Invalid email!!!";
    } else {
      this.errorEmail = "";
    }
    if (this.password.length < 6) {
      this.errorPassword = "Password of at least 6 characters!!!";
    } else {
      this.errorPassword = "";
    }
    if (ruleEmail(this.email) && this.password.length >= 6) {
      this.loading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.loading = false;
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          this.loading = false;
          this.error = "Incorrect email or password!!!";
          console.log(err.message);
        });
    }
  }
  public handleRegister() {
    this.$router.push({ name: "Register" });
  }
  public goHome() {
    this.$router.push({ name: "Home" });
  }
}
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  position: absolute;
  width: 90%;
  height: 100%;
  justify-content: center;
  align-items: center;
  .image {
    cursor: pointer;
    margin: 5px;
    height: 100px;
  }
  &__login {
    border-color: #ccc;
    padding-inline: 30px;
    padding-block: 15px;
    -webkit-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
  }
  &__login > &__heading {
    color: #00415d;
    background-color: #fff;
    border-color: #fff;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
    text-align: center;
    padding-bottom: 15px;
  }
  &__login > &__heading a {
    cursor: pointer;
    text-decoration: none;
    color: #666;
    font-weight: bold;
    font-size: 15px;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    transition: all 0.1s linear;
  }
  &__login > &__heading a.active {
    color: #59b2e0;
    font-size: 18px;
  }
  &__login > &__heading hr {
    margin-top: 10px;
    margin-bottom: 0px;
    clear: both;
    border: 0;
    height: 1px;
    background-image: -webkit-linear-gradient(
      left,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0)
    );
    background-image: -moz-linear-gradient(
      left,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0)
    );
    background-image: -ms-linear-gradient(
      left,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0)
    );
    background-image: -o-linear-gradient(
      left,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0)
    );
  }
  &__login input[type="text"],
  &__login input[type="email"],
  &__login input[type="password"] {
    height: 45px;
    border: 1px solid #ddd;
    font-size: 16px;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    transition: all 0.1s linear;
  }
  &__login input:hover,
  &__login input:focus {
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border-color: #ccc;
  }
  &__body {
    .form-group {
      display: flex;
      flex-direction: column;
      align-items: start;
      .form-error {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-block: 15px;
      }
      .form-input {
        display: flex;
        align-items: center;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        .form-control {
          border: none;
        }
        .bi-eye,
        .bi-eye-slash {
          cursor: pointer;
          margin-right: 10px;
        }
      }
    }
  }
}
.btn-login {
  background-color: #59b2e0;
  outline: none;
  color: #fff;
  font-size: 14px;
  height: auto;
  font-weight: normal;
  padding: 14px 0;
  text-transform: uppercase;
  border-color: #59b2e6;
}
.btn-login:hover,
.btn-login:focus {
  color: #fff;
  background-color: #53a3cd;
  border-color: #53a3cd;
}
</style>
