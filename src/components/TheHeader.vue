<template>
  <header class="the-header">
    <nav class="the-header__navigation">
      <router-link :to="'/'" class="the-header__title">Заголовок</router-link>
      <router-link :to="'/owner/places'" class="the-header__title"
        >Страница Мои заведения</router-link
      >
      <div class="the-header__account">
        <a href="#" class="the-header__item the-header__item_divider"
          >Вы вошли как Ivan</a
        >
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
.the-header__account {
  display: flex;
  justify-content: space-between;
}
.the-header__item_divider {
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
