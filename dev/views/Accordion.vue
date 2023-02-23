<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Accordion</h1>
    <h1 class="text-lg">Basic</h1>
    <te-accordion :items="['Accordion #1', 'Accordion #2', 'Accordion #3']" :single-open="singleOpen">
      <template v-slot:header-1="{title}">
        **<b>{{title}}</b>**
      </template>
      <template slot="content-1">
        <p>Content 1</p>
      </template>
      <template slot="content-2">
        <p>Content 2</p>
      </template>
      <template slot="content-3">
        <p>Content 3</p>
      </template>
    </te-accordion>
    <te-checkbox class="my-2" v-model="singleOpen">Single Open</te-checkbox>
    <code-view :code="code[0]" />
    <h1 class="text-lg">Flush</h1>
    <te-accordion :items="['Accordion #1', 'Accordion #2', 'Accordion #3']" flush>
      <template slot="content-1">
        <p>Content 1</p>
      </template>
      <template slot="content-2">
        <p>Content 2</p>
      </template>
      <template slot="content-3">
        <p>Content 3</p>
      </template>
    </te-accordion>
    <code-view :code="code[0]" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';

export default {
  name: 'Accordion',
  components: {
    CodeView
  },
  data: () => ({
    singleOpen: false,
    code: [
      `
      <te-accordion :items="['Accordion #1', 'Accordion #2', 'Accordion #3']" :single-open="singleOpen">
        <template v-slot:header-1="{title}">
          **<b>{{title}}</b>**
        </template>
        <template slot="content-1">
          <p>Content 1</p>
        </template>
        <template slot="content-2">
          <p>Content 2</p>
        </template>
        <template slot="content-3">
          <p>Content 3</p>
        </template>
      </te-accordion>
      `,
      `
      <te-accordion :items="['Accordion #1', 'Accordion #2', 'Accordion #3']" flush>
        <template slot="content-1">
          <p>Content 1</p>
        </template>
        <template slot="content-2">
          <p>Content 2</p>
        </template>
        <template slot="content-3">
          <p>Content 3</p>
        </template>
      </te-accordion>
      `,
    ]
  })
}
</script>

<style>

</style>