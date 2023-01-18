<template>
  <div class="input-container">
    <div class="relative" :class="{'form-floating': floating}">
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
        :class="[sizeClass, ...disabledClass, ...invalidadClass, ...paddingForIcons]"
        @blur="onBlurHandler"
        @change="onChangeHandler"
        @focus="onFocusHandler"
        @keydown="onKeyDownHandler"
        @keypress="onKeyPressHandler"
        @keyup="onKeyUpHandler"
        @click="onClickHandler"
      />
      <te-icon
        v-if="rightIcon&&type!='number'"
        class="text-2xl text-gray-400 absolute right-2 top-1/2 translate-y-1/2"
        :class="{'cursor-pointer hover:text-gray-500': rightIconClickable}"
        :name="rightIcon"
        @click.native="rightIconClickable? $emit('right-icon-click', $event): () => {}"
      />
      <te-icon
        v-if="leftIcon"
        class="text-2xl text-gray-400 absolute left-2 top-1/2 translate-y-1/2"
        :class="{'cursor-pointer hover:text-gray-500': leftIconClickable}"
        :name="leftIcon"
        @click.native="leftIconClickable? $emit('right-icon-click', $event): () => {}"
      />
      <label v-if="floating" class="text-gray-700">{{placeholder}}</label>
    </div>
    <div v-if="helperText" class="text-sm mt-1" :class="{'text-red-500':invalid, 'text-gray-700': !invalid}">{{helperText}}</div>
  </div>
</template>

<script>
import EventMixin from './mixins/eventMixin';
import teIcon from './teIcon.vue';

export default {
  name: 'teInput',
  components: { teIcon },
  mixins: [EventMixin],
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    id: {
      type: String,
      default: () => crypto.randomUUID()
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
    rightIcon: {
      type: String,
      default: ''
    },
    rightIconClickable: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: String,
      default: ''
    },
    leftIconClickable: {
      type: Boolean,
      default: false
    }
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
    paddingForIcons() {
      return {
        'pr-9': this.rightIcon?.length,
        'pl-9': this.leftIcon?.length,
      }
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

  .translate-y-1\/2 {
    transform: translateY(-50%);
  }
</style>