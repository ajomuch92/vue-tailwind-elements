<template>
  <div class="form-check form-switch">
    <input v-model="currentValue" class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch">
    <label class="form-check-label inline-block text-gray-800" :class="{'opacity-50': disabled}">
      <slot name="default" v-bind:selected="currentValue">
        {{label}}
      </slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'teSwitch',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  data: () => ({
    currentValue: false,
  }),
  created() {
    this.currentValue = this.value;
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },
    value(val) {
      this.currentValue = val;
    }
  }
}
</script>

<style>

</style>