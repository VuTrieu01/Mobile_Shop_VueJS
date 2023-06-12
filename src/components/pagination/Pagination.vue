<template>
  <ul class="pagination">
    <li class="pagination--item">
      <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">
        <i class="bi bi-chevron-double-left"></i>
      </button>
    </li>
    <li class="pagination--item">
      <button
        type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
      >
        <i class="bi bi-chevron-left"></i>
      </button>
    </li>
    <!-- Visible Buttons Start -->
    <li class="pagination--item" v-for="page in pages" :key="page.name">
      <button
        type="button"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
      >
        {{ page.name }}
      </button>
    </li>
    <!-- Visible Buttons End -->
    <li class="pagination--item">
      <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
        <i class="bi bi-chevron-right"></i>
      </button>
    </li>
    <li class="pagination--item">
      <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
        <i class="bi bi-chevron-double-right"></i>
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
})
export default class PaginationPage extends Vue {
  private maxVisibleButtons!: number;
  private totalPages!: number;
  private currentPage!: number;
  public get startPage() {
    // When on the first page
    if (this.currentPage === 1) {
      return 1;
    }
    // When on the last page
    if (this.currentPage === this.totalPages) {
      return this.totalPages;
    }
    // When inbetween
    return this.currentPage - 1;
  }
  public get pages() {
    const range = [];
    for (
      let i = this.startPage;
      i <=
      Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
      i++
    ) {
      range.push({
        name: i,
        isDisabled: i === this.currentPage,
      });
    }
    return range;
  }
  public get isInFirstPage() {
    return this.currentPage === 1;
  }
  public get isInLastPage() {
    return this.currentPage === this.totalPages;
  }
  public onClickFirstPage() {
    this.$emit("pagechanged", 1);
    window.scrollTo(0, 0);
  }
  public onClickPreviousPage() {
    this.$emit("pagechanged", this.currentPage - 1);
    window.scrollTo(0, 0);
  }
  public onClickPage(page: number) {
    this.$emit("pagechanged", page);
    window.scrollTo(0, 0);
  }
  public onClickNextPage() {
    this.$emit("pagechanged", this.currentPage + 1);
    window.scrollTo(0, 0);
  }
  public onClickLastPage() {
    this.$emit("pagechanged", this.totalPages);
    window.scrollTo(0, 0);
  }
  public isPageActive(page: number) {
    return this.currentPage === page;
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  width: 100%;
  list-style-type: none;
  justify-content: center;
  margin: 0;
  &--item {
    display: inline-block;
    button {
      border: 1px solid #e0e6ec;
      padding-block: 8px;
      padding-inline: 12px;
      background-color: #fff;
      &:hover {
        background-color: #e0e6ec;
      }
    }
    i {
      font-size: 10px;
    }
    .active {
      background-color: #3f51b5;
      color: #fff;
    }
  }
}
</style>
