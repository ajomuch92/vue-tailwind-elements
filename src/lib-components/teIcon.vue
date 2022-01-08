<template>
  <i class="bi" :class="iconName" />
</template>

<script>
export default {
  name: 'teIcon',
  props: {
    name: {
      type: String,
      required: true,
    }
  },
  computed: {
    iconName() {
      let name = this.name;
      if (!name.includes('bi')) {
        name = `bi-${name}`
      }
      return name;
    }
  }
}
</script>

<style>

</style>