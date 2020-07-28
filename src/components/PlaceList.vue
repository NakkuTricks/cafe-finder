<template>
  <ul class="place-list">
    <li class="place-item" v-for="(place, id) in places" :key="id">
      {{ place }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      places: ["Benedict", "Veggy", "Benedict", "Veggy", "Benedict", "Veggy"]
    };
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
}
.place-item {
  margin-bottom: 25px;
}
</style>
