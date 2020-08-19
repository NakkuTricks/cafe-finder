<template>
  <li class="place-card__item">
    <div class="place-card__description">
      <h4 class="place-card__title">{{ place.name }}</h4>
      <p class="place-card__designation">
        <span>{{ isOpen ? "Заведение открыто" : "Заведение закрыто" }}</span>
        , работает c {{ place.from_hour }} до {{ place.to_hour }}
      </p>
      <p class="place-card__designation">
        Средний чек: {{ place.average_price }}
      </p>
      <p class="place-card__designation">{{ place.address }}</p>
      <p class="place-card__designation">от вас</p>
    </div>
    <div class="place-card__img">
      <img
        class="place-card__img place-card__img-item"
        :src="place.image"
        alt
      />
    </div>
  </li>
</template>

<script>
export default {
  props: {
    place: {}
  },
  computed: {
    isOpen() {
      let time = new Date().toLocaleTimeString("ru-RU");
      if (time > this.place.from_hour && time < this.place.to_hour) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style>
.place-card__list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 25px;
  width: 60%;
  border: 1px solid black;
  background-color: white;
  overflow-y: scroll;
}
.place-card__item {
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 7px;
  max-height: 300px;
  margin-bottom: 20px;
}
.place-card__description {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.place-card__title {
  margin: 0;
  margin-bottom: 15px;
}
.place-card__designation {
  margin: 0;
  margin-bottom: 5px;
  font-size: 18px;
}
.place-card__img {
  display: flex;
  width: 40%;
}
.place-card__img-item {
  width: 100%;
}
</style>
