<template>
  <div class="ingredient-list">
    <slot name="label">
      <h4 class="edit-dish__modal-title">Добавить ингредиент</h4>
    </slot>
    <ul class="ingredient-list__wrapper">
      <ul>
        <li
          class="ingredient-list__item"
          v-for="ingredient in allIngredients"
          :key="ingredient.id"
        >
          <label>
            <input
              type="checkbox"
              v-model="choseIngredients"
              :value="ingredient"
            />
            {{ ingredient.name }}
          </label>
        </li>
      </ul>
    </ul>
    <div class="base-modal__buttons">
      <base-button
        @click="addChoseIngredient"
        class="base-modal__button base-modal__button_addIngredient"
        >Добавить выбранные ингредиенты</base-button
      >
      <base-button
        @click="createNewIngredient"
        class="base-modal__button base-modal__button_createIngredient"
        >Создать новый ингредиент</base-button
      >
    </div>
  </div>
</template>

<script>
import BaseButton from "../base/BaseButton";
export default {
  props: {
    allIngredients: {},
    dishIngredients: {}
  },
  data() {
    return {
      choseIngredients: []
    };
  },
  components: {
    BaseButton
  },
  methods: {
    addChoseIngredient() {
      return this.$emit("addChoseIngredient", this.choseIngredients);
    },
    createNewIngredient() {
      return this.$emit("newIngredientModal");
    }
  }
};
</script>

<style>
.ingredient-list {
  display: flex;
  flex-direction: column;
  max-height: 400px;
}
.ingredient-list__wrapper {
  border: 1px solid black;
  height: 100%;
  margin: 0;
  margin-bottom: 7px;
  padding: 15px;
  text-decoration: underline;
  overflow-y: scroll;
}
.ingredient-list__item {
  padding-bottom: 10px;
}
</style>
