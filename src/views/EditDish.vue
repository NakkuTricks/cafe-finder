<template>
  <div class="edit-dish">
    <form class="edit-dish__form container" @submit.prevent="checkForm">
      <h1 class="edit-dish__dish-name">{{ dish.name }}</h1>

      <base-input :value="dish.name" @setValue="setName">
        <template v-slot:label>
          <p class="edit-dish__title">Название:</p>
        </template>
      </base-input>

      <base-photo-uploader :photo="dish.photo" @setPicture="setPicture">
        <template v-slot:label>
          <p class="edit-dish__title">Фотография:</p>
        </template>
      </base-photo-uploader>

      <base-input :value="dish.price" @setValue="setPrice">
        <template v-slot:price>
          <p class="edit-dish__title">Цена:</p>
        </template>
      </base-input>

      <dish-ingredients>
        <template v-slot:label>
          <p class="edit-dish__title">Ингредиенты:</p>
        </template>
      </dish-ingredients>

      <div class="edit-dish__buttons">
        <base-button v-if="isCreating" type="submit">Добавить</base-button>
        <template v-else>
          <base-button type="submit">Сохранить</base-button>
          <base-button kind="secondary" @click="deleteDish"
            >Удалить</base-button
          >
        </template>
      </div>
    </form>
    <base-modal>
      <ingredient-list></ingredient-list>
    </base-modal>
  </div>
</template>

<script>
import BaseInput from "@/components/base/BaseInput";
import BasePhotoUploader from "@/components/base/BasePhotoUploader";
import BaseButton from "@/components/base/BaseButton";
import DishIngredients from "@/components/dish/DishIngredients";
import BaseModal from "@/components/base/BaseModal";
import IngredientList from "@/components/ingredient/IngredientList";

import { MessageBox } from "element-ui";

import { createDish, deleteDish, updateDish } from "@/api/dishes";

import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "EditDish",
  components: {
    BaseInput,
    BasePhotoUploader,
    BaseButton,
    BaseModal,
    IngredientList,
    DishIngredients
  },
  props: {
    placeId: {
      type: [String, Number],
      required: true
    },
    id: {
      type: [String, Number],
      default: "add"
    }
  },
  data() {
    return {
      dish: {
        name: "",
        photo: "",
        price: "",
        ingredients: [1]
      }
    };
  },
  methods: {
    checkForm() {
      if (!this.$v.dish.$invalid) {
        if (this.isCreating) {
          createDish(this.dish, this.placeId).then(() => {
            this.goToPlace();
          });
        } else {
          updateDish(this.dish, this.id).then(() => {
            this.goToPlace();
          });
        }
      }
    },
    deleteDish() {
      MessageBox.confirm(`Желаете удалить блюдо?`, "Confirmation", {
        confirmButtonText: "Да",
        cancelButtonText: "Нет",
        type: "warning"
      }).then(() => {
        deleteDish(this.id).then(() => {
          this.goToPlace();
        });
      });
    },
    goToPlace() {
      this.$router.push(`/owner/places/${this.placeId}`);
    },
    setName(value) {
      return (this.dish.name = value);
    },
    setPrice(value) {
      return (this.dish.price = parseFloat(value));
    },
    setPicture(evt) {
      return (this.dish.photo = evt.target.files[0]);
    }
  },
  computed: {
    isCreating() {
      return this.id === "add";
    }
  },
  created() {
    if (!this.isCreating) {
      this.dish = { ...this.$route.params.dish };
    }
  },
  validations: {
    dish: {
      name: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(20)
      },
      photo: {
        required,
        checkSize(img) {
          if (typeof img === "string") return true;
          if (!img) return false;

          return img.size < 1024 * 1024;
        }
      },
      price: {
        required
      }
    }
  }
};
</script>

<style>
.edit-dish {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.edit-dish__wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
}
.edit-dish__form {
  max-width: 650px;
}
.edit-dish__buttons {
  display: flex;
  width: 100%;
}
.edit-dish__title {
  width: 40%;
  margin: 0;
}
.edit-dish__dish-name {
  margin: 0;
  margin-bottom: 15px;
}
</style>
