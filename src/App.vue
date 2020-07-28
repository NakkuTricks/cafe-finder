<template>
  <div id="app" class="app">
    <the-header></the-header>
    <div class="app__container">
      <router-view></router-view>
    </div>
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
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
}
html body {
  height: 100vh;
  width: 100%;
}
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.app__container {
  background-color: #dbdbdb;
  height: 100%;
  padding: 20px 25px;
}
</style>
