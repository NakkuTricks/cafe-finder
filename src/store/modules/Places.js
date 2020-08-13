import { getPlaces, createPlace, updatePlace, deletePlace } from "@/api/places";

export default {
  state: {
    places: []
  },
  getters: {
    getPlaceById: state => id => {
      return state.places.find(place => place.id === id);
    }
  },
  actions: {
    getPlaceList({ commit }) {
      getPlaces().then(places => commit("setPlaces", places));
    },
    createPlace({ commit }, placeData) {
      createPlace(placeData).then(place => commit("addPlace", place));
    },
    updatePlace({ commit }, placeData) {
      updatePlace(placeData).then(place => commit("editPlace", place));
    },
    deletePlace({ commit }, id) {
      deletePlace(id).then(() => commit("deletePlace", id));
    }
  },
  mutations: {
    setPlaces(state, places) {
      state.places = places;
    },
    addPlace(state, place) {
      state.places.push(place);
    },
    editPlace(state, place) {
      const index = state.places.findIndex(item => item.id === place.id);
      state.places.splice(index, 1, place);
    },
    deletePlace(state, id) {
      const index = state.places.findIndex(item => item.id === id);
      state.places.splice(index, 1);
    }
  }
};
