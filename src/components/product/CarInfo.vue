<template>
  <div class="justify-content-evenly row">
    <div class="col-8">
      <div>
        <img
          v-if="
            mainImageIs.length == 0
              ? (mainImageIs = getImageUrl(
                  getCarInfo.name,
                  getCarInfo.mainImage
                ))
              : mainImageIs
          "
          :src="mainImageIs"
          class="rounded mx-auto d-block mainImage"
        />
      </div>
      <div class="justify-content-center row">
        <img
          v-for="(eachCarImage, i) in getCarInfo.images"
          :key="i"
          :src="getImageUrl(getCarInfo.name, eachCarImage)"
          @click="mainImageIs = getImageUrl(getCarInfo.name, eachCarImage)"
          class="rounded mx-auto d-block thumbnailImage"
        />
      </div>
    </div>
    <div class="col-4">
      <h2>{{ getCarInfo.name }} | {{ getCarInfo.model }}</h2>
      <p>Year: {{ getCarInfo.year }}</p>
      <p>File Number: {{ getCarInfo.fileNumber }}</p>
      <p>Description: {{ getCarInfo.Description }}</p>
      <p>Uploaded on: {{ getCarInfo.uploadedOn }}</p>
    </div>
  </div>
</template>

<script>
import getCarInfo from "@/assets/json/cars.json";
export default {
  name: "CarInfo",
  data() {
    return {
      myCarDetails: getCarInfo,
      carName: this.$route.params.carName,
      carFileId: this.$route.params.carFileId,
      mainImageIs: "",
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
      let carData = "";
      for (let i = 0; i < this.myCarDetails.length; i++) {
        if (this.myCarDetails[i].fileNumber == this.carFileId) {
          carData = this.myCarDetails[i];
          break;
        }
      }
      return carData;
    },
  },
};
</script>

<style lang="scss" scoped>
.mainImage {
  width: 650px;
  height: 450px;
  border: 10px solid #eee;
  margin-bottom: 10px;
}
.thumbnailImage {
  width: 150px;
  border: 10px solid #eee;
}
</style>
