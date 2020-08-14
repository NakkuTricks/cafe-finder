<template>
  <div class="places">
    <div class="places__container container">
      <h1 class="places__title">Мои Заведения</h1>
      <place-list :places="places"></place-list>

      <router-link tag="button" :to="'/owner/places/add'"
        >Добавить заведение</router-link
      >
    </div>
  </div>
</template>

<script>
import PlaceList from "@/components/place/PlaceList";

export default {
  data() {
    return {};
  },
  components: {
    PlaceList
  },
  methods: {},
  computed: {
    places() {
      return this.$store.state.Places.places;
    }
  },
  mounted() {
    this.$store.dispatch("getPlaceList");
  }
};
</script>

<style>
.places__container {
  max-width: 350px;
}
</style>
