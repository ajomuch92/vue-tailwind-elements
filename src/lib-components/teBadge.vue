<template>
  <span
    class="
      text-xs
      font-medium
    "
    :class="getClass"
  >
    {{text}}
  </span>
</template>

<script>
export default {
  name: 'teBadge',
  props: {
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'normal',
      validator: (value) => ['normal','primary', 'success', 'info', 'warning', 'danger', 'pink', 'purple'].includes(value)
    },
    size: {
      type: String,
      default: 'small',
      validator: (value) => ['small','large'].includes(value)
    },
    solid: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    getClass() {
      return {
        'bg-gray-500 bg-opacity-10 text-gray-800': this.type === 'normal' && !this.solid && !this.outlined,
        'bg-indigo-500 bg-opacity-10 text-indigo-800': this.type === 'primary' && !this.solid && !this.outlined,
        'bg-green-500 bg-opacity-10 text-green-800': this.type === 'success' && !this.solid && !this.outlined,
        'bg-blue-500 bg-opacity-10 text-blue-800': this.type === 'info' && !this.solid && !this.outlined,
        'bg-yellow-500 bg-opacity-10 text-yellow-800': this.type === 'warning' && !this.solid && !this.outlined,
        'bg-red-500 bg-opacity-10 text-red-800': this.type === 'danger' && !this.solid && !this.outlined,
        'bg-purple-500 bg-opacity-10 text-purple-800': this.type === 'purple' && !this.solid && !this.outlined,
        'bg-pink-500 bg-opacity-10 text-pink-800': this.type === 'pink' && !this.solid && !this.outlined,
        'bg-gray-500 text-white': this.type === 'normal' && this.solid && !this.outlined,
        'bg-indigo-500 text-white': this.type === 'primary' && this.solid && !this.outlined,
        'bg-green-500 text-white': this.type === 'success' && this.solid && !this.outlined,
        'bg-blue-500 text-white': this.type === 'info' && this.solid && !this.outlined,
        'bg-yellow-500 text-white': this.type === 'warning' && this.solid && !this.outlined,
        'bg-red-500 text-white': this.type === 'danger' && this.solid && !this.outlined,
        'bg-purple-500 text-white': this.type === 'purple' && this.solid && !this.outlined,
        'bg-pink-500 text-white': this.type === 'pink' && this.solid && !this.outlined,
        'border border-gray-500 text-gray-500': this.type === 'normal' && this.outlined,
        'border border-indigo-500 text-indigo-500': this.type === 'primary' && this.outlined,
        'border border-green-500 text-green-500': this.type === 'success' && this.outlined,
        'border border-blue-500 text-blue-500': this.type === 'info' && this.outlined,
        'border border-yellow-500 text-yellow-500': this.type === 'warning' && this.outlined,
        'border border-red-500 text-red-500': this.type === 'danger' && this.outlined,
        'border border-purple-500 text-purple-500': this.type === 'purple' && this.outlined,
        'border border-pink-500 text-pink-500': this.type === 'pink' && this.outlined,
        'rounded': !this.rounded,
        'rounded-full': this.rounded,
        'px-3 py-1.5': this.size === 'large',
        'px-2 py-0.5': this.size === 'small',
      }
    }
  }
}
</script>

<style>

</style>