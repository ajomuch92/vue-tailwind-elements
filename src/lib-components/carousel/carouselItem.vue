<template>
  <transition :name="transition" mode="in-out">
    <div
      v-show="isVisible"
      ref="slide"
      class="carousel-item-wrapper absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-50"
    >
      <img :src="imgUrl" />
      <div v-if="$slots.default" class="label absolute top-1">
        <slot name="default" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: {
    imgUrl: {
      type: String,
      required: true
    }
  },
  data: () => ({
    isMounted: false,
    transition: '',
  }),
  mounted() {
    this.isMounted = true;
  },
  computed: {
    index() {
      if (this.isMounted) {
        const children = this.$parent.$slots.default.map((r) => r.child);
        return children.indexOf(this);
      }
      return -1;
    },
    isVisible() {
      this.transition = this.$parent.direction === 'right' ? 'slide-out' : 'slide-in';
      return this.$parent.currentStep === this.index;
    },
  },
};
</script>

<style scoped>
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: transform 250ms linear;
}
.slide-in-enter, .slide-out-leave-to {
  transform: translateX(-100%);
}
.slide-in-leave-to, .slide-out-enter {
  transform: translateX(100%);
}
</style>
