<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Breadcrumb</h1>
    <h1 class="text-lg">Default</h1>
    <te-breadcrumb :options="options" />
    <code-view :code="code" />
    <h1 class="text-lg">Custom Separator</h1>
    <te-breadcrumb :options="options" separator=">" />
    <code-view :code="code2" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue'
export default {
  components: { CodeView },
  name: 'Breadcrumb',
  data: () => ({
    options: [
      {
        href: '/',
        label: 'Index'
      },
      {
        href: '/breadcrumb',
        label: 'Breadcrumb'
      },
    ],
    code: `
      <te-breadcrumb :options="[
        {
          href: '/',
          label: 'Index'
        },
        {
          href: '/breadcrumb',
          label: 'Breadcrumb'
        },
      ]" />
    `,
    code2: `
      <te-breadcrumb :options="options" separator=">" />
    `,
  })
}
</script>

<style>

</style>