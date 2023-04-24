<template>
  <div class="form-check">
    <input v-model="currentValue" :value="nativeValue" type="radio" class="form-check-input" :name="idInput" :id="idInput"/>
    <label class="form-check-label inline-block text-gray-800" :for="idInput">
      <slot name="default">
        {{label}}
      </slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'teRadio',
  props: {
    idInput: {
      type: String,
      default: () => crypto.randomUUID()
    },
    value: {
      type: [String, Number],
      default: null,
    },
    label: {
      type: String,
      default: '',
    },
    nativeValue: {
      type: [String, Number],
      default: null,
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
