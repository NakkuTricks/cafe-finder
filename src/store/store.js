import Vue from "vue";
import Vuex from "vuex";

import Places from "./modules/Places";
import Ingredients from "./modules/Ingredients";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Places,
    Ingredients
  }
});
