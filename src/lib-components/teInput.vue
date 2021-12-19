<template>
  <div class="input-container" :class="{'form-floating': floating}">
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
        focus:bg-white focus:outline-none
      "
      :class="[sizeClass, ...disabledClass, ...invalidadClass]"
      @blur="onBlurHandler"
      @change="onChangeHandler"
      @focus="onFocusHandler"
      @keydown="onKeyDownHandler"
      @keypress="onKeyPressHandler"
      @keyup="onKeyUpHandler"
      @click="onClickHandler"
    />
    <label v-if="floating" class="text-gray-700">{{placeholder}}</label>
    <div v-if="helperText" class="text-sm mt-1" :class="{'text-red-500':invalid, 'text-gray-500': !invalid}">{{helperText}}</div>
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
    helperText: {
      type: String,
      default: null,
    },
    floating: {
      type: Boolean,
      default: false,
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
    invalidadClass() {
      return {
        'border-red-500 focus:border-red-600 invalid': this.invalid,
        'focus:text-gray-700 focus:border-blue-600': !this.invalid
      };
    },
    validProps() {
      const props = { ...this.$props };
      delete props.size;
      delete props.helperText;
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

<style scoped>
  .form-control.invalid {
    box-shadow: none !important;
  }
</style>