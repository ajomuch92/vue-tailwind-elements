<template>
  <select class="form-select"
    :class="[size]"
    :disabled="disabled"
    :multiple="multiple"
    v-model="currentValue"
  >
      <option v-if="placeholder&&!multiple" value="" selected hidden>{{placeholder}}</option>
      <option v-for="(option, key) in options" :key="key" :value="option[valueField]||option">
        {{option[displayField]||option}}
      </option>
  </select>
</template>

<script>
export default {
  name: 'teSelect',
  props: {
    value: {
      type: [String, Number, Array, Object],
      default: null,
    },
    options: {
      type: Array,
      default: () => []
    },
    displayField: {
      type: String,
      default: 'label',
    },
    valueField: {
      type: String,
      default: 'id',
    },
    placeholder: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium','large'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    }
  },
  data: () => ({
    currentValue: '',
  }),
  created() {
    this.currentValue = this.value || undefined;
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

<style scoped>
</style>