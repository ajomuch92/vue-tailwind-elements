<template>
  <li class="nav-item p-2">
    <a class="nav-link p-0" :class="activeClass" :href="href">
      <slot name="default" />
    </a>
  </li>
</template>

<script>
export default {
  name: 'teNavbarItem',
  props: {
    href: {
      type: String,
      default: '#'
    },
    dark: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    activeClass() {
      return {
        'text-gray-500 hover:text-gray-700 focus:text-gray-700': !this.dark,
        'text-white opacity-60 hover:opacity-80 focus:opacity-80': this.dark
      }
    }
  }
}
</script>

<style>

</style>