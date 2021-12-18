<template>
  <nav class="rounded-md w-full">
    <ol class="list-reset flex">
      <template v-for="(option, key) in options">
        <li :key="key" v-if="key<options.length-1">
          <a :href="option.href" class="text-blue-600 hover:text-blue-700">{{option.label}}</a>
        </li>
        <li v-else :key="key" class="text-gray-500">{{option.label}}</li>
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
      default: '/'
    }
  }
}
</script>

<style>

</style>