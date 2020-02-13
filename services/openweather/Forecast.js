import Base from './Base'

export default class Forecast extends Base {
  resource() {
    return 'weather'
  }

  static location(location) {
    let self = this.instance();
    self.params({ q: location, units: "metric" });
    return self;
  }
}
