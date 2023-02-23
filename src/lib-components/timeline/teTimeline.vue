<template>
  <ol class="border-l" :class="[colorClass, {'md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t': horizontal}]">
    <slot name="default" />
  </ol>
</template>

<script>
export default {
  name: 'teTimeline',
  props: {
    horizontal: {
      type: Boolean,
      default: false,
    },
    inverted: {
      type: Boolean,
      default: false,
    },
    colorClass: {
      type: String,
      default: 'border-gray-300',
    }
  }
}
</script>

<style scoped>
</style>