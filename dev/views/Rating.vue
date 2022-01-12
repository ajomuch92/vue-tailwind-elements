<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Rating</h1>
    <p>For the name of the icons, for a better behavior please use the filled icons. For the colors, use a normal color string or hexadecimal string.</p>
    <h1 class="text-lg my-1">Normal</h1>
    <te-rating v-model="value" :quantity="10" :spacing="2" :has-half-values="true" />
    <p>Value {{value}}</p>
    <te-rating icon="heart-fill" color="red" :quantity="5" :spacing="1" :has-half-values="false" />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-rating v-model="value" :quantity="10" :spacing="2" :has-half-values="true" />
          <te-rating icon="heart-fill" color="red" :quantity="5" :spacing="1" :has-half-values="false" />
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Clearable</h1>
    <te-rating v-model="value2" icon="circle-fill" color="#ff3399" :quantity="6" clearable :has-half-values="true" />
    <p>Value {{value2}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-rating v-model="value2" icon="circle-fill" color="green" :quantity="6" clearable :has-half-values="true" />
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Disabled</h1>
    <te-rating :value="1" icon="chat-fill" :quantity="5" disabled :has-half-values="true" />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-rating :value="1" icon="chat-fill" :quantity="5" disabled :has-half-values="true" />
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  data: () => ({
    value: 0,
    value2: 0,
  })
}
</script>

<style>

</style>