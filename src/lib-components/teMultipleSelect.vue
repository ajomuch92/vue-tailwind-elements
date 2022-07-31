<template>
  <select v-model="currentValue" class="form-multiselect block my-1 min-w-fit" multiple :disabled="disabled">
    <option v-for="(option, key) in options" :key="key" :value="option[valueField]||option">
        {{option[displayField]||option}}
      </option>
  </select>
</template>

<script>
export default {
  name: 'teMultipleSelect',
  props: {
    value: {
      type: Array,
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
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  data: () => ({
    currentValue: [],
  }),
  created() {
    this.currentValue = this.value || [];
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
  .form-multiselect {
    appearance: none;
    background-color: #fff;
    border-color: #e2e8f0;
    border-width: 1px;
    border-radius: 0.25rem;
    padding-top: 0.5rem;
    padding-right: 0.75rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    min-width: 150px;
  }
</style>