<template>
  <div class="container p-6">
    <h1 class="text-3xl my-2">Select controls</h1>
    <h1 class="text-lg">Textarea</h1>
    <te-textarea v-model="textAreaValue" placeholder="Write your text" :rows="4" :disabled="false"/>
    <p>Value: {{textAreaValue}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-textarea v-model="textAreaValue" placeholder="Write your text" :rows="4" :disabled="false"/>
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data: () => ({
    textAreaValue: '',
  }),
}
</script>

<style>

</style>