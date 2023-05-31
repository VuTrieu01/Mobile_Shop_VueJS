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
export default class LoadingItem extends Vue {}
</script>
<style lang="scss" scoped>
.loading {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  &__item {
    color: #777;
  }
}
</style>
