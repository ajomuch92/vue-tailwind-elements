<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">List Group</h1>
    <h1 class="text-lg my-2">Normal</h1>
    <te-list-group :active-item.sync="selectedItem" :items="['First Item', 'Second Item', 'Third Item', {label: 'Disabled Item', disabled: true}]" clickable />
    <p>Active item {{selectedItem}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-list-group :active-item.sync="selectedItem" :items="['First Item', 'Second Item', 'Third Item', {label: 'Disabled Item', disabled: true}]" clickable />
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-2">Flush</h1>
    <te-list-group :items="['First Item', 'Second Item', 'Third Item', {label: 'Disabled Item', disabled: true}]" :clickable="false" flush />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-list-group :items="['First Item', 'Second Item', 'Third Item', {label: 'Disabled Item', disabled: true}]" :clickable="false" flush />
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'ListGroup',
  data: () => ({
    selectedItem: null,
  }),
}
</script>

<style>

</style>