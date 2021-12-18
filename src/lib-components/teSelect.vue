<template>
  <select class="form-select
    appearance-none
    block
    w-full
    font-normal
    text-gray-700
    bg-white bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700
    focus:bg-white
    focus:border-blue-600
    focus:outline-none"
    :class="sizeClass"
    :disabled="disabled"
    v-model="currentValue"
  >
      <option v-if="placeholder" value="" selected hidden>{{placeholder}}</option>
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
      type: [String, Number, Array],
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
    }
  },
  data: () => ({
    currentValue: '',
  }),
  created() {
    this.currentValue = this.value || '';
  },
  computed: {
    sizeClass() {
      return {
        'px-x py-1 text-sm': this.size === 'small',
        'px-3 py-1.5 text-base': this.size === 'medium',
        'px-4 py-2 text-xl': this.size === 'large',
      }
    }
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

<style>

</style>