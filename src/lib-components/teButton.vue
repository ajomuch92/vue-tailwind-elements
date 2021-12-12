<template>
  <button
    class="
        font-bold
        outline-none
        focus:outline-none
        ease-linear
        transition-all
        duration-150
        align-middle
      "
    :class="getClass"
    type="button"
    @click="$emit('click', $event)"
  >
    <slot name="default" />
  </button>
</template>

<script>
export default {
  name: 'teButton',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: (value) => ['normal','primary', 'success', 'info', 'warning', 'danger', 'pink', 'purple'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium','large'].includes(value)
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    shadowed: {
      type: Boolean,
      default: false,
    },
    uppercased: {
      type: Boolean,
      default: false,
    },
    onlyText: {
      type: Boolean,
      default: false,
    },
    marginLess: {
      type: Boolean,
      default: false,
    },
    noRounded: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    getClass() {
      return {
        'bg-gray-500 hover:bg-gray-700 active:bg-gray-500 text-white': this.type === 'normal' && !this.onlyText && !this.outlined,
        'bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-500 text-white': this.type === 'primary' && !this.onlyText && !this.outlined,
        'bg-green-500 hover:bg-green-700 active:bg-green-500 text-white': this.type === 'success' && !this.onlyText && !this.outlined,
        'bg-blue-500 hover:bg-blue-700 active:bg-blue-500 text-white': this.type === 'info' && !this.onlyText && !this.outlined,
        'bg-yellow-500 hover:bg-yellow-700 active:bg-yellow-500 text-white': this.type === 'warning' && !this.onlyText && !this.outlined,
        'bg-red-500 hover:bg-red-700 active:bg-red-500 text-white': this.type === 'danger' && !this.onlyText && !this.outlined,
        'bg-purple-500 hover:bg-purple-700 active:bg-purple-500 text-white': this.type === 'purple' && !this.onlyText && !this.outlined,
        'bg-pink-500 hover:bg-pink-700 active:bg-pink-500 text-white': this.type === 'pink' && !this.onlyText && !this.outlined,
        'background-transparent text-gray-500': this.type === 'normal' && this.onlyText && !this.outlined,
        'background-transparent text-indigo-500': this.type === 'primary' && this.onlyText && !this.outlined,
        'background-transparent text-green-500': this.type === 'success' && this.onlyText && !this.outlined,
        'background-transparent text-blue-500': this.type === 'info' && this.onlyText && !this.outlined,
        'background-transparent text-yellow-500': this.type === 'warning' && this.onlyText && !this.outlined,
        'background-transparent text-red-500': this.type === 'danger' && this.onlyText && !this.outlined,
        'background-transparent text-purple-500': this.type === 'purple' && this.onlyText && !this.outlined,
        'background-transparent text-pink-500': this.type === 'pink' && this.onlyText && !this.outlined,
        'bg-transparent border border-solid border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white': this.type === 'normal' && this.outlined,
        'bg-transparent border border-solid border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white': this.type === 'primary' && this.outlined,
        'bg-transparent border border-solid border-green-500 text-green-500 hover:bg-green-500 hover:text-white': this.type === 'success' && this.outlined,
        'bg-transparent border border-solid border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white': this.type === 'info' && this.outlined,
        'bg-transparent border border-solid border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white': this.type === 'warning' && this.outlined,
        'bg-transparent border border-solid border-red-500 text-red-500 hover:bg-red-500 hover:text-white': this.type === 'danger' && this.outlined,
        'bg-transparent border border-solid border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white': this.type === 'purple' && this.outlined,
        'bg-transparent border border-solid border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white': this.type === 'pink' && this.outlined,
        'rounded': !this.rounded && !this.noRounded,
        'rounded-full': this.rounded && !this.noRounded,
        'uppercase': this.uppercased,
        'shadow': this.shadowed,
        'hover:shadow-md': this.shadowed && this.size === 'small',
        'hover:shadow-lg': this.shadowed && this.size === 'medium',
        'hover:shadow-lg': this.shadowed && this.size === 'large',
        'text-xs px-4 py-1 h-8': this.size === 'small',
        'text-sm px-6 py-2 h-10': this.size === 'medium',
        'text-base px-8 py-3 h-12': this.size === 'large',
        'mr-1 mb-1': !this.marginLess
      }
    }
  }
}
</script>

<style>

</style>