<template>
  <div class="place-dishes">
    <slot name="label"></slot>
    <div class="place-dishes__wrapper">
      <ul class="place-dishes__dishes">
        <dish-item
          class="dish-item"
          v-for="dish in dishes"
          :key="dish.id"
          :dish="dish"
          :place-id="place.id"
        ></dish-item>
      </ul>
      <router-link
        tag="button"
        :to="'/owner/places/' + place.id + '/add'"
        class="place-dishes__add-dish button"
        >Добавить блюдо</router-link
      >
    </div>
  </div>
</template>

<script>
import DishItem from "./DishItem";
export default {
  props: {
    dishes: {
      type: Array,
      default: () => []
    },
    place: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  components: {
    DishItem
  }
};
</script>

<style>
.place-dishes {
  display: flex;
  justify-content: space-between;
  height: 20%;
  margin-bottom: 5px;
}
.place-dishes__wrapper {
  display: flex;
  justify-content: space-between;
  width: 60%;
}
.place-dishes__dishes {
  border: 1px solid black;
  height: 100%;
  padding: 15px;
  text-decoration: underline;
  overflow-y: scroll;
  width: 75%;
  margin-right: 10px;
}
.place-dishes__add-dish {
  width: 35%;
  height: 65%;
}
</style>
