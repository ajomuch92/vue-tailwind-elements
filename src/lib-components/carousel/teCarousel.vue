<template>
  <div :id="id" class="carousel slide relative" :class="{'carousel-dark': dark, 'carousel-fade': fade}" data-bs-ride="carousel">
    <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
      <button
        v-for="step in steps"
        :key="step"
        type="button"
        :class="{'active': step-1===activeStep}"
        :data-bs-slide-to="step"
        :data-bs-target="`#${id}`"
        aria-current="true"
        :aria-label="`Slide ${step}`"
        @click="currentStep=step-1"
      />
    </div>
    <div class="carousel-inner relative w-full overflow-hidden">
      <slot name="default" />
    </div>
    <template v-if="showArrows&&steps>1">
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-slide="prev"
        @click="moveBack"
      >
        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-slide="next"
        @click="moveFormard"
      >
        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </template>
  </div>
</template>

<script>

export default {
  name: 'TeCarousel',
  props: {
    id: {
      type: String,
      default: () => crypto.randomUUID(),
    },
    showIndicators: {
      type: Boolean,
      default: true,
    },
    showArrows: {
      type: Boolean,
      default: true,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    fade: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Number,
      default: 0,
    },
    loop: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    currentStep: 0,
    steps: 0,
    direction: ''
  }),
  mounted() {
    this.steps = this.$slots.default.length;
  },
  computed :{
    activeStep() {
      return Math.abs(this.currentStep) % this.steps;
    }
  },
  watch: {
    currentStep(val) {
      this.$emit('input', val);
    },
    value(val) {
      this.currentStep = val;
    },
  },
  methods: {
    moveFormard() {
      this.direction = 'next';
      this.currentStep = (this.currentStep + 1) % this.steps;
    },
    moveBack() {
      this.direction = 'prev';
      const prevStep = this.currentStep - 1;
      this.currentStep = prevStep < 0 ? this.steps - 1 : prevStep;
    },
  }
}
</script>

<style scoped>

</style>