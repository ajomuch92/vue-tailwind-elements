<template>
  <div class="stepper-wrapp">
    <ul class="stepper grid w-full m-auto relative" :class="[`grid-cols-${steps.length}`, {'overflow-x-scroll': isMobile}]">
      <hr class="w-full absolute top-1/2 transform -translate-y-1/2" />
      <li v-for="(step, key) in steps" :key="key" class="flex-auto">
        <div
          class="step-wrap flex cursor-pointer items-center no-underline"
          :class="{'justify-center': key > 0 && key < steps.length - 1, 'justify-end': key === steps.length - 1, 'active': key===currentValue, 'cursor-not-allowed opacity-70': step.disabled}"
          @click="clickHandler(key)"
        >
          <span class="px-2 py-1 bg-white flex items-center z-50">
            <span class="step mr-2 flex items-center justify-center rounded-full text-sm w-8 h-8" :class="{'active': key===currentValue, 'success': key < currentValue, 'cursor-not-allowed': step.disabled}">
              <slot name="icon" v-bind="{step, key}">
                {{ key + 1 }}
              </slot>
            </span>
            <span v-show="!isMobile" class="font-medium text-gray-500" :class="{'text-center text-xs': isMobile}">
              <slot name="label" v-bind="{step, key}">
                {{ step.label }}
              </slot>
            </span>
          </span>
        </div>
      </li>
    </ul>
    <div class="relative w-full overflow-hidden">
      <slide-transition v-for="index in steps.length" :key="index" :index="currentValue" single>
        <div v-show="(index-1)===currentValue" class="step-content relative float-left w-full" role="tabpanel">
          <slot :name="`step-${index}`" />
        </div>
      </slide-transition>
    </div>
  </div>
</template>

<script>
import slideTransition from './transition/slideTransition.vue';
import { sizeMixin } from './mixins';

export default {
  name: 'teStepper',
  components: { slideTransition },
  mixins: [sizeMixin],
  props: {
    steps: {
      type: Array,
      required: true,
      validator: (value) => value.length > 0 && value.length <= 12
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    currentValue: 0,
  }),
  created() {
    this.currentValue = this.value;
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },
    value(val) {
      this.currentValue = val;
    }
  },
  methods: {
    clickHandler(index) {
      if (!this.steps[index].disabled) {
        this.currentValue = index;
      }
    }
  }
}
</script>

<style scoped>
  .stepper, .step-wrap {
    height: 4rem;
  }

  .step {
    background-color: #ebedef;
  }

  .step.active {
    background-color: #e3ebf7;
  }

  .step-wrap:hover:not(.cursor-not-allowed), .step-wrap.active, .step-wrap.active > span {
    background-color: #f9f9f9;
  }

  .step.success:not(.cursor-not-allowed) {
    background-color: #d6fae4;
  }
  
  .step-wrap:hover:not(.cursor-not-allowed) > span {
    background-color: #f9f9f9 !important;
  }

  .step-content {
    display: block;
    margin-right: -100%;
    backface-visibility: hidden;
    min-height: inherit;
  }
</style>