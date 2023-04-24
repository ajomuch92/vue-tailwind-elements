<template>
  <textarea
      v-model="currentValue"
      class="form-control"
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
