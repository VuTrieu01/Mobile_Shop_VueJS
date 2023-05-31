<template>
  <div class="main">
    <div class="main__sidebar"><SidebarPage /></div>
    <div class="main__product"><product-list /></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import SidebarPage from "@/components/sidebar/SidebarPage.vue";
import ProductList from "@/components/product/ProductList.vue";

@Component({
  components: {
    SidebarPage,
    ProductList,
  },
})
export default class ProductPage extends Vue {
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  margin-block: 15px;
  &__sidebar {
    width: 15%;
  }
  &__product {
    width: 100%;
  }
}
</style>
