<template>
  <div class="detail">
    <loading-item v-if="loading" />
    <div
      class="detail__content"
      v-for="(item, index) in getNewsDetail"
      :key="index"
    >
      <h1>{{ item.title }}</h1>
      <p>{{ item.descdetail }}</p>
    </div>
    <div class="detail__link">
      <div
        class="detail__link--item"
        v-for="(item, index) in getNews"
        :key="index"
      >
        <div class="link" @click="handleNewsDetail(item.title, item.id)">
          <img :src="item.img" alt="" />
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import LoadingItem from "../loading/LoadingItem.vue";
import { formatMoney } from "../../helpers/rules";
import { New } from "@/models";

@Component({
  components: {
    LoadingItem,
  },
})
export default class NewDetail extends Vue {
  public newTitle: string = this.$route.params.newTitle;
  public newId: string = this.$route.params.newId;
  public loading: boolean = true;
  public formatMoney(money: number) {
    return formatMoney(money);
  }
  public handleNewsDetail(title: string, id: string) {
    if (this.newId != id)
      this.$router.push({
        name: "NewDetail",
        params: {
          newTitle: title,
          newId: id,
        },
      });
    this.newId = id;
  }
  public get getNewsDetail() {
    this.$store.dispatch("getDbNew");
    if (this.$store.state.news.length > 0) this.loading = false;
    return this.$store.state.news.filter((val: New) => val.id === this.newId);
  }
  public get getNews() {
    this.$store.dispatch("getDbNew");
    if (this.$store.state.news.length > 0) this.loading = false;
    return this.$store.state.news;
  }
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<style lang="scss" scoped>
.detail {
  margin-block: 15px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(1, 20rem);
  gap: 1rem;
  &__content {
    text-align: start;
    h1 {
      margin: 0;
      margin-bottom: 8px;
      font-size: 24px;
      font-weight: bold;
    }
    p {
      margin: 0 auto;
      font-size: 17px;
      line-height: 1.8rem;
    }
  }
  &__link {
    display: flex;
    flex-direction: column;
    &--item {
      padding-bottom: 8px;
      margin-bottom: 8px;
      border-bottom: 1px solid rgb(181, 181, 181);
      .link {
        display: flex;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        img {
          max-width: 150px;
          padding-right: 2px;
        }
        p {
          text-transform: uppercase;
          font-size: 14px;
          font-weight: bold;
          line-height: 1.3rem;
          color: blue;
        }
      }
      &:hover img {
        transform: scale(105%);
        transition: 0.9s;
      }
      &:hover p {
        color: black;
      }
    }
  }
}
</style>
