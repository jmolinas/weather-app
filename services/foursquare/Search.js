import Venues from './Venues'

export default class Search extends Venues {
  resource() {
    return 'search'
  }

  static location(location) {
    let self = this.instance();
    self.params({ near: location, categoryId: '4deefb944765f83613cdba6e' });
    return self;
  }
}
