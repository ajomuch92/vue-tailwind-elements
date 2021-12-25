<template>
  <div class="container p-6">
    <h1 class="text-3xl my-2">Vue Tailwind Elements</h1>
    <p>This is a library of Vue components based on the components created for <a class="text-blue-500" href="https://tailwindcss.com/" target="blank">Tailwind</a> called <a class="text-blue-500" href="https://tailwind-elements.com/" target="blank">Tailwind Elements</a>.</p>
    <h1 class="text-lg my-2">Installation</h1>
    <pre class="language-bash">
      <code>
        <script type="prism-bash">
          npm install --save vue-tailwind-elements
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-2">Usage</h1>
    <pre class="language-javascript">
      <code>
        <script type="prism-javascript">
          //main.js
          import 'vue-tailwind-elements/src/tailwind.min.css';
          import 'vue-tailwind-elements/src/tailwind-forms.min.css';
          import VueTailwindElements 'vue-tailwind-elements';

          Vue.use(VueTailwindElements);
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style>

</style>