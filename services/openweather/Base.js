import Model from '~/api/src/Model';

export default class Base extends Model {
  baseURL() {
    return process.env.OPEN_WEATHER_API;
  }

  // implement a default request method
  request(config) {
    return this.$http.request(config);
  }

  first() {
    this.params({ appid: process.env.OPEN_WEATHER_API_KEY });
    return super.first();
  }

  get() {
    this.params({ appid: process.env.OPEN_WEATHER_API_KEY });
    return super.get();
  }
}
