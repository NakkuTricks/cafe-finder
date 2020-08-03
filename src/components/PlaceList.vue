<template>
  <div class="place-list">
    <ul>
      <li class="place-item" v-for="(place, id) in places" :key="id">
        <a href="#">{{ place.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    places: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
.place-list {
  font-size: 25px;
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
