<template>
  <main class="places">
    <div class="places__container">
      <h1 class="places__title">Мои Заведения</h1>
      <place-list></place-list>
      <base-button></base-button>
    </div>
  </main>
</template>

<script>
import PlaceList from "@/components/PlaceList";
import BaseButton from "@/components/BaseButton";

export default {
  data() {
    return {};
  },
  components: {
    PlaceList,
    BaseButton
  }
};
</script>

<style>
.places {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-color: white;
  border: 1px solid black;
}
.places__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 350px;
  width: 100%;
}
.places__title {
  font-size: 50px;
}
</style>
