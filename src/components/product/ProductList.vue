<template>
  <div class="home">
    <ProductItem
      :products="$store.getters.productFilter"
      :activePagination="true"
    />
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
export default class ProductList extends Vue {
  public productType: string = this.$route.params.productType;
  mounted() {
    this.$store.state.currentPage = 1;
    if (this.productType) {
      this.$store.state.filterProduct = this.productType;
    } else {
      this.$store.state.filterProduct = "all";
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  background-color: rgb(255, 255, 255);
}
</style>
