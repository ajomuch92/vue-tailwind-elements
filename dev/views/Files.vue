<template>
  <div class="container p-6">
    <h1 class="text-3xl my-2">File Input</h1>
    <h1 class="text-lg my-1">Normal</h1>
    <te-file v-model="file" accept="image/*" :disabled="false" />
    <p>Value {{file}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-file v-model="file" accept="image/*" :disabled="false" />
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Multiple</h1>
    <te-file v-model="files" accept="image/*" multiple />
    <p>Value {{files}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-file v-model="files" accept="image/*" multiple />
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Sizes</h1>
    <te-file class="my-1" size="small" />
    <te-file class="my-1" size="medium" />
    <te-file class="my-1" size="large" />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-file size="small" />
          <te-file size="medium" />
          <te-file size="large" />
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Files',
  data: () => ({
    file: '',
    files: [],
  })
}
</script>

<style>

</style>