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
