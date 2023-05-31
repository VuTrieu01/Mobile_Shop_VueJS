<template>
  <div class="footer" v-if="!checkRoute">
    <div class="footer__icon">
      <div class="footer__icon--image">
        <img src="../../assets/images/apple.png" alt="" />
      </div>
      <div class="footer__icon--image">
        <img src="../../assets/images/oppo.png" alt="" />
      </div>
      <div class="footer__icon--image">
        <img src="../../assets/images/samsung.png" alt="" />
      </div>
      <div class="footer__icon--image">
        <img src="../../assets/images/sony.png" alt="" />
      </div>
      <div class="footer__icon--image">
        <img src="../../assets/images/microsoft.png" alt="" />
      </div>
    </div>
    <div class="footer__info">
      <div class="footer__info--contact">
        <div class="footer__info--contact--link">
          <img src="../../assets/logo.png" alt="" />
          <ul>
            <li>445 LÊ VĂN VIỆT - PHƯỜNG TĂNG NHƠN PHÚ A - TP THỦ ĐỨC</li>
            <li>0855.629.108</li>
            <li>trieu.nguyen@nexlab.tech</li>
          </ul>
        </div>
        <div class="footer__info--contact--connect">
          <h3>Connect with us</h3>
          <div class="footer__info--contact--connect--icon">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-envelope"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class FooterBar extends Vue {
  public navigation: boolean = false;
  public get checkRoute() {
    if (this.$route.name === "Login" || this.$route.name === "Register") {
      return (this.navigation = true);
    }
    return (this.navigation = false);
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #fff;
  margin: auto;
  max-height: 200px;
  min-height: 200px;
  border-top: 1px solid #e0e6ec;
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    max-width: 100%;
    flex-wrap: wrap;
    height: fit-content;
    padding-block: 20px;
    &--image {
      display: block;
      height: auto;
      width: auto;
      margin: 0 20px;
      background-color: inherit;
    }
  }
  &__info {
    width: 100%;
    margin: auto;
    &--contact {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      &--link {
        box-sizing: border-box;
        img {
          height: 50px;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          li {
            text-decoration: none;
            margin-block: 10px;
            font-size: 16px;
          }
        }
      }
      &--connect {
        box-sizing: border-box;
        h3 {
          padding: 0;
          font-size: 24px;
          font-weight: bold;
          color: black;
        }
        &--icon {
          display: flex;
          justify-content: space-around;
          i {
            font-size: 25px;
            cursor: pointer;
            &:hover {
              color: rgb(79, 79, 79);
            }
          }
        }
      }
    }
  }
}
</style>
