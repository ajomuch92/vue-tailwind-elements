<template>
  <li>
    <button
      class="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        hover:bg-gray-100
        outline-none
      "
      :class="{'pointer-events-none text-gray-400': disabled, 'text-gray-700': !disabled}"
      @click="$emit('click', $event)"
    >
      <slot name="default"/>
    </button>
  </li>
</template>

<script>
export default {
  name: 'teDropdownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style>

</style>