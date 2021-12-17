<template>
  <div class="container p-6">
    <h1 class="text-3xl my-2">Switchable components</h1>
    <h1 class="text-lg">Checkbox</h1>
    <te-checkbox v-model="value1" label="Checkbox" />
    <p>{{value1}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-checkbox v-model="value1" label="Checkbox" />
        </script>
      </code>
    </pre>
    <h1 class="text-lg">Checkbox with slot</h1>
    <te-checkbox v-model="value1">
      <template v-slot:default="{selected}">
        <p v-if="selected">:)</p>
        <p v-else>:(</p>
      </template>
    </te-checkbox>
    <p>{{value1}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-checkbox v-model="value1">
            <template v-slot:default="{selected}">
              <p v-if="selected">:)</p>
              <p v-else>:(</p>
            </template>
          </te-checkbox>
        </script>
      </code>
    </pre>
    <h1 class="text-lg">Switch</h1>
    <te-switch v-model="value2" class="pl-5" label="Switch" />
    <p>{{value2}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-switch v-model="value2" class="pl-5" label="Switch" />
        </script>
      </code>
    </pre>
    <h1 class="text-lg">Switch with slot</h1>
    <te-switch v-model="value2">
      <template v-slot:default="{selected}">
        <p v-if="selected">:)</p>
        <p v-else>:(</p>
      </template>
    </te-switch>
    <p>{{value2}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-switch v-model="value2">
            <template v-slot:default="{selected}">
              <p v-if="selected">:)</p>
              <p v-else>:(</p>
            </template>
          </te-switch>
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Switchable',
  data: () => ({
    value1: false,
    value2: false,
  })
}
</script>

<style>

</style>