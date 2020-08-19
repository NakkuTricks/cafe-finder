import Vue from "vue";
import Vuex from "vuex";

import Places from "./modules/Places";
import Ingredients from "./modules/Ingredients";
import User from "./modules/User";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Places,
    Ingredients,
    User
  }
});
