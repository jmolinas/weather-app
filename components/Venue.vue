<template>
  <div v-if="venues">
    <div class="container">
      <div class="breadcrumb">
        <a href="#">Venues</a>
        <span>Historic Sites</span>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="content col-md-12">
          <div class="post" v-for="(location, index) in venues.response.venues" :key="index">
            <h2 class="entry-title">{{ location.name }}</h2>
            <p>{{ getAddress(location.location.formattedAddress )}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    getAddress(address) {
      return address.join(" ");
    }
  },
  computed: {
    ...mapGetters({
      venues: "foursquare/venue"
    })
  }
};
</script>
