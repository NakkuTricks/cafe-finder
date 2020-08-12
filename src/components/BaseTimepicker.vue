<template>
  <div class="base-timepicker">
    <slot name="label"></slot>
    <div class="base-timepicker__wrapper">
      <input
        type="time"
        min="00:00:00"
        max="24:59:59"
        step="1"
        v-model="startModel"
        class="base-timepicker__input"
      />
      <input
        type="time"
        min="00:00:00"
        max="24:59:59"
        v-model="endModel"
        step="1"
        class="base-timepicker__input"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    startModel: {
      get() {
        return this.value.from_hour;
      },
      set(start) {
        this.$emit("setStartTime", start);
      }
    },
    endModel: {
      get() {
        return this.value.to_hour;
      },
      set(end) {
        this.$emit("setEndTime", end);
      }
    }
  }
};
</script>

<style>
.base-timepicker {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5px;
}
.base-timepicker__wrapper {
  width: 60%;
}
.el-date-editor.el-input {
  width: 50%;
}
.base-timepicker__input {
  padding: 5px 10px;
  margin-right: 5px;
}
</style>
