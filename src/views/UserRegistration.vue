<template>
  <div class="user-registration">
    <main class="user-registration__container">
      <form class="user-registration__form" @submit.prevent="checkForm">
        <h3 class="user-registration__title">Регистрация в системе</h3>

        <div class="user-registration__inputs">
          <input
            class="user-registration__name"
            placeholder="Логин"
            type="text"
            v-model.trim="user.username"
          />

          <input
            class="user-registration__password"
            placeholder="Пароль"
            type="text"
            v-model.trim="user.password"
          />

          <input
            class="user-registration__passwordConfirm"
            placeholder="Подтверждение пароля"
            type="text"
            v-model.trim="user.passwordConfirm"
          />
        </div>

        <div class="user-registration__buttons">
          <base-button type="submit" class="user-registration__login"
            >Зарегистрироваться</base-button
          >

          <router-link
            tag="button"
            :to="'/authorization'"
            class="user-registration__registration"
            >Вход</router-link
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
        password: "",
        passwordConfirm: ""
      }
    };
  },
  methods: {
    checkForm() {
      this.$v.user.$touch();
      if (
        !this.$v.user.$invalid &&
        this.user.password === this.user.passwordConfirm
      ) {
        this.$store.dispatch("create", this.user);
        this.$router.push("/authorization");
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
.user-registration {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-registration__container {
  max-width: 400px;
  width: 100%;
  border: 1px solid black;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.user-registration__form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.user-registration__buttons {
  display: flex;
  justify-content: space-between;
}
.user-registration__inputs {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.user-registration__title {
  margin: 0;
  margin-bottom: 10px;
}
.user-registration__name {
  margin-bottom: 10px;
}
.user-registration__password {
  margin-bottom: 10px;
}
.user-registration__registration {
  border: none;
  background-color: white;
  text-decoration: underline;
  margin-right: 0;
  padding: 5px 0;
}
.user-registration__login {
  max-width: 200px;
  width: 100%;
  padding: 5px 0;
}
</style>
