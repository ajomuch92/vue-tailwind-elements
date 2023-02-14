<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Range</h1>
    <te-range v-model="value" :max="100" :step="2" :disabled="false"/>
    <p>Value {{value}}</p>
    <code-view :code="code[0]" />
    <h1 class="text-3xl my-2">Progress</h1>
    <h1 class="text-lg mt-1">Sizes</h1>
    <te-progress :value="value" size="small" />
    <te-progress :value="value" size="medium" />
    <te-progress :value="value" size="large" />
    <code-view :code="code[1]" />
    <h1 class="text-lg mt-1">Colors</h1>
    <te-progress :value="value" size="medium" type="primary"/>
    <te-progress :value="value" size="medium" type="success"/>
    <te-progress :value="value" size="medium" type="warning"/>
    <te-progress :value="value" size="medium" type="danger"/>
    <h1 class="text-lg mt-1">Show Value</h1>
    <p>Only showing the value when size is large and show value prop is true</p>
    <te-progress :value="value" size="large" show-value type="primary"/>
    <code-view :code="code[2]" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';

export default {
  name: 'Range',
  components: { CodeView },
  data: () => ({
    value: 0,
    code: [
      `
      <te-range v-model="value" :max="100" :step="2" :disabled="false"/>
      `,
      `
      <te-progress :value="value" size="small" />
      <te-progress :value="value" size="medium" />
      <te-progress :value="value" size="large" />
      `,
      `
      <te-progress :value="value" size="large" show-value type="primary"/>
      `,
    ]
  }),
}
</script>

<style>

</style>