import { getIngredients, createIngredient } from "@/api/ingredients";

export default {
  state: {
    list: []
  },
  actions: {
    getIngredientList({ commit }) {
      getIngredients().then(ingredients =>
        commit("setIngredients", ingredients)
      );
    },
    createIngredient({ commit }, ingredientData) {
      createIngredient(ingredientData).then(ingredient =>
        commit("setNewIngredient", ingredient)
      );
    }
  },
  mutations: {
    setIngredients(state, ingredients) {
      state.list = ingredients;
    },
    setNewIngredient(state, ingredient) {
      state.list.push(ingredient);
    }
  }
};
