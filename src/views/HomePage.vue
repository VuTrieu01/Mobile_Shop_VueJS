<template>
  <div class="home">
    <div class="home__info">
      <div class="home__info--item">
        <div class="home--icon">
          <i class="bi bi-rocket-takeoff"></i>
        </div>
        <div class="home--prop">
          <h6>Free shipping</h6>
          <p>
            Applicable for orders over 500,000 VND in Hanoi and Ho Chi Minh City
          </p>
        </div>
      </div>
      <div class="home__info--item">
        <div class="home--icon">
          <i class="bi bi-gift"></i>
        </div>
        <div class="home--prop">
          <h6>Customer appreciation</h6>
          <p>Huge discount, additional 10% discount for loyal customers</p>
        </div>
      </div>
      <div class="home__info--item">
        <div class="home--icon">
          <i class="bi bi-arrow-left-right"></i>
        </div>
        <div class="home--prop">
          <h6>Return in 30 days</h6>
          <p>Fast return and refund service with all products</p>
        </div>
      </div>
    </div>
    <div class="h4 fw-bold mt-2">HOT PRODUCTS</div>
    <ProductItem :products="$store.getters.slideProducts" />
    <div class="h4 fw-bold mt-2">NEWS OF THE DAY</div>
    <new-item />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ProductItem from "@/components/product/ProductItem.vue";
import NewItem from "@/components/new/NewItem.vue";
@Component({
  components: {
    ProductItem,
    NewItem,
  },
})
export default class HomePage extends Vue {
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<style lang="scss" scoped>
.home {
  background-color: rgb(255, 255, 255);
  margin-block: 15px;
  &__info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
    &--item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 320px;
      height: 100px;
      border: 1px solid rgb(219, 219, 219);
      background-color: inherit;
      padding: 13px;
      border-radius: 18px;
      margin-right: 20px;
      margin-bottom: 10px;
      cursor: pointer;
    }

    &--item:hover {
      border-color: #2693ff;
      transition: 0.7s;
    }
  }
  &--icon {
    margin-right: 4px;
    color: rgb(76, 75, 75);
    font-size: 40px;
  }

  &--prop {
    h6 {
      font-size: 15px;
      font-weight: bold;
      text-transform: uppercase;
      margin: 0;
    }
    p {
      font-size: 13px;
      line-height: 1.3rem;
      margin: 0;
    }
  }
}
</style>
