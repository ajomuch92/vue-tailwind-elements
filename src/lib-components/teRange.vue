<template>
  <input
    v-model.number="currentValue"
    type="range"
    class="form-range focus:ring-0"
    :min="min"
    :max="max"
    :step="step"
    :disabled="disabled"
  />
</template>

<script>
export default {
  name: 'teRange',
  props: {
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 5,
    },
    step: {
      type: Number,
      default: 1,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  data: () => ({
    currentValue: 0,
  }),
  created() {
    this.currentValue = this.value;
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val)
    },
    value(val) {
      this.currentValue = val;
    }
  }
}
</script>
