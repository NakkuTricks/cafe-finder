import Vue from "vue";
import Vuex from "vuex";

import Places from "./modules/Places";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Places
  }
});
