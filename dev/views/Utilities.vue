<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Directives</h1>
    <h1 class="text-lg my-2">v-outside</h1>
    <p class="mb-3">Directive to detect a click from the outside of the current element</p>
    <code-view :code="code[0]" />
    <h1 class="text-3xl my-2">Mixins</h1>
    <h1 class="text-lg my-2">Size Mixin</h1>
    <p>Mixin to detect the window size and its changes based on <a class="text-blue-700" href="https://v2.tailwindcss.com/docs/breakpoints" target="_blank">Tailwind breakpoints</a></p>
    <code-view :code="code[1]" />
    <p>
      You could use the computed values <strong>sizeType</strong> to check what is window size. This computed could be 'xsm', 'sm', 'm', 'l', 'xl' or 'xxl' values, or you can use the isMobile, isTablet or isDesktop computed.
      Also you can use the <strong>orientation</strong> variable to check the screen orientation.
    </p>
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';

export default {
  name: 'Utilities',
  components: { CodeView },
  data: () => ({
    code: [
      '<span v-outside="myMethod" class="p-3 mb-3 bg-yellow-400">Click outside</span>',
      `
      import { sizeMixin } from 'vue-tailwind-elements';

      export default {
        ...
        mixins: [sizeMixin],
        ...
      }
      `
    ]
  }),
  methods: {
    myMethod() {
      alert('Hello');
    }
  }
}
</script>

<style>

</style>