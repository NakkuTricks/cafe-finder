<template>
  <div class="place-item">
    <router-link :to="'/owner/places/' + place.id">{{
      place.name
    }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    place: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>

<style></style>
