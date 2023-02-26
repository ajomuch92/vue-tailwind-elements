<template>
  <label class="inline-flex items-center">
    <input v-model="currentValue" type="checkbox" class="form-checkbox h-4 w-4" :disabled="disabled" :value="nativeValue" />
    <span class="ml-2" :class="{'opacity-50': disabled}">
      <slot name="default" v-bind:selected="currentValue">
        {{label}}
      </slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'teCheckbox',
  props: {
    value: {
      type: [Boolean, Array],
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    nativeValue: {
      type: [String, Number],
      default: undefined,
    },
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

<style scoped>
  input {
    accent-color: rgb(59, 130, 246);
  }
</style>