<template>
  <div class="user-authorization">
    <main class="user-authorization__container">
      <form class="user-authorization__form" @submit.prevent="checkForm">
        <h3 class="user-authorization__title">Вход в систему</h3>

        <div class="user-authorization__inputs">
          <input
            class="user-authorization__name"
            placeholder="Логин"
            type="text"
            v-model="user.username"
          />

          <input
            class="user-authorization__password"
            placeholder="Пароль"
            type="text"
            v-model="user.password"
          />
        </div>

        <div class="user-authorization__buttons">
          <base-button class="user-authorization__login" type="submit"
            >Войти</base-button
          >
          <router-link
            tag="button"
            :to="'/registration'"
            class="user-authorization__registration"
            >Регистрация</router-link
          >
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton";

import { required, maxLength } from "vuelidate/lib/validators";

export default {
  components: {
    BaseButton
  },
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    checkForm() {
      this.$v.user.$touch();
      if (!this.$v.user.$invalid) {
        this.$store.dispatch("login", this.user).then(() => {
          this.$router.push("/owner/places");
        });
      }
    }
  },
  validations: {
    user: {
      username: {
        required,
        maxLength: maxLength(150)
      },
      password: {
        required
      }
    }
  }
};
</script>

<style>
.user-authorization {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-authorization__container {
  max-width: 400px;
  width: 100%;
  border: 1px solid black;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.user-authorization__form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.user-authorization__buttons {
  display: flex;
  justify-content: space-between;
}
.user-authorization__inputs {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.user-authorization__title {
  margin: 0;
  margin-bottom: 10px;
}
.user-authorization__name {
  margin-bottom: 10px;
}
.user-authorization__registration {
  border: none;
  background-color: white;
  text-decoration: underline;
  margin-right: 0;
  padding: 5px 0;
}
.user-authorization__login {
  max-width: 150px;
  width: 100%;
  padding: 5px 0;
}
</style>
