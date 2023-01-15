<template>
  <div class="
    my-3
    text-sm text-left
    h-12
    flex
    items-center
    p-4
    rounded-md
  "
    :class="getClass"
  >
    <slot name="default">
      {{text}}
    </slot>
  </div>
</template>

<script>
export default {
  name: 'teAlert',
  props: {
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'normal',
      validator: (value) => ['normal','primary', 'success', 'info', 'warning', 'danger'].includes(value)
    },
    solid: {
      type: Boolean,
      default: false,
    }
  },
  computed:{
    getClass() {
      return {
        'text-gray-600 bg-opacity-10 bg-gray-500 border border-gray-400': this.type === 'normal' && !this.solid,
        'text-purple-600 bg-opacity-10 bg-purple-500 border border-purple-400': this.type === 'primary' && !this.solid,
        'text-indigo-600 bg-opacity-10 bg-indigo-500 border border-indigo-400': this.type === 'success' && !this.solid,
        'text-blue-600 bg-opacity-10 bg-blue-500 border border-blue-400': this.type === 'info' && !this.solid,
        'text-yellow-600 bg-opacity-10 bg-yellow-500 border border-yellow-400': this.type === 'warning' && !this.solid,
        'text-red-600 bg-opacity-10 bg-red-500 border border-red-400': this.type === 'danger' && !this.solid,
        'bg-gray-500 text-white': this.type === 'normal' && this.solid,
        'bg-purple-500 text-white': this.type === 'primary' && this.solid,
        'bg-indigo-500 text-white': this.type === 'success' && this.solid,
        'bg-blue-500 text-white': this.type === 'info' && this.solid,
        'bg-yellow-500 text-white': this.type === 'warning' && this.solid,
        'bg-red-500 text-white': this.type === 'danger' && this.solid,
      }
    }
  }
}
</script>

<style>

</style>