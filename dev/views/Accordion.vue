<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Accordion</h1>
    <h1 class="text-lg">Basic</h1>
    <te-accordion :items="['Accordion #1', 'Accordion #2', 'Accordion #3']">
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
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-accordion :items="['Accordion #1', 'Accordion #2', 'Accordion #3']">
            <template v-slot:header-1="{title}">
              **<b>{{'\{\{title\}\}'}}</b>**
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
        </script>
      </code>
    </pre>
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
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
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
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
}
</script>

<style>

</style>