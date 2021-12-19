<template>
  <div class="w-full bg-gray-200 mb-6" :class="sizeClass">
    <div class="text-xs font-medium text-white text-center p-0.5 leading-none" :class="{...colorClass, ...sizeClass}" :style="widthStyle">
      {{showValue && size==='large' && value>0? `${value}%`: ''}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'teProgress',
  props: {
    value: {
      type: Number,
      required: true
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    showValue: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'success', 'warning', 'danger'].includes(value)
    }
  },
  computed: {
    widthStyle() {
      return {
        width: `${this.value}%`
      }
    },
    colorClass() {
      return {
        'bg-green-500': this.type === 'success',
        'bg-blue-500': this.type === 'primary',
        'bg-yellow-500': this.type === 'warning',
        'bg-red-500': this.type === 'danger',
      }
    },
    sizeClass() {
      return {
        'h-px': this.size === 'small',
        'h-2': this.size === 'medium',
        'h-5': this.size === 'large'
      }
    }
  }
}
</script>

<style>

</style>