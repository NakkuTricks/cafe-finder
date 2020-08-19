<template>
  <div class="home">
    <div class="home__filter">kek</div>
    <ul class="place-card__list">
      <place-card
        v-for="place in places"
        :key="place.id"
        :place="place"
      ></place-card>
    </ul>
  </div>
</template>

<script>
import PlaceCard from "@/components/place/PlaceCard";
export default {
  data() {
    return {
      isOpen: false
    };
  },
  components: {
    PlaceCard
  },
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
.home {
  padding: 0;
  border: none;
  background-color: #dbdbdb;
  justify-content: space-between;
}
.home__filter {
  max-height: 25%;
  background-color: white;
  border: 1px solid black;
  width: 35%;
}
</style>
