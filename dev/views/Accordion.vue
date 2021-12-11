<template>
  <div class="container p-6">
    <h1 class="text-3xl my-2">Accordion</h1>
    <h1 class="text-lg">Normal use</h1>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-accordion title="Click to open" content="Lorem, ipsum dolor..."/>
        </script>
      </code>
    </pre>
    <te-accordion title="Click to open" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam ipsa veniam, ratione incidunt dolores maiores nobis reprehenderit voluptas, quaerat delectus reiciendis corporis dolorum vero itaque unde ut corrupti tenetur?" />
    <h1 class="text-lg mt-5">With Slots</h1>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-accordion>
            <template slot="title">
              <h1 class="text-2xl">Title</h1>
            </template>
            <template slot="default">
              <h1 class="text-2xl">Content</h1>
            </template>
            <template #icon="{open}">
              <span v-if="open">Open</span>
              <span v-else>Close</span>
            </template>
          </te-accordion>
        </script>
      </code>
    </pre>
    <te-accordion>
      <template slot="title">
        <h1 class="text-2xl">Title</h1>
      </template>
      <template slot="default">
        <h1 class="text-2xl">Content</h1>
      </template>
      <template #icon="{open}">
        <span v-if="open">Open</span>
        <span v-else>Close</span>
      </template>
    </te-accordion>
  </div>
</template>

<script>
import teAccordion from '../../src/lib-components/teAccordion.vue'
export default {
  components: { teAccordion },
  name: 'Accordion',
  data: () => ({
  })
}
</script>

<style>

</style>