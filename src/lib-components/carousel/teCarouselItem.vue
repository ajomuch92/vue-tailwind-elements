<template>
  <transition :name="transition">
    <div v-show="isVisible" class="carousel-item block relative float-left w-full">
      <img
        v-if="imgUrl"
        :src="imgUrl"
        class="block w-full"
        :alt="alt"
      />
      <div class="carousel-caption hidden md:block absolute text-center" :class="{'left-1/2 top-1/2 width-full transform -translate-x-1/2 -translate-y-1/2 h-max': center}">
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
    position() {
      if (this.isMounted) {
        const children = this.$parent.$slots.default.map((r) => r.child);
        return children.indexOf(this);
      }
      return -1;
    },
    isVisible() {
      this.transition = this.$parent.fade ? 'fade' : this.$parent.direction;
      return this.$parent.currentStep === this.position;
    },
    center() {
      return this.$parent.center;
    },
  },
}
</script>

<style scoped>

  .h-max {
    height: max-content;
  }
  .carousel-item-wrapper {
    display: block;
    margin-right: -100%;
    backface-visibility: hidden;
    -webkit-transition: transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out;
  }

  .prev-enter-active,
  .prev-leave-active,
  .next-enter-active,
  .next-leave-active {
    transition: transform 0.6s ease-in-out;
  }
  .prev-enter, .next-leave-to {
    transform: translateX(-100%);
  }
  .prev-leave-to, .next-enter {
    transform: translateX(100%);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>