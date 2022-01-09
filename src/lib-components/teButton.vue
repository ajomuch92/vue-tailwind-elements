<template>
  <button
    class="
        font-bold
        outline-none
        focus:outline-none
        ease-linear
        transition-all
        duration-150
        align-middle
        disabled:opacity-75
      "
    :class="getClass"
    :disabled="disabled"
    type="button"
    @click="clickHandler"
  >
    <te-spinner  v-if="loading" :color="type=='light'? 'primary': 'light'" class="mx-1 align-sub" size="small"/>
    <slot name="default" />
    <span v-if="showRipple&&ripple" :key="showRipple?-1:1" class="ripple" :style="styleRipple"/>
  </button>
</template>

<script>
import teSpinner from './teSpinner.vue';

export default {
  name: 'teButton',
  components: { teSpinner },
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: (value) => ['normal','primary', 'secondary', 'success', 'warning', 'danger', 'pink', 'purple', 'light', 'dark'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium','large'].includes(value)
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    shadowed: {
      type: Boolean,
      default: false,
    },
    uppercased: {
      type: Boolean,
      default: false,
    },
    onlyText: {
      type: Boolean,
      default: false,
    },
    marginLess: {
      type: Boolean,
      default: false,
    },
    noRounded: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    ripple: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getClass() {
      return {
        'bg-gray-500 hover:bg-gray-700 active:bg-gray-500 text-white': this.type === 'normal' && !this.onlyText && !this.outlined,
        'bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-500 text-white': this.type === 'secondary' && !this.onlyText && !this.outlined,
        'bg-green-500 hover:bg-green-700 active:bg-green-500 text-white': this.type === 'success' && !this.onlyText && !this.outlined,
        'bg-blue-500 hover:bg-blue-700 active:bg-blue-500 text-white': this.type === 'primary' && !this.onlyText && !this.outlined,
        'bg-yellow-500 hover:bg-yellow-700 active:bg-yellow-500 text-white': this.type === 'warning' && !this.onlyText && !this.outlined,
        'bg-red-500 hover:bg-red-700 active:bg-red-500 text-white': this.type === 'danger' && !this.onlyText && !this.outlined,
        'bg-purple-500 hover:bg-purple-700 active:bg-purple-500 text-white': this.type === 'purple' && !this.onlyText && !this.outlined,
        'bg-pink-500 hover:bg-pink-700 active:bg-pink-500 text-white': this.type === 'pink' && !this.onlyText && !this.outlined,
        'bg-gray-800 hover:bg-gray-900 active:bg-gray-800 text-white': this.type === 'dark' && !this.onlyText && !this.outlined,
        'bg-gray-200 hover:bg-gray-300 active:bg-gray-300 text-black': this.type === 'light' && !this.onlyText && !this.outlined,
        'background-transparent text-gray-500': this.type === 'normal' && this.onlyText && !this.outlined,
        'background-transparent text-indigo-500': this.type === 'secondary' && this.onlyText && !this.outlined,
        'background-transparent text-green-500': this.type === 'success' && this.onlyText && !this.outlined,
        'background-transparent text-blue-500': this.type === 'primary' && this.onlyText && !this.outlined,
        'background-transparent text-yellow-500': this.type === 'warning' && this.onlyText && !this.outlined,
        'background-transparent text-red-500': this.type === 'danger' && this.onlyText && !this.outlined,
        'background-transparent text-purple-500': this.type === 'purple' && this.onlyText && !this.outlined,
        'background-transparent text-pink-500': this.type === 'pink' && this.onlyText && !this.outlined,
        'background-transparent text-gray-800': this.type === 'dark' && this.onlyText && !this.outlined,
        'background-transparent text-gray-200': this.type === 'light' && this.onlyText && !this.outlined,
        'bg-transparent border border-solid border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white': this.type === 'normal' && this.outlined,
        'bg-transparent border border-solid border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white': this.type === 'secondary' && this.outlined,
        'bg-transparent border border-solid border-green-500 text-green-500 hover:bg-green-500 hover:text-white': this.type === 'success' && this.outlined,
        'bg-transparent border border-solid border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white': this.type === 'primary' && this.outlined,
        'bg-transparent border border-solid border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white': this.type === 'warning' && this.outlined,
        'bg-transparent border border-solid border-red-500 text-red-500 hover:bg-red-500 hover:text-white': this.type === 'danger' && this.outlined,
        'bg-transparent border border-solid border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white': this.type === 'purple' && this.outlined,
        'bg-transparent border border-solid border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white': this.type === 'pink' && this.outlined,
        'bg-transparent border border-solid border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white': this.type === 'dark' && this.outlined,
        'bg-transparent border border-solid border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-black': this.type === 'light' && this.outlined,
        'rounded': !this.rounded && !this.noRounded,
        'rounded-full': this.rounded && !this.noRounded,
        'uppercase': this.uppercased,
        'shadow': this.shadowed,
        'hover:shadow-md': this.shadowed && this.size === 'small',
        'hover:shadow-lg': this.shadowed && this.size === 'medium',
        'hover:shadow-lg': this.shadowed && this.size === 'large',
        'text-xs px-4 py-1 h-8': this.size === 'small',
        'text-sm px-6 py-2 h-10': this.size === 'medium',
        'text-base px-8 py-3 h-12': this.size === 'large',
        'mr-1 mb-1': !this.marginLess,
        'cursor-not-allowed': this.disabled,
        'pointer-events-none cursor-not-allowed': this.loading,
        'relative overflow-hidden': this.ripple,
      }
    }
  },
  data: () => ({
    showRipple: false,
    styleRipple: {}
  }),
  methods: {
    clickHandler(event) {
      if (this.ripple) {
        this.setRipple(event);
      }
      this.$emit('click', event);
    },
    setRipple(event) {
      const button = event.currentTarget;
      const style = {};
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 3;
      style.width = style.height = `${diameter}px`;
      style.left = `${event.offsetX - radius}px`;
      style.top = `${event.offsetY - radius}px`;
      this.styleRipple = style;
      this.showRipple = true;
      setTimeout(() => {
        this.showRipple = false;
      }, 750)
    }
  }
}
</script>

<style scoped>
  button {
    transition: background 400ms;
  }

  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(1);
    animation: ripple-effect 800ms linear;
    background-color: rgba(255, 255, 255, 0.7);
  }

  @keyframes ripple-effect {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
</style>