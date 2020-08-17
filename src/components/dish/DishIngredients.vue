<template>
  <div class="dish-ingredients">
    <slot name="label"></slot>
    <div class="dish-ingredients__wrapper">
      <ul class="dish-ingredients__dishes">
        <li v-for="ingredient in ingredients" :key="ingredient.id">
          <button @click="removeIngredient(ingredient.id)">
            {{ ingredient.name }}
          </button>
        </li>
      </ul>
      <base-button
        @click="showIngredientsModal"
        class="dish-ingredients__add-dish button"
        >Добавить ингредиент</base-button
      >
    </div>
  </div>
</template>

<script>
import BaseButton from "../base/BaseButton";
export default {
  props: {
    ingredients: {}
  },
  components: {
    BaseButton
  },
  methods: {
    showIngredientsModal() {
      this.$emit("showIngredientsModal");
    },
    removeIngredient(id) {
      this.$emit("removeIngredient", id);
    }
  }
};
</script>

<style>
.dish-ingredients {
  display: flex;
  justify-content: space-between;
  height: 20%;
  margin-bottom: 5px;
}
.dish-ingredients__wrapper {
  display: flex;
  justify-content: space-between;
  width: 60%;
}
.dish-ingredients__dishes {
  border: 1px solid black;
  height: 100%;
  padding: 15px;
  text-decoration: underline;
  overflow-y: scroll;
  width: 75%;
  margin-right: 10px;
}
.dish-ingredients__add-dish {
  width: 35%;
  height: 65%;
}
</style>
