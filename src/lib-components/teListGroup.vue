<template>
  <ul class="bg-white rounded-lg w-96 text-gray-900" :class="{'border border-gray-200': !flush}">
    <li 
      v-for="(item, key) in items"
      :key="key" 
      class="px-6 py-2 w-full"
      :class="{
        'rounded-t-lg': key===0,
        'rounded-b-lg': key===items.length-1,
        'bg-blue-600 text-white': key===currentActiveItem,
        'text-gray-400 pointer-events-none': item.disabled,
        'cursor-pointer': clickable,
        'hover:bg-gray-100': clickable && key!==currentActiveItem,
        'border-b border-gray-200': key<items.length-1
      }"
      @click="clickHandler(key)"
    >
      {{item.label||item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'teListGroup',
  props: {
    items: {
      type: Array,
      required: true,
    },
    clickable: {
      type: Boolean,
      default: true,
    },
    activeItem: {
      type: Number,
      default: null,
    },
    flush: {
      type: Boolean,
      default: false,
    }
  },
  data: () => ({
    currentActiveItem: null
  }),
  created() {
    this.currentActiveItem = this.activeItem
  },
  watch: {
    currentActiveItem(val) {
      this.$emit('update:activeItem', val);
    },
    activeItem(val) {
      this.currentActiveItem = val;
    }
  },
  methods: {
    clickHandler(index) {
      if(this.clickable) {
        this.currentActiveItem = index;
      }
    }
  }
}
</script>

<style>

</style>