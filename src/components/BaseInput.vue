<template>
  <div class="base-input">
    <slot name="label"></slot>
    <slot name="address"></slot>
    <div class="base-input__wrapper">
      <input class="base-input__input" type="text" v-model.trim="getValue" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    getValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("setValue", value);
      }
    }
  }
};
</script>

<style>
.base-input {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5px;
}
.base-input__wrapper {
  width: 60%;
}
.base-input__input {
  padding: 10px 15px;
}
</style>
