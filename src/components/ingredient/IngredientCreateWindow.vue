<template>
  <div class="ingredient-create-window">
    <slot name="label">
      <h4 class="edit-dish__modal-title">Создать ингредиент</h4>
    </slot>
    <div class="ingredient-create-window__container">
      <label class="ingredient-create-window__label">
        Название:
        <input type="text" v-model.trim="name" />
      </label>
      <label class="ingredient-create-window__label">
        Калорийность:
        <input type="text" v-model.number="calories" />
      </label>
    </div>

    <button @click="createNewIngredient">Ок</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      calories: ""
    };
  },
  methods: {
    createNewIngredient() {
      return this.$emit("createNewIngredient", {
        name: this.name,
        calories: this.calories
      });
    }
  }
};
</script>

<style>
.ingredient-create-window {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.ingredient-create-window__container {
  margin: 10px 0;
}
.ingredient-create-window__label {
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
}
</style>
