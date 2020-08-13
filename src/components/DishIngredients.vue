<template>
  <div class="place-dishes">
    <slot name="label"></slot>
    <div class="place-dishes__wrapper">
      <ul class="place-dishes__dishes">
        <ingredient-item></ingredient-item>
      </ul>
      <button class="place-dishes__add-dish button">Добавить ингредиент</button>
    </div>
  </div>
</template>

<script>
import IngredientItem from "./IngredientItem";
export default {
  components: {
    IngredientItem
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
