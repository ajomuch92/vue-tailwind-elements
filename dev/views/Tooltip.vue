<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Tooltip</h1>
    <div class="flex justify-center">
      <te-tooltip :position="position" :arrow="arrow">
        <te-button>Hover me</te-button>
        <template #content>
          Tooltip content
        </template>
      </te-tooltip>
    </div>
    <div class="my-2">
      <label>Position</label>
      <te-radio v-model="position" v-for="(p, key) in positions" :key="key" :native-value="p"> {{ p }}</te-radio>
      <te-checkbox v-model="arrow">Arrow</te-checkbox>
    </div>
    <code-view :code="code[0]" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';

export default {
  name: 'Tooltip',
  components: { CodeView },
  data: () => ({
    positions: ['top', 'right', 'bottom', 'left'],
    position: 'top',
    arrow: true,
    code: [
      `
      <te-tooltip :position="position">
        <te-button>Hover me</te-button>
        <template #content>
          Tooltip content
        </template>
      </te-tooltip>
      `
    ]
  })
}
</script>

<style>

</style>