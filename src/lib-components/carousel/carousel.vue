<template>
  <div class="carousel-wrapper flex justify-center">
    <div class="carousel-inner relative overflow-hidden h-96 max-h-96 w-1/2">
      <!-- <carousel-indicators
        v-if="indicators"
        :total="slides.length"
        :current-index="currentSlide"
        @switch="switchSlide($event)"
      ></carousel-indicators> -->
      <slot name="default" />
      <button type="button" class="absolute bg-gray-600 opacity-50 hover:opacity-100 border-none h-8 w-8 text-white cursor-pointer left-0 top-1/2 transform -translate-y-1/2 rounded-full flex justify-center items-center z-50" title="Prev" @click="prev">
        <span class="carousel-control-prev-icon inline-block bg-no-repeat w-4 h-4" aria-hidden="true"></span>
      </button>
      <button type="button" class="absolute bg-gray-600 opacity-50 hover:opacity-100 border-none h-8 w-8 text-white cursor-pointer right-0 top-1/2 transform -translate-y-1/2 rounded-full flex justify-center items-center z-50" title="Next" @click="next">
        <span class="carousel-control-next-icon inline-block bg-no-repeat w-4 h-4" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    controls: {
      type: Boolean,
      default: false,
    },
    indicators: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: undefined,
    },
  },
  data: () => ({
    currentStep: 0,
    slideInterval: null,
    direction: 'right',
    steps: 0,
  }),
  mounted() {
    // this.startSlideTimer();
    this.steps = this.$slots.default.length;
  },
  beforeUnmount() {
    // this.stopSlideTimer();
  },
  methods: {
    setCurrentStep(index) {
      this.currentStep = index;
    },
    prev() {
      const index =
        this.currentStep > 0
          ? this.currentStep - 1
          : this.steps - 1;
      this.setCurrentStep(index);
      this.direction = "left";
    },
    next() {
      const index =
        this.currentStep < this.steps - 1
          ? this.currentStep + 1
          : 0;
      this.setCurrentStep(index);
      this.direction = "right";
    },
    startSlideTimer() {
      this.stopSlideTimer();
      this.slideInterval = setInterval(() => {
        this._next();
      }, this.interval);
    },
    stopSlideTimer() {
      clearInterval(this.slideInterval);
    },
    switchSlide(index) {
      const step = index - this.currentStep;
      if (step > 0) {
        this.next(step);
      } else {
        this.prev(step);
      }
    },
  },
}
</script>

<style>

</style>