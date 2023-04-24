<template>
  <div class="notification-wrapper">
    <div class="notification" :class="[color, position,{'py-1 px-2.5': !!text, 'p-2.5': !text }]" v-show="!hide">
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
    positionClass() {
      return {
        '-top-2 right-auto bottom-auto -left-2 -translate-x-1/2 -translate-y-1/2': this.position === 'top-left',
        '-top-2 -right-2 bottom-auto left-auto translate-x-1/2 -translate-y-1/2': this.position === 'top-right',
        'top-auto right-auto -bottom-1 -left-2 -translate-x-1/2 translate-y-1/2': this.position === 'bottom-left',
        'top-auto -right-2 -bottom-1 left-auto translate-x-1/2 translate-y-1/2': this.position === 'bottom-right',
      }
    }
  }
}
</script>
