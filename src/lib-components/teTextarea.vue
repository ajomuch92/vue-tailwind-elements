<template>
  <textarea
      v-model="currentValue"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
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
      :rows="rows"
      :cols="cols"
      :placeholder="placeholder"
      :disabled="disabled"
      @blur="onBlurHandler"
      @change="onChangeHandler"
      @focus="onFocusHandler"
      @keydown="onKeyDownHandler"
      @keypress="onKeyPressHandler"
      @keyup="onKeyUpHandler"
    />
</template>

<script>
import EventMixin from './mixins/eventMixin';

export default {
  name: 'teTextarea',
  mixins: [EventMixin],
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder : {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 3
    },
    cols: {
      type: Number,
      default: null
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