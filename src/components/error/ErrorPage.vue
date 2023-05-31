<template>
  <div class="error-page-details mt-2">
    <img src="@/assets/404NotFound.jpg" class="rounded d-block mx-auto h400" />
    <div class="d-flex justify-content-center mt-2">
      <button type="button" class="btn btn-primary" @click="goBack()">
        Go back
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPageDetail",
  components: {},
  methods: {
    goBack() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.h400 {
  height: 400px;
}
</style>
