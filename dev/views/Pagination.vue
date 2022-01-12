<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Pagination</h1>
    <h1 class="text-lg my-1">Normal</h1>
    <te-pagination :pages="10" :pages-to-show="4" :active-page.sync="activePage" />
    <p>Active page {{activePage}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-pagination :pages="10" :pages-to-show="4" :active-page.sync="activePage" />
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">With Icons</h1>
    <te-pagination :pages="10" :pages-to-show="4" show-icons />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-pagination :pages="10" :pages-to-show="4" show-icons />
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Sizes</h1>
    <te-pagination class="my-1" :pages="10" :pages-to-show="4" size="small" />
    <te-pagination class="my-1" :pages="10" :pages-to-show="4" size="medium" />
    <te-pagination class="my-1" :pages="10" :pages-to-show="4" size="large" />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-pagination :pages="10" :pages-to-show="4" size="small" />
          <te-pagination :pages="10" :pages-to-show="4" size="medium" />
          <te-pagination :pages="10" :pages-to-show="4" size="large" />
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Positions</h1>
    <te-pagination :pages="10" :pages-to-show="4" position="left"/>
    <te-pagination :pages="10" :pages-to-show="4" position="center"/>
    <te-pagination :pages="10" :pages-to-show="4" position="right"/>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-pagination :pages="10" :pages-to-show="4" position="left"/>
          <te-pagination :pages="10" :pages-to-show="4" position="center"/>
          <te-pagination :pages="10" :pages-to-show="4" position="right"/>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Rounded</h1>
    <te-pagination :pages="10" :pages-to-show="4" rounded/>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-pagination :pages="10" :pages-to-show="4" rounded/>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Custom labels</h1>
    <te-pagination :pages="10" :pages-to-show="4" label-next="Sig." label-prev="Ant."/>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-pagination :pages="10" :pages-to-show="4" label-next="Sig." label-prev="Ant."/>
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data: () => ({
    activePage: 1,
  })
}
</script>

<style>

</style>