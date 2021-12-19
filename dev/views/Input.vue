<template>
  <div class="container p-6">
    <h1 class="text-3xl my-2">Text components</h1>
    <h1 class="text-lg my-2">Textarea</h1>
    <te-textarea v-model="textAreaValue" placeholder="Write your text" :rows="4" :disabled="false"/>
    <p>Value: {{textAreaValue}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-textarea v-model="textAreaValue" placeholder="Write your text" :rows="4" :disabled="false"/>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-2">Input</h1>
    <te-input v-model="inputValue" class="my-1" :disabled="false" placeholder="Write a text"/>
    <te-input type="number" class="my-1" size="small" placeholder="Write a number"/>
    <te-input type="emal" class="my-1" size="large" placeholder="Write an email"/>
    <p>Value: {{inputValue}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-input v-model="inputValue" :disabled="false" placeholder="Write a text"/>
          <te-input type="number" size="small" placeholder="Write a number"/>
          <te-input type="emal" size="large" placeholder="Write an email"/>
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
    inputValue: '',
  }),
}
</script>

<style>

</style>