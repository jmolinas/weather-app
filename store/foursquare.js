import SearchVenue from '~/services/foursquare/Search';
export const state = () => ({
  venue: null,
  errors: null
});

export const mutations = {
  setSearchData(state, value) {
    state.venue = value;
  },
  reset(state) {
    state.venue = null;
  },
  setError(state, payload) {
    state.errors = payload;
  },
};

export const actions = {
  async search({ commit }, location) {
    try {
      const data = await SearchVenue.location(location).first();
      console.log(data);
      commit('setSearchData', data);
    } catch (error) {
      console.log(error);
      if (error.response !== undefined) {
        const { response } = error;
        commit('setError', response.data);
      }
    }
  }

};

export const getters = {
  errors(state) {
    return state.errors;
  },
  venue(state) {
    return state.venue;
  }
};