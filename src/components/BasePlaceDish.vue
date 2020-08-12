<template>
  <div class="base-place-dish">
    <slot name="label"></slot>
    <div class="base-place-dish__wrapper">
      <ul class="base-place-dish__dishes">
        <li>Блюдо 1</li>
        <li>Блюдо 2</li>
        <li>Блюдо 3</li>
      </ul>
      <button class="base-place-dish__add-dish button">Добавить блюдо</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.base-place-dish {
  display: flex;
  justify-content: space-between;
  height: 20%;
  margin-bottom: 5px;
}
.base-place-dish__wrapper {
  display: flex;
  justify-content: space-between;
  width: 60%;
}
.base-place-dish__dishes {
  border: 1px solid black;
  height: 100%;
  padding: 15px;
  text-decoration: underline;
  overflow-y: scroll;
  width: 75%;
  margin-right: 10px;
}
.base-place-dish__add-dish {
  width: 35%;
  height: 65%;
}
</style>
