<template>
  <div class="place-list">
    <ul>
      <place-item
        class="place-item"
        v-for="place in places"
        :key="place.id"
        :place="place"
      ></place-item>
    </ul>
  </div>
</template>

<script>
import PlaceItem from "./PlaceItem";
export default {
  props: {
    places: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  components: {
    PlaceItem
  }
};
</script>

<style>
.place-list {
  border: 1px solid black;
  height: 100%;
  margin: 10px 0;
  padding: 15px;
  text-decoration: underline;
  overflow-y: scroll;
}
.place-item {
  margin-bottom: 25px;
}
</style>
