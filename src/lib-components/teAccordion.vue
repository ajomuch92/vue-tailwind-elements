<template>
  <div class="accordion" :class="{'accordion-flush': flush }">
    <div 
      v-for="(item, key) in items"
      :key="key" 
      class="accordion-item bg-white border border-gray-200"
      :class="{
        'border-l-0 border-r-0 rounded-none': flush,
        'border-t-0': flush && key === 0,
        'border-b-0': flush && key === items.length - 1,
      }"
    >
      <h2 class="accordion-header mb-0">
        <button
          class="
            accordion-button
            relative
            flex
            items-center
            w-full
            py-4
            px-5
            text-base text-gray-800 text-left
            bg-white
            border-0
            rounded-none
            transition
            focus:outline-none
          "
          :class="{'collapsed': !itemsOpened.includes(key)}"
          type="button"
          @click="toggle(key)"
        >
          <slot v-bind:title="item" :name="`header-${key+1}`">
            {{item}}
          </slot>
        </button>
      </h2>
      <div
        :ref="`collapse-${key}`"
        :id="`collapse-${key}`"
        class="accordion-collapse"
        :class="{'border-0': flush}"
      >
        <div class="accordion-body py-4 px-5">
          <slot :name="`content-${key+1}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'teAccordion',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    flush: {
      type: Boolean,
      default: false,
    }
  },
  data: () => ({
    itemsOpened: [],
  }),
  methods: {
    toggle(key) {
      const ref = this.$refs[`collapse-${key}`][0]
      if (!this.itemsOpened.includes(key)) {
        ref.style.maxHeight = `${ref.scrollHeight}px`
        this.itemsOpened.push(key);
      } else {
        ref.style.maxHeight = null;
        const index = this.itemsOpened.indexOf(key)
        this.itemsOpened.splice(index, 1);
      }
    },
  }
}
</script>

<style scoped>
  .accordion-collapse {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }
</style>