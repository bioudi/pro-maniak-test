import adsService from "@/services/ads.service";

export const ads = {
  namespaced: true,
  state: {
    ads: [],
    filters: {
      brandId: null,
      year: null,
      fuel: null,
      modelId: null
    },
    ad: {
      brandId: null,
      year: null,
      fuel: null,
      model: null,
      powerCv: null,
      gearbox: null
    }
  },
  actions: {
    GET_ADS({ state, commit }) {
      return adsService
        .getAds(state.filters)
        .then(response => commit("SET_ADS", response));
    },
    CREATE_AD({ state }) {
      return adsService.createAd(state.ad);
    }
  },
  mutations: {
    SET_ADS(state, ads) {
      state.ads = ads;
    }
  }
};
