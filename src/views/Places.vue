<template>
  <div class="places">
    <div class="places__container container">
      <h1 class="places__title">Мои Заведения</h1>
      <place-list :places="places"></place-list>
      <base-button>
        <router-link :to="'/owner/places/add'">Добавить заведение</router-link>
      </base-button>
    </div>
  </div>
</template>

<script>
import PlaceList from "@/components/PlaceList";
import BaseButton from "@/components/BaseButton";

export default {
  data() {
    return {};
  },
  components: {
    PlaceList,
    BaseButton
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
