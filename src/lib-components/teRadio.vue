<template>
  <div class="form-check">
    <input v-model="currentValue" :value="nativeValue" type="radio" class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" :name="idInput" :id="idInput"/>
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
      default: () => (new Date()).getTime().toString(16)
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

<style>

</style>