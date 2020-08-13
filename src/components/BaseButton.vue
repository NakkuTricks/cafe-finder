<template>
  <button
    class="base-button"
    :class="`base-button--${kind}`"
    :type="type"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    type: {
      type: String,
      default: "button"
    },
    kind: {
      type: String,
      default: "primary"
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style>
.base-button {
  padding: 15px 25px;
  background-color: #dbdbdb;
  border: 1px solid black;
  font-size: 20px;
}
.base-button--secondary {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  height: 100%;
  border: none;
  background-color: white;
  text-decoration: underline;
}
</style>
