<template>
  <label class="inline-flex items-center">
    <input v-model="currentValue" type="checkbox" class="form-checkbox" :disabled="disabled" />
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
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
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