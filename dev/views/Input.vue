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
    <te-input type="number" class="my-1" size="small" placeholder="Write a number"/>
    <te-input v-model="inputValue" class="my-1" :disabled="false" placeholder="Write a text"/>
    <te-input type="email" class="my-1" size="large" placeholder="Write an email"/>
    <p>Value: {{inputValue}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-input type="number" size="small" placeholder="Write a number"/>
          <te-input v-model="inputValue" :disabled="false" placeholder="Write a text"/>
          <te-input type="email" size="large" placeholder="Write an email"/>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-2">Helper text</h1>
    <te-input type="password" class="my-1" size="medium" placeholder="Password" helper-text="Min 9 characters" />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-input type="password" class="my-1" size="medium" placeholder="Password" helper-text="Min 9 characters" />
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-2">Invalid</h1>
    <te-input type="password" class="my-1" size="medium" placeholder="Password" helper-text="Min 9 characters" invalid />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-input type="password" class="my-1" size="medium" placeholder="Password" helper-text="Min 9 characters" invalid />
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-2">Floating</h1>
    <p>When floating is applied, size are not available</p>
    <te-input type="password" class="my-1" placeholder="Password" floating helper-text="Min 9 characters" />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-input type="password" class="my-1" placeholder="Password" floating helper-text="Min 9 characters" />
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