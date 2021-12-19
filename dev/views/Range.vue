<template>
  <div class="container p-6">
    <h1 class="text-3xl my-2">Range</h1>
    <te-range v-model="value" :max="100" :step="2" :disabled="false"/>
    <p>Value {{value}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-range v-model="value" :max="100" :step="2" :disabled="false"/>
        </script>
      </code>
    </pre>
    <h1 class="text-3xl my-2">Progress</h1>
    <h1 class="text-lg mt-1">Sizes</h1>
    <te-progress :value="value" size="small" />
    <te-progress :value="value" size="medium" />
    <te-progress :value="value" size="large" />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-progress :value="value" size="small" />
          <te-progress :value="value" size="medium" />
          <te-progress :value="value" size="large" />
        </script>
      </code>
    </pre>
    <h1 class="text-lg mt-1">Colors</h1>
    <te-progress :value="value" size="medium" type="primary"/>
    <te-progress :value="value" size="medium" type="success"/>
    <te-progress :value="value" size="medium" type="warning"/>
    <te-progress :value="value" size="medium" type="danger"/>
    <h1 class="text-lg mt-1">Show Value</h1>
    <p>Only showing the value when size is large and show value prop is true</p>
    <te-progress :value="value" size="large" show-value type="primary"/>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-progress :value="value" size="large" show-value type="primary"/>
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Range',
  data: () => ({
    value: 0,
  }),
}
</script>

<style>

</style>