<template>
  <div class="inline-block rounded-full spinner" :class="[{...typeClass}, size, color]" role="status">
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
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    color: {
      type: String,
      default: 'primary',
      validator: (value) => ['normal', 'primary', 'secondary', 'success', 'warning', 'danger', 'pink', 'purple', 'light', 'dark'].includes(value)
    },
  },
  computed: {
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