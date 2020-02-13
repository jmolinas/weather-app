import Model from '~/api/src/Model';
import moment from "moment";

export default class Base extends Model {
  baseURL() {
    return process.env.FOURSQUARE_API;
  }

  // implement a default request method
  request(config) {
    return this.$http.request(config);
  }

  first() {
    const version = moment().format('YYYYMMDD');
    this.params(
      {
        v: version,
        client_id: process.env.FOURSQUARE_CLIENT_ID,
        client_secret: process.env.FOURSQUARE_CLIENT_SECRET
      }
    );
    return super.first();
  }

  get() {
    const version = moment().format('YYYYMMDD');
    this.params(
      {
        v: version,
        client_id: process.env.FOURSQUARE_CLIENT_ID,
        client_secret: process.env.FOURSQUARE_CLIENT_SECRET
      }
    );
    return super.get();
  }
}
