<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Icons</h1>
    <h1 class="text-lg my-2">Usage</h1>
    <p>
      The icons used on this library are 
      <a class="text-blue-500" href="https://icons.getbootstrap.com/" target="blank">Glyphicons</a> (find the complete list of icons there). 
      To use it, just put the CDN into the index.html file:
    </p>
    <code-view :code="code[0]" />
    <p>Or import it into your CSS main file</p>
    <code-view :code="code[1]" lang="css" />
    <h1 class="text-lg my-2">Examples</h1>
    <p>The icon name could include the prefix bi or not</p>
    <te-icon class="mx-1" name="wifi"/>
    <te-icon class="mx-1" name="bi-x-circle"/>
    <te-icon class="mx-1" name="yin-yang"/>
    <code-view :code="code[2]" />
    <h1 class="text-lg my-2">Size</h1>
    <p>For the size, use the classes to set the font size from Tailwind</p>
    <te-icon class="mx-1 text-sm" name="wallet"/>
    <te-icon class="mx-1 text-2xl" name="wallet"/>
    <te-icon class="mx-1 text-5xl" name="wallet"/>
    <code-view :code="code[3]" />
    <h1 class="text-lg my-2">Colors</h1>
    <p>For the size, use the classes to set the font color from Tailwind</p>
    <te-icon class="mx-1 text-2xl text-red-500" name="wallet"/>
    <te-icon class="mx-1 text-2xl text-blue-500" name="wallet"/>
    <te-icon class="mx-1 text-2xl text-yellow-500" name="wallet"/>
    <code-view :code="code[4]" />
    <h1 class="text-lg my-2">Social</h1>
    <te-icon social name="behance"/>
    <te-icon social name="discord"/>
    <te-icon social name="facebook"/>
    <te-icon social name="messenger"/>
    <te-icon social name="twitter"/>
    <te-icon social name="google"/>
    <te-icon social name="instagram"/>
    <te-icon social name="linkedin"/>
    <te-icon social name="pinterest"/>
    <te-icon social name="vkontakte"/>
    <te-icon social name="overflow"/>
    <te-icon social name="telegram"/>
    <te-icon social name="youtube"/>
    <te-icon social name="tiktok"/>
    <te-icon social name="snapchat"/>
    <te-icon social name="slack"/>
    <te-icon social name="github"/>
    <te-icon social name="dribbble"/>
    <te-icon social name="reddit"/>
    <te-icon social name="whatsapp"/>
    <te-icon social name="twitch"/>
    <code-view :code="code[5]" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue'
export default {
  name: 'Icons',
  components: { CodeView },
  data: () => ({
    code: [
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">',
      '@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");',
      `
      <te-icon name="wifi"/>
      <te-icon name="bi-x-circle"/>
      <te-icon name="yin-yang"/>
      `,
      `
      <te-icon class="text-sm" name="wallet"/>
      <te-icon class="text-2xl" name="wallet"/>
      <te-icon class="text-5xl" name="wallet"/>
      `,
      `
      <te-icon class="text-2xl text-red-500" name="wallet"/>
      <te-icon class="text-2xl text-blue-500" name="wallet"/>
      <te-icon class="text-2xl text-yellow-500" name="wallet"/> 
      `,
      `
      <te-icon social name="behance"/>
      <te-icon social name="discord"/>
      <te-icon social name="facebook"/>
      <te-icon social name="messenger"/>
      <te-icon social name="twitter"/>
      <te-icon social name="google"/>
      <te-icon social name="instagram"/>
      <te-icon social name="linkedin"/>
      <te-icon social name="pinterest"/>
      <te-icon social name="vkontakte"/>
      <te-icon social name="overflow"/>
      <te-icon social name="telegram"/>
      <te-icon social name="youtube"/>
      <te-icon social name="tiktok"/>
      <te-icon social name="snapchat"/>
      <te-icon social name="slack"/>
      <te-icon social name="github"/>
      <te-icon social name="dribbble"/>
      <te-icon social name="reddit"/>
      <te-icon social name="whatsapp"/>
      <te-icon social name="twitch"/>
      `
    ]
  })
}
</script>

<style>

</style>