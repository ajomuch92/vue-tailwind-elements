<template>
  <div class="backdrop absolute top-0 left-0 flex flex-col justify-center items-center h-screen w-full">
    <te-spinner :type="type" :size="size" :color="color"/>
    <label>{{text}}</label>
  </div>
</template>

<script>
import teSpinner from './teSpinner.vue';

export default {
  name: 'teLoading',
  components: { teSpinner },
  props: {
    type: {
      type: String,
      default: 'normal',
      validator: (value) => ['normal', 'growing'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium','large'].includes(value)
    },
    color: {
      type: String,
      default: 'primary',
      validator: (value) => ['normal','primary', 'secondary', 'success', 'warning', 'danger', 'pink', 'purple', 'light', 'dark'].includes(value)
    },
    text: {
      type: String,
    }
  },
  methods: {
    close() {
      setTimeout(() => {
        this.$destroy();
        this.$el.parentNode.removeChild(this.$el);
      }, 500)
    }
  }
}
</script>

<style scoped>
  .backdrop {
    background-color: rgba(0, 0, 0, 0.25);
  }
</style>