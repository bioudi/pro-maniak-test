import Vue from "vue";
import Vuex from "vuex";

import { auth } from "./auth.module";
import { filters } from "./filters.module";
import { ads } from "./ads.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    filters,
    ads
  }
});
