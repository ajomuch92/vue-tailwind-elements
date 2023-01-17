<template>
  <div class="overflow-hidden" :class="{'shadow-md rounded-md': !shadowless}" :style="getWidth">
    <div v-if="hasHeader" class="py-3 px-6 border-b border-gray-300 text-center">
      <slot name="header" />
    </div>
    <img
      v-if="imgSrc"
      :src="imgSrc"
      class="mb-4"
      :class="{'rounded-lg shadow-xl': shadowless}"
    />
    <div class="p-5">
      <h5 v-if="title" class="text-xl font-semibold mb-2">
        <slot name="title">{{ title }}</slot>
      </h5>
      <slot name="default"></slot>
    </div>
    <div v-if="hasFooter" class="py-3 px-6 border-t border-gray-300 text-gray-600 text-center">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'teCard',
  props: {
    imgSrc: {
      type: String,
      default: '',
    },
    width: {
      type: [String, Number],
      default: '350px',
    },
    hasHeader: {
      type: Boolean,
      default: false
    },
    hasFooter: {
      type: Boolean,
      default: false
    },
    shadowless: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    getWidth() {
      return {
        width: this.width
      }
    }
  }
}
</script>

<style>

</style>