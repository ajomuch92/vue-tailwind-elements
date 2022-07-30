<template>
  <section class="bg-white">
    <h1>{{title}}</h1>
    <te-button @click="$emit('custom', $event)">Emit Event</te-button>
    <te-button @click="$parent.close()">Close</te-button>
  </section>
</template>

<script>
export default {
  name: 'ModalTest',
  props: {
    title: [String]
  },
}
</script>

<style>

</style>