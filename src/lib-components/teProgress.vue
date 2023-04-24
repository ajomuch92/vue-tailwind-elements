<template>
  <div class="w-full bg-gray-200 mb-6" :class="sizeClass">
    <div class="progress" :class="[type, size]" :style="widthStyle">
      {{showValue && size==='large' && value>0? `${value}%`: ''}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'teProgress',
  props: {
    value: {
      type: Number,
      required: true
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    showValue: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'success', 'warning', 'danger'].includes(value)
    }
  },
  computed: {
    widthStyle() {
      return {
        width: `${this.value}%`
      }
    },
  }
}
</script>
