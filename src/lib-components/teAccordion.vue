<template>
  <div class="accordion-container">
    <div
      class="
        text-xl
        font-medium
        bg-white
        duration-300
        p-3
        rounded-lg
        flex
        justify-between
        cursor-pointer
        items-center
      "
      :class="{'bg-gray-100 bg-opacity-50': open, 'hover:bg-gray-100 hover:bg-opacity-50': !open}"
      role="alert"
      @click="open=!open"
    >
      <slot name="title">
        {{title}}
      </slot>
      <span>
        <slot name="icon" v-bind:open="open"/>
      </span>
    </div>
    <transition name="apear">
      <div v-show="open" class="bg-gray-100 bg-opacity-50 p-3 pt-1 rounded-b-lg">
        <slot name="default">
          {{content}}
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'teAccordion',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    open: true,
  })
}
</script>

<style scoped>
  .apear-enter-active {
    animation: apear .25s;
  }
  .apear-leave-active {
    animation: apear .25s reverse;
  }
  @keyframes apear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>