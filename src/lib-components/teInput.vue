<template>
  <div class="input-container">
    <input
      v-bind="validProps"
      v-model="currentValue"
      class="
        form-control
        block
        w-full
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      :class="[sizeClass, ...disabledClass]"
      @blur="onBlurHandler"
      @change="onChangeHandler"
      @focus="onFocusHandler"
      @keydown="onKeyDownHandler"
      @keypress="onKeyPressHandler"
      @keyup="onKeyUpHandler"
      @click="onClickHandler"
    />
  </div>
</template>

<script>
import EventMixin from './mixins/eventMixin';

export default {
  name: 'teInput',
  mixins: [EventMixin],
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    id: {
      type: String,
      default: () => URL.createObjectURL(new Blob([])).substring(31)
    },
    type: {
      type: String,
      default: 'text',
      validator: (value) => {
        return ['text', 'number', 'email', 'search', 'password', 'tel', 'url'].indexOf(value) !== -1
      }
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    form: {
      type: String,
      default: null
    },
    max: {
      type: [String, Number],
      default: null
    },
    maxlength: {
      type: [String, Number],
      default: null
    },
    min: {
      type: [String, Number],
      default: null
    },
    minlength: {
      type: [String, Number],
      default: null
    },
    name: {
      type: String,
      default: null
    },
    pattern: {
      type: RegExp,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    step: {
      type: [String, Number],
      default: null
    },
    invalid: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
  },
  computed: {
    sizeClass() {
      const classes = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-3 py-1.5 text-base',
        large: 'px-4 py-2 text-xl'
      }
      return classes[this.size]
    },
    disabledClass() {
      return {
        'text-gray-700 bg-gray-100': this.disabled
      }
    },
    validProps() {
      const props = { ...this.$props };
      delete props.size;
      return props;
    }
  },
  data: () => ({
    currentValue: '',
  }),
  created() {
    this.currentValue = this.value || '';
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