<template>
  <router-link
    tag="a"
    :to="{
      name: 'EditDish',
      params: {
        placeId,
        id: dish.id,
        dish
      }
    }"
    class="dish-item"
    >{{ dish.name }}</router-link
  >
</template>

<script>
export default {
  props: {
    dish: {
      type: Object,
      required: true
    },
    placeId: {
      type: Number,
      required: true
    }
  }
};
</script>

<style></style>
