<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Pagination</h1>
    <h1 class="text-lg my-1">Normal</h1>
    <te-pagination :pages="10" :pages-to-show="4" :active-page.sync="activePage" />
    <p>Active page {{activePage}}</p>
    <code-view :code="code[0]"/>
    <h1 class="text-lg my-1">With Icons</h1>
    <te-pagination :pages="10" :pages-to-show="4" show-icons />
    <code-view :code="code[1]"/>
    <h1 class="text-lg my-1">Sizes</h1>
    <te-pagination class="my-1" :pages="10" :pages-to-show="4" size="small" />
    <te-pagination class="my-1" :pages="10" :pages-to-show="4" size="medium" />
    <te-pagination class="my-1" :pages="10" :pages-to-show="4" size="large" />
    <code-view :code="code[2]"/>
    <h1 class="text-lg my-1">Positions</h1>
    <te-pagination :pages="10" :pages-to-show="4" position="left"/>
    <te-pagination :pages="10" :pages-to-show="4" position="center"/>
    <te-pagination :pages="10" :pages-to-show="4" position="right"/>
    <code-view :code="code[3]"/>
    <h1 class="text-lg my-1">Rounded</h1>
    <te-pagination :pages="10" :pages-to-show="4" rounded/>
    <code-view :code="code[4]"/>
    <h1 class="text-lg my-1">Custom labels</h1>
    <te-pagination :pages="10" :pages-to-show="4" label-next="Sig." label-prev="Ant."/>
    <code-view :code="code[5]"/>
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';

export default {
  name: 'Pagination',
  components: { CodeView },
  data: () => ({
    activePage: 1,
    code: [
      `
      <te-pagination :pages="10" :pages-to-show="4" :active-page.sync="activePage" />
      `,
      `
      <te-pagination :pages="10" :pages-to-show="4" show-icons />
      `,
      `
      <te-pagination :pages="10" :pages-to-show="4" size="small" />
      <te-pagination :pages="10" :pages-to-show="4" size="medium" />
      <te-pagination :pages="10" :pages-to-show="4" size="large" />
      `,
      `
      <te-pagination :pages="10" :pages-to-show="4" position="left"/>
      <te-pagination :pages="10" :pages-to-show="4" position="center"/>
      <te-pagination :pages="10" :pages-to-show="4" position="right"/>
      `,
      `
      <te-pagination :pages="10" :pages-to-show="4" rounded/>
      `,
      `
      <te-pagination :pages="10" :pages-to-show="4" label-next="Sig." label-prev="Ant."/>
      `,
    ]
  })
}
</script>

<style>

</style>