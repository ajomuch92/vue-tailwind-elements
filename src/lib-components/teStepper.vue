<template>
  <div class="grid gap-4 w-3/4 m-auto" :class="`grid-cols-${steps.length}`">
    <div v-for="(step, key) in steps"
      :key="key" class="border-t-4 pt-4"
      :class="key<=currentValue?borderClass:'border-gray-200'"
    >
      <p
        class="uppercase font-bold"
        :class="[key<=currentValue?textColorClass:'text-gray-400', disabled[key]? 'cursor-not-allowed pointer-events-none': 'cursor-pointer']"
        @click="currentValue=key"
      >
        {{labelStep}} {{key+1}}
      </p>
      <p class="font-semibold" :class="{'opacity-50': disabled[key]||false}">{{step}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'teStepper',
  props: {
    steps: {
      type: Array,
      required: true,
      validator: (value) => value.length > 0 && value.length <= 12
    },
    disabled: {
      type: Array,
      default: () => []
    },
    activeStep: {
      type: Number,
      default: 0,
    },
    labelStep: {
      type: String,
      default: 'Step'
    },
    color: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'success', 'warning', 'danger', 'pink', 'purple', 'dark'].includes(value)
    },
  },
  computed: {
    borderClass() {
      return {
        'border-indigo-500': this.color === 'secondary',
        'border-green-500': this.color === 'success',
        'border-blue-500': this.color === 'primary',
        'border-yellow-500': this.color === 'warning',
        'border-red-500': this.color === 'danger',
        'border-purple-500': this.color === 'purple',
        'border-pink-500': this.color === 'pink',
        'border-gray-700': this.color === 'dark',
      }
    },
    textColorClass() {
      return {
        'hover:text-indigo-600 text-indigo-500': this.color === 'secondary',
        'hover:text-green-600 text-green-500': this.color === 'success',
        'hover:text-blue-600 text-blue-500': this.color === 'primary',
        'hover:text-yellow-600 text-yellow-500': this.color === 'warning',
        'hover:text-red-600 text-red-500': this.color === 'danger',
        'hover:text-purple-600 text-purple-500': this.color === 'purple',
        'hover:text-pink-600 text-pink-500': this.color === 'pink',
        'hover:text-gray-800 text-gray-700': this.color === 'dark',
      }
    },
  },
  data: () => ({
    currentValue: 0,
  }),
  created() {
    this.currentValue = this.activeStep;
  },
  watch: {
    currentValue(val) {
      this.$emit('update:activeStep', val);
      this.$emit('page-changed', val);
    },
    value(val) {
      this.currentValue = val;
    }
  }
}
</script>

<style>

</style>