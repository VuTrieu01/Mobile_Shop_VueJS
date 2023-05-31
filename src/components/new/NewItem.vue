<template>
  <div class="new__container">
    <loading-item v-if="loading" />
    <div
      class="new__container--items"
      v-for="(item, index) in getNews"
      :key="index"
    >
      <div class="new__item">
        <router-link
          class="new__item--hover"
          :to="{
            name: 'NewDetail',
            params: {
              newTitle: item.title,
              newId: item.id,
            },
          }"
        >
          <img class="new__img" :src="item.img" alt="" />
          <h3>{{ item.title }}</h3>
        </router-link>
        <div class="new__desc">
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import LoadingItem from "../loading/LoadingItem.vue";

@Component({
  components: {
    LoadingItem,
  },
})
export default class NewItem extends Vue {
  public loading: boolean = true;
  public get getNews() {
    this.$store.dispatch("getDbNew");
    if (this.$store.state.news.length > 0) this.loading = false;
    return this.$store.state.news;
  }
}
</script>

<style lang="scss" scoped>
.new__container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 1.5rem;
  padding: 10px;
  &--items {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: auto;
    max-width: 400px;
    margin: auto;
    border-radius: 8px;
    background-color: inherit;
    .new__item {
      border-radius: 10px;
      padding: 20px;
      &:hover {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        transition: 0.7s;
      }
      &--hover {
        text-decoration: none;
        .new__img {
          display: flex;
          align-items: center;
          justify-content: center;
          width: auto;
          height: auto;
          max-width: 350px;
          margin: auto;
          padding: 0;
          cursor: pointer;
        }
        h3 {
          font-size: 16px;
          font-weight: bold;
          text-transform: uppercase;
          margin: 15px 0;
          display: flex;
          justify-content: center;
        }
        &:hover {
          color: black;
          cursor: pointer;
        }
      }
      .new__desc {
        font-size: 15px;
        line-height: 1rem;
      }
      &:hover .new__img {
        transform: scale(105%);
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
