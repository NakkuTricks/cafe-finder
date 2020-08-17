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

      <dish-ingredients
        :ingredients="dish.ingredients"
        @showIngredientsModal="showIngredientsModal"
        @removeIngredient="removeIngredient"
      >
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

    <base-modal
      v-if="isModalShow"
      :showIngredientsModal="showIngredientsModal"
      @closeModal="closeModal"
    >
      <template v-slot:label></template>

      <ingredient-list
        @addChoseIngredient="addChoseIngredient"
        @newIngredientModal="newIngredientModal"
        :allIngredients="allIngredients"
        :dishIngredients="dish.ingredients"
      ></ingredient-list>
    </base-modal>

    <base-modal
      v-if="isIngredientCreateShow"
      :showIngredientsModal="showIngredientsModal"
      @closeModal="closeModal"
    >
      <template v-slot:label></template>

      <ingredient-create-window
        @createNewIngredient="createNewIngredient"
      ></ingredient-create-window>
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
import IngredientCreateWindow from "@/components/ingredient/IngredientCreateWindow";

import { MessageBox } from "element-ui";

import { createDish, deleteDish, updateDish, getDishById } from "@/api/dishes";

import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "EditDish",
  components: {
    BaseInput,
    BasePhotoUploader,
    BaseButton,
    BaseModal,
    IngredientList,
    IngredientCreateWindow,
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
      isModalShow: false,
      isIngredientCreateShow: false,
      dish: {
        name: "",
        photo: "",
        price: "",
        ingredients: []
      }
    };
  },
  methods: {
    showIngredientsModal() {
      this.isModalShow = true;
    },
    closeModal() {
      this.isModalShow = false;
      this.isIngredientCreateShow = false;
    },
    addChoseIngredient(value) {
      this.dish.ingredients = value;
      this.isModalShow = false;
    },
    newIngredientModal() {
      this.isIngredientCreateShow = true;
    },
    removeIngredient(id) {
      const index = this.dish.ingredients.findIndex(item => item.id === id);
      this.dish.ingredients.splice(index, 1);
    },
    createNewIngredient(ingredient) {
      this.$store.dispatch("createIngredient", ingredient);
      this.isIngredientCreateShow = false;
    },
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
    },
    allIngredients() {
      return this.$store.state.Ingredients.list;
    }
  },
  created() {
    if (!this.isCreating) {
      this.dish = { ...this.$route.params.dish };
      getDishById(this.dish.id).then(dish => (this.dish = dish));
    }

    this.$store.dispatch("getIngredientList");
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
      },
      ingredients: {
        required,
        minLength: minLength(1)
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
.edit-dish__modal-title {
  margin: 0;
}
.edit-dish__dish-name {
  margin: 0;
  margin-bottom: 15px;
}
</style>
