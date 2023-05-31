<template>
  <div>
    <div class="sidebar">
      <div
        class="sidebar__item"
        :class="{ active: $store.state.filter == all }"
        @click="productFilter(all)"
      >
        <div class="sidebar__item--icon">
          <i class="bi bi-list"></i>
        </div>
        <div>All</div>
      </div>
      <div
        class="sidebar__item"
        :class="{ active: $store.state.filter == item.type }"
        v-for="(item, index) in productTypes"
        :key="index"
        @click="productFilter(item.type)"
      >
        <div class="sidebar__item--icon" v-html="item.icon"></div>
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import productTypes from "@/assets/json/productTypes.json";

@Component
export default class SidebarPage extends Vue {
  public productTypes: any = productTypes;
  public all: string = "all";
  public productFilter(type: string) {
    return (this.$store.state.filter = type);
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  &__item {
    display: flex;
    align-items: center;
    margin-block: 5px;
    padding-block: 2px;
    color: #4f4f60;
    font-weight: 700;
    cursor: pointer;
    &--icon {
      display: flex;
      margin-right: 10px;
      font-size: 20px;
    }
    &:hover {
      color: #3f51b5;
    }
  }
  .active {
    border-left: 3px solid #3f51b5;
    padding-left: 10px;
    color: #3f51b5;
    transition: 0.5s;
  }
}
</style>
