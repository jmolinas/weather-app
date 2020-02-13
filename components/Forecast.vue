<template>
  <div v-if="forecast" class="forecast-table">
    <div class="container">
      <div class="forecast-container">
        <div class="today forecast">
          <div class="forecast-header">
            <div class="day">{{ day }}</div>
            <div class="date">{{ date }}</div>
          </div>
          <!-- .forecast-header -->
          <div class="forecast-content">
            <div class="location">{{ forecast.name }}</div>
            <div class="degree">
              <div class="num">
                {{ forecast.main.temp }}
                <sup>o</sup>C
              </div>
              <div class="forecast-icon">
                <img :src="getWeatherIcon(this.forecast.weather[0].icon)" alt width="90" />
              </div>
            </div>
            <span>
              <img src="~/assets/images/icons/019-cloudy.svg" alt width="21" />{{ forecast.clouds.all }}%
            </span>
            <span>
              <img src="~/assets/images/icon-wind.png" alt />
              {{ forecast.wind.speed }}km/h
            </span>
            <span>
              <img src="~/assets/images/icon-compass.png" alt />
              {{ forecast.wind.deg }}
              <sup>o</sup>
            </span>
          </div>
        </div>
        <div class="forecast">
          <div class="forecast-header">
            <div class="day">{{ this.forecast.weather[0].main }}</div>
          </div>
          <!-- .forecast-header -->
          <div class="forecast-content">
            <div class="forecast-icon">
              <img :src="getWeatherIcon(this.forecast.weather[0].icon)" alt width="48" />
            </div>
            <div class="degree">
              Feels like {{ this.forecast.main.feels_like }}
              <sup>o</sup>C
            </div>
            <small>
               <img src="~/assets/images/icons/012-dawn.svg" alt width="30"/> {{ getTime(forecast.sys.sunrise) }}
            </small>
            <small>
               <img src="~/assets/images/icons/013-sunset.svg" alt width="30"/> {{ getTime(forecast.sys.sunset) }}
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      daysOfWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ]
    };
  },
  methods: {
    getWeatherIcon(icon) {
      return require("~/assets/images/icons/" + icon + ".svg");
    },
    getTime(unix) {
      return moment(unix).format('HH:mm');
    }
  },
  computed: {
    ...mapGetters({
      forecast: "openweather/forecast"
    }),
    day: function() {
      return this.daysOfWeek[moment().day()];
    },
    date: function() {
      return moment().format("Do MMM");
    }
  }
};
</script>
