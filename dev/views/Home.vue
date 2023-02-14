<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Vue Tailwind Elements</h1>
    <p>This is a library of Vue components based on the components created for <a class="text-blue-500" href="https://tailwindcss.com/" target="blank">Tailwind</a> called <a class="text-blue-500" href="https://tailwind-elements.com/" target="blank">Tailwind Elements</a>.</p>
    <h1 class="text-lg my-2">Installation</h1>
    <code-view code="npm install --save vue-tailwind-elements tw-elements" lang="bash" />
    <h1 class="text-lg my-2">Usage</h1>
    <p>Importing the styles, there is no need to install Tailwind and you can use everything on it</p>
    <code-view lang="js" :code="code"/>
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue'
export default {
  name: 'Home',
  components: { CodeView },
  data: () => ({
    code: `
      import 'tw-elements';
      import VueTailwindElements from 'vue-tailwind-elements';

      Vue.use(VueTailwindElements);
    `
  })
}
</script>

<style>

</style>