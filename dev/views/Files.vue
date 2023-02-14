<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">File Input</h1>
    <h1 class="text-lg my-1">Normal</h1>
    <te-file v-model="file" accept="image/*" :disabled="false" />
    <p>Value {{file}}</p>
    <code-view :code="code[0]" />
    <h1 class="text-lg my-1">Multiple</h1>
    <te-file v-model="files" accept="image/*" multiple />
    <p>Value {{files}}</p>
    <code-view :code="code[1]" />
    <h1 class="text-lg my-1">Sizes</h1>
    <te-file class="my-1" size="small" />
    <te-file class="my-1" size="medium" />
    <te-file class="my-1" size="large" />
    <code-view :code="code[2]" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue'
export default {
  components: { CodeView },
  name: 'Files',
  data: () => ({
    file: '',
    files: [],
    code: [
      `<te-file v-model="file" accept="image/*" :disabled="false" />`,
      `<te-file v-model="files" accept="image/*" multiple />`,
      `
      <te-file size="small" />
      <te-file size="medium" />
      <te-file size="large" />
      `,
    ]
  })
}
</script>

<style>

</style>