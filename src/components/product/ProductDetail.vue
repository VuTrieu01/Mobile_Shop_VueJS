<template>
  <div>
    <loading-item v-if="loading" />
    <div class="route">
      <span class="route__link"> Home </span>
      <span> / </span>

      <span class="route__link"> Tất cả sản phẩm </span>
      <span> / </span>
      <span class="route__link"> {linkProduct} </span>
    </div>
    <form>
      <div class="container" v-for="(item, index) in getProducts" :key="index">
        <div class="container__img">
          <img :src="item.image" alt="" />
        </div>
        <div class="container__detail">
          <div class="container__detail--item">
            <h2>{{ item.name }}</h2>
            <h3>Giá bán: {{ formatMoney(item.price) }}</h3>
            <p>{{ item.desc2 }}</p>
            <p>{{ item.desc1 }}</p>
            <p>{{ item.desc4 }}</p>
            <p>{{ item.desc6 }}</p>
            <p>{{ item.desc7 }}</p>
            <p>{{ item.desc8 }}</p>
            <p>{{ item.desc9 }}</p>
            <p>{{ item.desc10 }}</p>
            <p>{{ item.desc5 }}</p>
            <button type="button" class="btn-add">Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import LoadingItem from "../loading/LoadingItem.vue";
import { formatMoney } from "../../helpers/rules";
import { Product } from "@/models";

@Component({
  components: {
    LoadingItem,
  },
})
export default class ProductDetail extends Vue {
  public productName: string = this.$route.params.productName;
  public productId: string = this.$route.params.productId;
  public loading: boolean = true;
  public formatMoney(money: number) {
    return formatMoney(money);
  }
  public get getProducts() {
    this.$store.dispatch("getDbProduct");
    if (this.$store.getters.slideProducts.length > 0) this.loading = false;
    return this.$store.state.products.filter(
      (val: Product) => val.id === this.productId
    );
  }
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<style lang="scss" scoped>
.route {
  margin-block: 15px;
  text-align: start;
  &__link {
    font-size: 16px;
    font-weight: bold;
    color: #000000;
  }
  &__link:hover {
    cursor: pointer;
    color: #2693ff;
    text-decoration: underline;
  }
  span {
    font-size: 16px;
    font-weight: bold;
    color: #000000;
  }
}
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 1rem;
  overflow: hidden;
  margin-bottom: 8px;
  padding: 0;
  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
      height: 60%;
    }
    @media (max-width: 768px) {
      img {
        height: auto;
        width: 50%;
      }
    }
  }
  &__detail {
    display: flex;
    justify-content: center;
    align-items: center;
    &--item {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      h2 {
        font-size: 30px;
        color: rgb(83, 82, 82);
        font-weight: bold;
        line-height: 1.8rem;
        margin: 0;
      }
      h3 {
        font-size: 25px;
        font-weight: bold;
        color: red;
        padding: 25px 10px;
        border: 1px solid black 0.4;
        background-color: #f8f9fa;
        border-radius: 8px;
        margin-block: 16px;
      }
      p {
        font-size: 16px;
        line-height: 1rem;
        color: rgb(73, 73, 73);
      }
      @media screen and (max-width: 480px) {
        p {
          line-height: 0.8rem;
        }
      }
      .btn-add {
        outline: none;
        padding: 14px 9px;
        border: none;
        border-radius: 7px;
        background-color: #f8f9fa;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        background-color: rgb(255, 10, 10);
        margin-top: 30px;
      }
      .btn-add:hover {
        background-color: rgb(178, 31, 31);
        cursor: pointer;
        transition: 0.5s;
      }
    }
  }
}
</style>
