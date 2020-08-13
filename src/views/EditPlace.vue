<template>
  <div class="edit-place">
    <form class="edit-place__form container" @submit.prevent="checkForm">
      <h1 class="edit-place__place-name">{{ place.name }}</h1>
      <div class="edit-place__wrapper">
        <base-input :value="place.name" @setValue="setName">
          <template v-slot:label>
            <p class="edit-place__title">Название:</p>
          </template>
        </base-input>

        <base-photo-uploader :photo="place.image" @setPicture="setPicture">
          <template v-slot:label>
            <p class="edit-place__title">Фотография:</p>
          </template>
        </base-photo-uploader>

        <base-timepicker
          :value="place"
          @setStartTime="setStartTime"
          @setEndTime="setEndTime"
        >
          <template v-slot:label>
            <p class="edit-place__title">Режим работы:</p>
          </template>
        </base-timepicker>

        <base-input :value="place.address" @setValue="setAddress">
          <template v-slot:address>
            <p class="edit-place__title">Адрес:</p>
          </template>
        </base-input>

        <place-dishes v-if="!isCreating" :place="place" :dishes="dishes">
          <template v-slot:label>
            <p class="edit-place__title">Блюда:</p>
          </template>
        </place-dishes>
      </div>

      <div class="edit-place__buttons">
        <base-button v-if="isCreating" type="submit">Добавить</base-button>
        <template v-else>
          <base-button type="submit">Сохранить</base-button>
          <base-button kind="secondary" @click="deletePlace"
            >Удалить</base-button
          >
        </template>
      </div>
    </form>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
import BasePhotoUploader from "@/components/BasePhotoUploader";
import PlaceDishes from "@/components/PlaceDishes";
import BaseTimepicker from "@/components/BaseTimepicker";
import BaseButton from "@/components/BaseButton";

import { getDishes } from "@/api/dishes/";

import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "EditPlace",
  components: {
    BaseInput,
    BasePhotoUploader,
    PlaceDishes,
    BaseTimepicker,
    BaseButton
  },
  props: {
    id: {
      type: [String, Number]
    }
  },
  data() {
    return {
      place: {
        name: "",
        image: "",
        from_hour: "",
        to_hour: "",
        address: ""
      },
      dishes: []
    };
  },
  computed: {
    isCreating() {
      return this.id === "add";
    }
  },
  methods: {
    setName(value) {
      return (this.place.name = value);
    },
    setAddress(value) {
      return (this.place.address = value);
    },
    setPicture(evt) {
      return (this.place.image = evt.target.files[0]);
    },
    setStartTime(value) {
      return (this.place.from_hour = value);
    },
    setEndTime(value) {
      return (this.place.to_hour = value);
    },
    checkForm() {
      this.$v.place.$touch();

      if (!this.$v.place.$invalid) {
        const action = this.isCreating ? "createPlace" : "updatePlace";
        this.$store.dispatch(action, this.place);
        this.$router.push("/owner/places");
      }
    },
    deletePlace() {
      this.$store.dispatch("deletePlace", this.id);
      this.$router.push("/owner/places");
    }
  },
  created() {
    if (!this.isCreating) {
      this.place = { ...this.$store.getters.getPlaceById(Number(this.id)) };
    }

    getDishes(this.id).then(dish => (this.dishes = dish));
  },
  validations: {
    place: {
      name: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(20)
      },
      image: {
        required,
        checkSize(img) {
          if (typeof img === "string") return true;
          if (!img) return false;

          return img.size < 1024 * 1024;
        }
      },
      from_hour: {
        required
      },
      to_hour: {
        required,
        checkTime() {
          return this.place.to_hour > this.place.from_hour;
        }
      },
      address: { required }
    }
  }
};
</script>

<style>
.edit-place {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.edit-place__wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
}
.edit-place__form {
  max-width: 650px;
}
.edit-place__buttons {
  display: flex;
  width: 100%;
}
.edit-place__title {
  width: 40%;
  margin: 0;
}
.edit-place__place-name {
  margin: 0;
  margin-bottom: 15px;
}
</style>
