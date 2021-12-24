<template>
  <div class="container p-6">
    <h1 class="text-3xl my-2">Toast</h1>
    <h1 class="text-lg my-1">Normal</h1>
    <te-toast title="Toast" subtitle="Subtitle" message="This is a toast" />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-toast title="Toast" subtitle="Subtitle" message="This is a toast" />
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Color</h1>
    <div class="w-1/3 my-2">
      <label class="w-1/3">Choose a color</label>
      <te-select v-model="color" :options="colors" />
    </div>
    <te-toast title="Toast" subtitle="Subtitle" message="This is a toast" :color="color" :show-close-button="true" />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-toast title="Toast" subtitle="Subtitle" message="This is a toast" :color="color" :show-close-button="true" />
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data: () => ({
    colors: ['normal','primary', 'success', 'warning', 'danger'],
    color: 'primary'
  })
}
</script>

<style>

</style>