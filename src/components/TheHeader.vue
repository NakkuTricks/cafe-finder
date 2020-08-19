<template>
  <header class="the-header">
    <nav class="the-header__navigation">
      <router-link :to="'/'" class="the-header__title">Заголовок</router-link>

      <div class="the-header__login" v-if="isAuthenticated">
        <p class="the-header__item the-header__item_divider">
          Вы вошли как {{ userName }}
        </p>
        <button
          class="the-header__item the-header__item_exit"
          @click="logoutUser"
        >
          Выйти
        </button>
      </div>

      <div class="the-header__login" v-else>
        <router-link tag="a" :to="'/owner/places'" class="the-header__item"
          >Войти как владелец заведения</router-link
        >
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    logoutUser() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/authorization");
      });
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    userName() {
      return this.$store.getters.userName;
    }
  }
};
</script>

<style>
.the-header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-bottom: 1px solid black;
  padding: 15px 25px;
  height: 8%;
}
.the-header__navigation {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}
.the-header__title {
  text-decoration: underline;
}
.the-header__login {
  display: flex;
  justify-content: space-between;
}
.the-header__item_exit {
  background-color: white;
  border: none;
  text-decoration: underline;
  font-size: 20px;
  cursor: pointer;
}
.the-header__item_divider {
  margin: 0;
  display: flex;
  width: 100%;
}
.the-header__item_divider::after {
  content: "|";
  height: 100%;
  margin: 0 auto;
  padding: 0 10px;
}
</style>
