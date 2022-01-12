<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Directives</h1>
    <h1 class="text-lg my-2">v-outside</h1>
    <p class="mb-3">Directive to detect a click from the outside of the current element</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <span v-outside="myMethod" class="p-3 mb-3 bg-yellow-400">Click outside</span>
        </script>
      </code>
    </pre>
    <h1 class="text-3xl my-2">Mixins</h1>
    <h1 class="text-lg my-2">Size Mixin</h1>
    <p>Mixin to detect the window size and its changes</p>
    <pre class="language-js">
      <code>
        <script type="prism-js">
          import { sizeMixin } from 'vue-tailwind-elements/src/mixins/index';

          export default {
            ...
            mixins: [sizeMixin],
            ...
          }
        </script>
      </code>
    </pre>
    <p>You could use the computed values <strong>windowSizeType</strong> to check what is window size. This computed could be 'sm', 'md' or 'lg' values.</p>
  </div>
</template>

<script>
export default {
  name: 'Utilities',
  methods: {
    myMethod() {
      alert('Hello');
    }
  }
}
</script>

<style>

</style>