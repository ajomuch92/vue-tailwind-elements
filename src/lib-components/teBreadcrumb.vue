<template>
  <nav class="rounded-md w-full">
    <ol class="list-reset flex">
      <template v-for="(option, key) in options">
        <li :key="key" v-if="key<options.length-1">
          <component :is="linkTag" v-bind="getBindValues(option)" class="text-blue-600 hover:text-blue-700">{{option.label}}</component>
        </li>
        <li v-else :key="`${key}-e`" class="text-gray-500">{{option.label}}</li>
        <li v-if="key<options.length-1" :key="key"><span class="text-gray-500 mx-2">{{separator}}</span></li>
      </template>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'teBreadcrumb',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    separator: {
      type: String,
      default: '/',
      validator: (val) => ['/', '\\', '>'].includes(val),
    },
    linkTag: {
      type: String,
      default: 'a',
      validator: (val) => ['a', 'router-link'].includes(val),
    }
  },
  methods: {
    getBindValues(option) {
      if (this.linkTag === 'a') {
        return { href: option.href };
      }
      return { to: option.to };
    }
  }
}
</script>

<style>

</style>