<template>
  <div class="alert" :class="getClass">
    <slot name="default">
      {{text}}
    </slot>
  </div>
</template>

<script>
export default {
  name: 'teAlert',
  props: {
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'normal',
      validator: (value) => ['normal','primary', 'success', 'info', 'warning', 'danger'].includes(value)
    },
    solid: {
      type: Boolean,
      default: false,
    }
  },
  computed:{
    getClass() {
      return {
        [this.type]: true,
        'solid': this.solid,
      }
    }
  }
}
</script>

<style>
</style>