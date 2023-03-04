<template>
  <button
    ref="button"
    class="btn"
    :class="getClass"
    :disabled="disabled"
    :type="buttonType"
    @click="clickHandler"
  >
    <te-spinner  v-if="loading" :color="type=='light'? 'primary': 'light'" class="mx-1 align-sub" size="small"/>
    <slot name="default" />
    <span v-if="showRipple&&ripple" class="ripple" :style="styleRipple"/>
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
      validator: (value) => ['normal', 'primary', 'secondary', 'success', 'warning', 'danger', 'pink', 'purple', 'light', 'dark'].includes(value)
    },
    buttonType: {
      type: String,
      default: 'button',
      validator: (value) => ['button','reset', 'submit'].includes(value)
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
    icon: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getClass() {
      const sizes = {
        small: 'md',
        medium: 'lg',
        large: 'lg'
      };
      return {
        [this.type]: true,
        [this.size]: true,
        'only-text': this.onlyText && !this.outlined,
        'outlined': this.outlined,
        'rounded': !this.rounded && !this.noRounded,
        'rounded-full': this.rounded && !this.noRounded,
        'uppercase': this.uppercased,
        'shadow': this.shadowed,
        [`hover:shadow-${sizes[this.size]}`]: this.shadowed,
        'cursor-not-allowed opacity-50': this.disabled,
        'opacity-50 cursor-not-allowed': this.loading,
        'relative overflow-hidden': this.ripple,
        'icon': this.icon,
      }
    }
  },
  data: () => ({
    showRipple: false,
    styleRipple: {},
    ripples: [],
  }),
  methods: {
    clickHandler(event) {
      if (this.ripple) {
        this.setRipple(event);
      }
      this.$emit('click', event);
    },
    setRipple(event) {
      const button = this.$refs.button;
      const style = {};
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      style.width = style.height = `${diameter}px`;
      style.left = `${event.offsetX - radius}px`;
      style.top = `${event.offsetY - radius}px`;
      this.styleRipple = style;
      this.showRipple = true;
      setTimeout(() => {
        this.showRipple = false;
      }, 700)
    }
  }
}
</script>

<style scoped>
  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
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