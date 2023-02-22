<template>
  <div class="m-3 inline-flex relative w-fit">
    <div class="
      absolute
      inline-block
      rotate-0
      skew-x-0
      skew-y-0
      scale-x-100
      scale-y-100
      text-xs
      leading-none
      text-center
      whitespace-nowrap
      align-baseline
      font-bold
      rounded-full
      z-10"
      :class="{...colorClass, ...positionClass, 'py-1 px-2.5': !!text, 'p-2.5': !text}"
      v-show="!hide"
    >
      {{text}}
    </div>
    <slot name="default" />
  </div>
</template>

<script>
export default {
  name: 'teNotification',
  props: {
    text: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: 'top-right',
      validator: (value) => ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(value)
    },
    color: {
      type: String,
      default: 'primary',
      validator: (value) => ['normal', 'primary', 'secondary', 'success', 'warning', 'danger', 'pink', 'purple', 'light', 'dark'].includes(value)
    },
    hide: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    colorClass() {
      return {
        'bg-gray-500 text-white': this.color === 'normal',
        'bg-indigo-500 text-white': this.color === 'secondary',
        'bg-green-500 text-white': this.color === 'success',
        'bg-blue-500 text-white': this.color === 'primary',
        'bg-yellow-500 text-white': this.color === 'warning',
        'bg-red-500 text-white': this.color === 'danger',
        'bg-purple-500 text-white': this.color === 'purple',
        'bg-pink-500 text-white': this.color === 'pink',
        'bg-gray-800 text-white': this.color === 'dark',
        'bg-gray-200 text-black': this.color === 'light',
      }
    },
    positionClass() {
      return {
        '-top-2 right-auto bottom-auto -left-2 -translate-x-2/4 -translate-y-1/2': this.position === 'top-left',
        // 'top-0 right-auto bottom-auto left-1/2 -translate-x-1/2 -translate-y-1/2 ': this.position === 'top-center',
        '-top-2 -right-2 bottom-auto left-auto translate-x-1/2 -translate-y-1/2': this.position === 'top-right',
        // 'top-1/2 right-auto bottom-auto -left-2 -translate-x-1/2 -translate-y-1/2': this.position === 'center-left',
        // 'top-1/2 right-auto bottom-auto left-1/2 -translate-x-1/2 -translate-y-1/2': this.position === 'center',
        // 'top-1/2 -right-2 bottom-auto left-auto translate-x-1/2 -translate-y-1/2': this.position === 'center-right',
        'top-auto right-auto -bottom-1 -left-2 -translate-x-1/2 translate-y-1/2': this.position === 'bottom-left',
        // 'right-auto -bottom-1 left-1/2 -translate-x-1/2 translate-y-1/2': this.position === 'bottom-center',
        'top-auto -right-2 -bottom-1 left-auto translate-x-1/2 translate-y-1/2': this.position === 'bottom-right',
      }
    }
  }
}
</script>

<style scoped>
  .w-fit {
    width: -moz-fit-content;
    width: fit-content;
  }
</style>