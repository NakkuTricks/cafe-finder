<template>
  <div id="app" class="app">
    <the-header></the-header>
    <main class="app__container">
      <router-view class="app__wrapper"></router-view>
    </main>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";

export default {
  data() {
    return {};
  },
  components: {
    TheHeader
  }
};
</script>

<style>
.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.app__container {
  background-color: #dbdbdb;
  height: 92%;
  padding: 20px 25px;
}
.app__wrapper {
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 25px;
  background-color: white;
  border: 1px solid black;
}
</style>
