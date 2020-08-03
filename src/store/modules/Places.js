import { getPlaces } from "@/api/places";

export default {
  state: {
    places: []
  },
  actions: {
    getPlaceList({ commit }) {
      return getPlaces()
        .then(places => {
          commit("setPlaces", places.data);
          return places;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mutations: {
    setPlaces(state, places) {
      state.places = places;
    }
  }
};
