<template>
  <header class="the-header">
    <nav class="the-header__navigation">
      <a href="#" class="the-header__title">Заголовок</a>
      <div class="the-header__account">
        <a href="#" class="the-header__item the-header__item_login">
          Вы вошли как Ivan
        </a>
        <a href="#" class="the-header__item the-header__item_exit">Выйти</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
.the-header {
  display: flex;
  background-color: white;
  border-bottom: 1px solid black;
}
.the-header__navigation {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin: 15px 25px;
  font-size: 25px;
}
.the-header__title {
  text-decoration: underline;
}
.the-header__account {
  display: flex;
  justify-content: space-between;
}
.the-header__item_login {
  display: flex;
  width: 100%;
}
.the-header__item_login::after {
  content: "|";
  height: 100%;
  margin: 0 auto;
  padding: 0 10px;
}
</style>
