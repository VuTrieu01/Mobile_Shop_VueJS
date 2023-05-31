<template>
  <div class="justify-content-evenly row">
    <div class="col-4 each-car" v-for="(eachCar, i) in getCarInfo" :key="i">
      <img
        :src="getImageUrl(eachCar.name, eachCar.mainImage)"
        class="rounded d-block mx-auto"
      />
      <h3 class="text-center">{{ eachCar.model }}</h3>
      <div>
        <div class="float-start">
          <button type="button" class="btn btn-light">
            {{ eachCar.price }}
          </button>
        </div>
        <div class="float-end">
          <router-link
            :to="{
              name: 'CarInfo',
              params: {
                carName: eachCar.name,
                carFileId: eachCar.fileNumber,
              },
            }"
          >
            <button type="button" class="btn btn-primary">More Details</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCarsJson from "@/assets/json/cars.json";
export default {
  name: "EachCar",
  data() {
    return {
      myCarDetails: getCarsJson,
      carTypes: this.$route.params.carTypes,
    };
  },
  methods: {
    getImageUrl(folderName, imageName) {
      let image = require.context("@/assets/");
      return image("./" + folderName + "/" + imageName);
    },
  },
  computed: {
    getCarInfo() {
      let carData = [];
      for (let i = 0; i < this.myCarDetails.length; i++) {
        if (this.myCarDetails[i].name == this.carTypes) {
          carData.push(this.myCarDetails[i]);
        }
      }
      return carData;
    },
  },
};
</script>

<style lang="scss" scoped>
.each-car {
  padding: 10px;
  margin-bottom: 10px;
  border: 10px solid #eee;
  img {
    width: 300px;
    height: 200px;
    margin-bottom: 10px;
  }
}
</style>
