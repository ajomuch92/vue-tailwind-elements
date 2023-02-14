<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Alerts</h1>
    <h1 class="text-lg">Default</h1>
    <code-view :code="code" />
    <te-alert text="Hello world" />
    <h1 class="text-lg">Variants</h1>
    <code-view :code="code2" />
    <te-alert text="Default" />
    <te-alert text="Primary" type="primary" />
    <te-alert text="Success" type="success" />
    <te-alert text="Info" type="info" />
    <te-alert text="Warning" type="warning" />
    <te-alert text="Danger" type="danger" />
    <h1 class="text-lg">Solid</h1>
    <code-view :code="code3" />
    <te-alert text="Default" solid />
    <te-alert text="Primary" type="primary" solid />
    <te-alert text="Success" type="success" solid />
    <te-alert text="Info" type="info" solid />
    <te-alert text="Warning" type="warning" solid />
    <te-alert text="Danger" type="danger" solid />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';

export default {
  name: 'Alert',
  components: { CodeView },
  data: () => ({
    code: '<te-alert text="Hello world" />',
    code2: `
      <te-alert text="Default" />
      <te-alert text="Primary" type="primary" />
      <te-alert text="Success" type="success" />
      <te-alert text="Info" type="info" />
      <te-alert text="Warning" type="warning" />
      <te-alert text="Danger" type="danger" />
    `,
    code3: `
      <te-alert text="Default" solid />
      <te-alert text="Primary" type="primary" solid />
      <te-alert text="Success" type="success" solid />
      <te-alert text="Info" type="info" solid />
      <te-alert text="Warning" type="warning" solid />
      <te-alert text="Danger" type="danger" solid />
    `
  })
}
</script>

<style>

</style>