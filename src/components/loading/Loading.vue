<template>
  <div class="loading d-flex justify-content-center">
    <div class="loading__item spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Loading extends Vue {}
</script>
<style lang="scss" scoped>
.loading {
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  background: #666;
  opacity: 0.6;
  &__item {
    z-index: 2;
    position: fixed;
    top: 50%;
    color: #fff;
    left: 50%;
  }
}
</style>
