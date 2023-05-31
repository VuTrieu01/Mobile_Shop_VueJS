<template>
  <div class="home">
    <ProductItem :products="$store.getters.productFilter" />
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
export default class ProductList extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  background-color: rgb(255, 255, 255);
}
</style>
