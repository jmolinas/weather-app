<template>
  <div class="hero">
    <div class="container">
      <form action="#" class="find-location">
        <select v-model="location" @change="filter">
          <option :value="null">Find your location...</option>
          <option v-for="list in lists" :key="list.value" :value="list.value">{{ list.text }}</option>
        </select>
        <input type="submit" value="Find" />
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      location: null,
      lists: [
        { value: "Tokyo,JP", text: "Tokyo" },
        { value: "Yokohama,JP", text: "Yokohama" },
        { value: "Kyoto,JP", text: "Kyoto" },
        { value: "Nagoya,JP", text: "Nagoya" },
        { value: "Sapporo,JP", text: "Sapporo" },
        { value: "Osaka,JP", text: "Osaka" }
      ]
    };
  },
  methods: {
    ...mapActions({
      forecast: "openweather/forecast",
      search: "foursquare/search"
    }),
    async filter() {
      console.log(this.location);
      if (this.location) {
        await this.forecast(this.location);
        await this.search(this.location);
      }
    }
  }
};
</script>

<style>
.hero {
  background-image: url(../assets/images/banner.jpg);
}
</style>