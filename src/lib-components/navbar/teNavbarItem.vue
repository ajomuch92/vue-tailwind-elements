<template>
  <li class="nav-item p-2">
    <component :is="tag" class="nav-link p-0" :class="activeClass" v-bind="bindProps">
      <slot name="default" />
    </component>
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
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'a',
      validator: (val) => ['a', 'router-link', 'nuxt-link'].includes(val),
    }
  },
  computed: {
    activeClass() {
      return {
        'text-gray-500 hover:text-gray-700 focus:text-gray-700': !this.dark,
        'text-white opacity-60 hover:opacity-80 focus:opacity-80': this.dark,
        'disabled cursor-not-allowed': this.disabled,
      }
    },
    bindProps() {
      return { [this.tag === 'a' ? 'href' : 'to']: this.href }
    }
  }
}
</script>

<style>

</style>