import Forecast from '~/services/openweather/Forecast';
export const state = () => ({
  forecast: null,
  errors: null
});

export const mutations = {
  setForecast(state, value) {
    state.forecast = value;
  },
  reset(state) {
    state.forecast = null;
  },
  setError(state, payload) {
    state.errors = payload;
  },
};

export const actions = {
  async forecast({ commit }, location) {
    if (location == null) {
      commit('reset');
    }
    try {
      const data = await Forecast.location(location).first();
      console.log(data);
      commit('setForecast', data);
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
  forecast(state) {
    return state.forecast;
  }
};