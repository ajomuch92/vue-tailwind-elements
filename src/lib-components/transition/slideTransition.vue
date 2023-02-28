<template>
  <transition-group v-if="!single" :name="transition">
    <slot name="default" />
  </transition-group>
  <transition v-else :name="transition">
    <slot name="default" />
  </transition>
</template>

<script>
export default {
  name: 'SlideTransition',
  props: {
    index: {
      type: Number,
      default: 0,
    },
    single: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    transition: '',
  }),
  watch: {
    index(newVal, oldVal) {
      if (this.vertical) {
        this.transition = newVal > oldVal ? 'down' : 'up';
      } else {
        this.transition = newVal > oldVal ? 'right' : 'left';
      }
    }
  }
}
</script>

<style scoped>
  .left-enter-active,
  .left-leave-active,
  .right-enter-active,
  .right-leave-active,
  .up-enter-active,
  .up-leave-active,
  .down-enter-active,
  .down-leave-active  {
    transition: transform 300ms ease-in-out;
  }
  .left-enter, .right-leave-to {
    transform: translateX(-100%);
  }
  .left-leave-to, .right-enter {
    transform: translateX(100%);
  }
  .up-enter, .down-leave-to {
    transform: translateY(-100%);
  }
  .up-leave-to, .down-enter {
    transform: translateY(100%);
  }
</style>