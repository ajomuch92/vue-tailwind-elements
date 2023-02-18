<template>
  <transition>
    <div v-show="isVisible" class="carousel-item relative float-left w-full">
      <img
        v-if="imgUrl"
        :src="imgUrl"
        class="block w-full"
        :alt="alt"
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">{{ title }}</h5>
        <slot name="default" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'TeCarouselItem',
  props: {
    imgUrl: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    }
  },
  data: () => ({
    transition: '',
    isMounted: false,
  }),
  mounted() {
    this.isMounted = true;
  },
  computed: {
    steps() {
      return this.$parent.$slots.default.length;
    },
    position() {
      if (this.isMounted) {
        const children = this.$parent.$slots.default.map((r) => r.child);
        return children.indexOf(this);
      }
      return -1;
    },
    isVisible() {
      return this.$parent.currentStep === this.position;
    }
  },
}
</script>

<style scoped>
  .carousel-item {
    display: block;
  }
</style>