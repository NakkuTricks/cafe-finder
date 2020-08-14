<template>
  <div class="base-photo-uploader">
    <slot name="label"></slot>
    <div class="base-photo-uploader__wrapper">
      <img class="base-photo-uploader__preview" :src="photoSrc" />
      <input
        type="file"
        @change="onFileSelected"
        value="Добавить фото"
        placeholder="Добавить фото"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    photo: {
      type: [File, String]
    }
  },
  methods: {
    onFileSelected(evt) {
      this.$emit("setPicture", evt);
    }
  },
  computed: {
    photoSrc() {
      if (!this.photo) return null;

      if (typeof this.photo === "string") return this.photo;

      return URL.createObjectURL(this.photo);
    }
  }
};
</script>

<style>
.base-photo-uploader {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.base-photo-uploader__wrapper {
  width: 60%;
  display: flex;
}
.base-photo-uploader__preview {
  max-width: 80%;
  margin-right: 5px;
}
</style>
