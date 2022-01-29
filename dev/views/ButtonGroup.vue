<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Button Group</h1>
    <te-button-group :quantity="3">
      <template slot="button-1">Button 1</template>
      <template slot="button-2">Button 2</template>
      <template slot="button-3">Button 3</template>
    </te-button-group>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-button-group :quantity="3">
            <template slot="button-1">Button 1</template>
            <template slot="button-2">Button 2</template>
            <template slot="button-3">Button 3</template>
          </te-button-group>
        </script>
      </code>
    </pre>
    <h1 class="text-3xl my-2">Type</h1>
    <te-button-group :quantity="3" type="warning">
      <template slot="button-1">Button 1</template>
      <template slot="button-2">Button 2</template>
      <template slot="button-3">Button 3</template>
    </te-button-group>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-button-group :quantity="3" type="warning">
            <template slot="button-1">Button 1</template>
            <template slot="button-2">Button 2</template>
            <template slot="button-3">Button 3</template>
          </te-button-group>
        </script>
      </code>
    </pre>
    <h1 class="text-3xl my-2">Outlined</h1>
    <te-button-group :quantity="3" outlined>
      <template slot="button-1">Button 1</template>
      <template slot="button-2">Button 2</template>
      <template slot="button-3">Button 3</template>
    </te-button-group>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-button-group :quantity="3" outlined>
            <template slot="button-1">Button 1</template>
            <template slot="button-2">Button 2</template>
            <template slot="button-3">Button 3</template>
          </te-button-group>
        </script>
      </code>
    </pre>
    <h1 class="text-3xl my-2">Sizes</h1>
    <te-button-group :quantity="3" size="small">
      <template slot="button-1">Button 1</template>
      <template slot="button-2">Button 2</template>
      <template slot="button-3">Button 3</template>
    </te-button-group>
    <te-button-group :quantity="3" size="medium">
      <template slot="button-1">Button 1</template>
      <template slot="button-2">Button 2</template>
      <template slot="button-3">Button 3</template>
    </te-button-group>
    <te-button-group :quantity="3" size="large">
      <template slot="button-1">Button 1</template>
      <template slot="button-2">Button 2</template>
      <template slot="button-3">Button 3</template>
    </te-button-group>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-button-group :quantity="3" size="small">
            <template slot="button-1">Button 1</template>
            <template slot="button-2">Button 2</template>
            <template slot="button-3">Button 3</template>
          </te-button-group>
          <te-button-group :quantity="3" size="medium">
            <template slot="button-1">Button 1</template>
            <template slot="button-2">Button 2</template>
            <template slot="button-3">Button 3</template>
          </te-button-group>
          <te-button-group :quantity="3" size="large">
            <template slot="button-1">Button 1</template>
            <template slot="button-2">Button 2</template>
            <template slot="button-3">Button 3</template>
          </te-button-group>
        </script>
      </code>
    </pre>
    <h1 class="text-3xl my-2">Disabled</h1>
    <te-button-group :quantity="3" size="small" :disabled="[false, true, false]">
      <template slot="button-1">Button 1</template>
      <template slot="button-2">Button 2</template>
      <template slot="button-3">Button 3</template>
    </te-button-group>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-button-group :quantity="3" size="small" :disabled="[false, true, false]">
            <template slot="button-1">Button 1</template>
            <template slot="button-2">Button 2</template>
            <template slot="button-3">Button 3</template>
          </te-button-group>
        </script>
      </code>
    </pre>
    <h1 class="text-3xl my-2">Events</h1>
    <te-button-group :quantity="3" size="small" @click="index=$event.index">
      <template slot="button-1">Button 1</template>
      <template slot="button-2">Button 2</template>
      <template slot="button-3">Button 3</template>
    </te-button-group>
    <p>Button clicked {{index}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-button-group :quantity="3" size="small" @click="index=$event.index">
            <template slot="button-1">Button 1</template>
            <template slot="button-2">Button 2</template>
            <template slot="button-3">Button 3</template>
          </te-button-group>
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  data: () => ({
    index: null,
  }),
}
</script>

<style>

</style>