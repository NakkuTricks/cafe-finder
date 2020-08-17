<template>
  <div class="base-modal">
    <div class="base-modal__container">
      <base-button
        @click="closeIngredientsModal"
        class="base-modal__button base-modal__button_close"
        >x</base-button
      >
      <slot />
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton";
export default {
  components: {
    BaseButton
  },
  methods: {
    closeIngredientsModal() {
      this.$emit("closeModal");
    }
  }
};
</script>

<style>
.base-modal {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}
.base-modal__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 450px;
  position: relative;
  border: 1px solid black;
  background-color: white;
  padding: 10px;
}
.base-modal__buttons {
  display: flex;
  justify-content: space-between;
}
.base-modal__button {
  padding: 5px;
  font-size: 16px;
}
.base-modal__button_addIngredient {
  width: 49%;
}
.base-modal__button_createIngredient {
  width: 49%;
}
.base-modal__button_close {
  position: absolute;
  right: 15px;
  top: 5px;
  padding: 0 10px;
  background: none;
  border: none;
}
</style>
