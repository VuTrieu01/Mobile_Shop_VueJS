<template>
  <div class="product__container">
    <loading-item v-if="loading" />
    <div
      class="product__container--items"
      v-for="(item, index) in getProducts"
      :key="index"
    >
      <div class="product__item">
        <router-link
          class="product__item--hover"
          :to="{
            name: 'ProductDetail',
            params: {
              productName: item.name,
              productId: item.id,
            },
          }"
        >
          <img class="product__img" :src="item.image" alt="" />
          <h3>{{ item.name }}</h3>
        </router-link>
        <h2>
          {{ formatMoney(item.price) }}
        </h2>
        <div class="form-button">
          <button class="btn-buy">
            <i>Mua ngay</i>
          </button>
          <button class="btn-add">
            <i>Thêm vào giỏ hàng</i>
          </button>
        </div>
      </div>
    </div>
    <Paginate
      :page-count="pageCount"
      :click-handler="changePage"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    />
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import LoadingItem from "../loading/LoadingItem.vue";
import { formatMoney } from "../../helpers/rules";
import { Product } from "@/models";

@Component({
  components: {
    LoadingItem,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
})
export default class ProductItem extends Vue {
  public loading: boolean = true;
  public products!: Product[];
  public itemsPerPage: number = 3;
  public currentPage: number = 1;
  public formatMoney(money: number) {
    return formatMoney(money);
  }
  public get pageCount() {
    return Math.ceil(this.getProducts.length) / this.itemsPerPage;
  }
  public get getProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.$store.dispatch("getDbProduct");
    if (this.products.length > 0) this.loading = false;
    return this.products.slice(startIndex, endIndex);
  }
  changePage(pageNumber: number): void {
    console.log("a" + pageNumber);

    this.currentPage = pageNumber;
  }
}
</script>

<style lang="scss" scoped>
.product__container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1.5rem;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  border-radius: 7px;
  overflow: hidden;
  padding: 10px;
  &--items {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: auto;
    max-width: 350px;
    margin: auto;
    border-radius: 8px;
    background-color: inherit;
    .product__item {
      border-radius: 10px;
      padding: 20px;
      &:hover {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        transition: 0.7s;
      }
      &--hover {
        text-decoration: none;
        .product__img {
          display: flex;
          align-items: center;
          justify-content: center;
          width: auto;
          height: auto;
          max-width: 180px;
          margin: auto;
          padding: 0;
          cursor: pointer;
        }
        h3 {
          font-size: 20px;
          font-weight: bold;
          margin: 15px 0;
          display: flex;
          justify-content: center;
        }
        &:hover {
          color: black;
          cursor: pointer;
        }
      }
      &:hover .product__img {
        transform: scale(108%);
        transition: 0.9s;
      }
      h2 {
        display: flex;
        justify-content: center;
        color: rgb(212, 5, 5);
        font-size: 20px;
        font-style: italic;
        font-weight: 900;
      }
      .form-button {
        display: flex;
        .btn-buy {
          margin-right: 15px;
          width: 50%;
          opacity: 1;
          visibility: hidden;
          padding: 7px 15px;
          border: none;
          border-radius: 5px;
          background-color: rgb(255, 10, 10);
        }
        .btn-add {
          width: 50%;
          opacity: 1;
          visibility: hidden;
          padding: 7px 15px;
          border: none;
          border-radius: 5px;
          background-color: rgb(208, 208, 208);
        }
        i {
          color: white;
          font-size: 16px;
          font-weight: bold;
        }
        .btn-buy:hover {
          background-color: rgb(178, 31, 31);
          cursor: pointer;
          transition: 0.5s;
        }
        .btn-add:hover {
          background-color: rgb(151, 151, 151);
          cursor: pointer;
          transition: 0.5s;
        }
      }
      &:hover .btn-buy {
        opacity: 1;
        visibility: visible;
        cursor: pointer;
        transition: 0.9s;
      }
      &:hover .btn-add {
        opacity: 1;
        visibility: visible;
        cursor: pointer;
        transition: 0.9s;
      }
    }
    &:hover {
      border-color: rgb(223, 223, 223);
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
  }
}
</style>
