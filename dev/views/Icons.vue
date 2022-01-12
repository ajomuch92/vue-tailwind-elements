<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Icons</h1>
    <h1 class="text-lg my-2">Usage</h1>
    <p>
      The icons used on this library are 
      <a class="text-blue-500" href="https://icons.getbootstrap.com/" target="blank">Glyphicons</a> (find the complete list of icons there). 
      To use it, just put the CDN into the index.html file:
    </p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
        </script>
      </code>
    </pre>
    <p>Or import it into your CSS main file</p>
    <pre class="language-css">
      <code>
        <script type="prism-css">
          @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-2">Examples</h1>
    <p>The icon name could include the prefix bi or not</p>
    <te-icon class="mx-1" name="wifi"/>
    <te-icon class="mx-1" name="bi-x-circle"/>
    <te-icon class="mx-1" name="yin-yang"/>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-icon name="wifi"/>
          <te-icon name="bi-x-circle"/>
          <te-icon name="yin-yang"/>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-2">Size</h1>
    <p>For the size, use the classes to set the font size from Tailwind</p>
    <te-icon class="mx-1 text-sm" name="wallet"/>
    <te-icon class="mx-1 text-2xl" name="wallet"/>
    <te-icon class="mx-1 text-5xl" name="wallet"/>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-icon class="text-sm" name="wallet"/>
          <te-icon class="text-2xl" name="wallet"/>
          <te-icon class="text-5xl" name="wallet"/>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-2">Colors</h1>
    <p>For the size, use the classes to set the font color from Tailwind</p>
    <te-icon class="mx-1 text-2xl text-red-500" name="wallet"/>
    <te-icon class="mx-1 text-2xl text-blue-500" name="wallet"/>
    <te-icon class="mx-1 text-2xl text-yellow-500" name="wallet"/>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-icon class="text-2xl text-red-500" name="wallet"/>
          <te-icon class="text-2xl text-blue-500" name="wallet"/>
          <te-icon class="text-2xl text-yellow-500" name="wallet"/>
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Icons'
}
</script>

<style>

</style>