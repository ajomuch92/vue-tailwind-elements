<template>
  <div class="flex items-center justify-center my-1">
    <te-button
      v-for="n in quantity"
      :key="n"
      :type="type"
      :size="size"
      :outlined="outlined"
      no-rounded
      :class="{'rounded-l': n===1, 'rounded-r': n===quantity}"
      :disabled="disabled[n-1]||false"
      @click="$emit('click', {index: n, event: $event})"
    >
      <slot :name="`button-${n}`" v-bind:index="n" />
    </te-button>
  </div>
</template>

<script>
import teButton from './teButton.vue';

export default {
  name: 'teButtonGroup',
  components: { teButton },
  props: {
    quantity: {
      type: Number,
      default: 1,
    },
    type: {
      type: String,
      default: 'primary',
      validator: (value) => ['normal', 'primary', 'success', 'info', 'warning', 'danger', 'pink', 'purple'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium','large'].includes(value)
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Array,
      default: () => []
    },
  }
}
</script>

<style>

</style>