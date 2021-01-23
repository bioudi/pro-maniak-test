import adFieldsService from "@/services/adFields.service";

export const newAd = {
  namespaced: true,
  state: {
    brands: [],
    models: [],
    powersCv: [],
    minYear: 1990,
    maxYear: new Date().getFullYear(),
    ad: {
      brandId: null,
      year: null,
      fuel: null,
      model: null,
      powerCv: null,
      gearbox: null,
    },
  },
  getters: {
    fuels: (state) => {
      let version_cars = [];
      Object.keys(state.models).forEach((key) =>
        version_cars.push(...state.models[key].version_cars)
      );
      return version_cars
        .map((version) => version.fuel)
        .filter((value, index, self) => self.indexOf(value) === index);
    },
    gearbox: (state) =>
      state.powersCv
        .map((item) => item.gearbox)
        .filter((value, index, self) => self.indexOf(value) === index),
  },
  actions: {
    GET_BRANDS({ commit, state }) {
      if (state.brands.length > 0) return;
      return adFieldsService
        .getBrands()
        .then((brands) => commit("SET_BRANDS", brands));
    },
    GET_FIELD({ state, commit }, type) {
      return adFieldsService.getField(state.ad).then((response) => {
        switch (type) {
          case "models":
            commit("SET_MODELS", response.models);
            break;
          case "version_car":
            commit("SET_POWER_CV", response.version_car);
            break;
          default:
            break;
        }
      });
    },
    CREATE_AD({ state }) {
      return adFieldsService.createAd(state.ad)
    }
  },
  mutations: {
    SET_BRANDS(state, brands) {
      state.brands = brands;
    },
    SET_MODELS(state, models) {
      state.models = models;
    },
    SET_POWER_CV(state, power) {
      state.powersCv = power;
    },
  },
};
