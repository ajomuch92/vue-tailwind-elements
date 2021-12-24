<template>
  <div class="inline-block rounded-full" :class="{...typeClass, ...sizeClass, ...colorClass}" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<script>
export default {
  name: 'teSpinner',
  props: {
    type: {
      type: String,
      default: 'normal',
      validator: (value) => ['normal', 'growing'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium','large'].includes(value)
    },
    color: {
      type: String,
      default: 'primary',
      validator: (value) => ['normal','primary', 'secondary', 'success', 'warning', 'danger', 'pink', 'purple', 'light', 'dark'].includes(value)
    },
  },
  computed: {
    sizeClass() {
      return {
        'w-4 h-4': this.size === 'small',
        'w-8 h-8': this.size === 'medium',
        'w-12 h-12': this.size === 'large',
      }
    },
    colorClass() {
      return {
        'text-gray-600': this.color === 'normal',
        'text-indigo-600': this.color === 'secondary',
        'text-green-600': this.color === 'success',
        'text-blue-600': this.color === 'primary',
        'text-yellow-600': this.color === 'warning',
        'text-red-600': this.color === 'danger',
        'text-purple-600': this.color === 'purple',
        'text-pink-600': this.color === 'pink',
        'text-gray-800': this.color === 'dark',
        'text-gray-200': this.color === 'light',
      }
    },
    typeClass() {
      return {
        'spinner-border animate-spin border-4': this.type === 'normal',
        'spinner-grow bg-current opacity-0': this.type === 'growing',
      }
    }
  }
}
</script>

<style>

</style>