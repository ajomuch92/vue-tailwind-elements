<template>
  <div class="container p-6">
    <h1 class="text-3xl my-2">Dropdown</h1>
    <h1 class="text-lg my-2">Normal</h1>
    <te-dropdown label="Dropdown">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
      <te-dropdown-item disabled>Disabled item</te-dropdown-item>
    </te-dropdown>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-dropdown label="Dropdown">
            <te-dropdown-item>Item 1</te-dropdown-item>
            <te-dropdown-item>Item 2</te-dropdown-item>
            <te-dropdown-item>Item 3</te-dropdown-item>
            <te-dropdown-item disabled>Disabled item</te-dropdown-item>
          </te-dropdown>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-2">Size</h1>
    <te-dropdown label="Small" size="small">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Medium" size="medium">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Large" size="large">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-dropdown label="Small" size="small">
            <te-dropdown-item>Item 1</te-dropdown-item>
            <te-dropdown-item>Item 2</te-dropdown-item>
            <te-dropdown-item>Item 3</te-dropdown-item>
          </te-dropdown>
          <te-dropdown label="Medium" size="medium">
            <te-dropdown-item>Item 1</te-dropdown-item>
            <te-dropdown-item>Item 2</te-dropdown-item>
            <te-dropdown-item>Item 3</te-dropdown-item>
          </te-dropdown>
          <te-dropdown label="Large" size="large">
            <te-dropdown-item>Item 1</te-dropdown-item>
            <te-dropdown-item>Item 2</te-dropdown-item>
            <te-dropdown-item>Item 3</te-dropdown-item>
          </te-dropdown>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-2">Types</h1>
    <te-dropdown label="Normal" type="normal">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Primary" type="primary">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Secondary" type="secondary">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Success" type="success">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Warning" type="warning">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Danger" type="danger">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Pink" type="pink">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Purple" type="purple">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Light" type="light">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Dark" type="dark">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-dropdown label="Normal" type="normal">
            <te-dropdown-item>Item 1</te-dropdown-item>
            <te-dropdown-item>Item 2</te-dropdown-item>
            <te-dropdown-item>Item 3</te-dropdown-item>
          </te-dropdown>
          <te-dropdown label="Primary" type="primary">
            <te-dropdown-item>Item 1</te-dropdown-item>
            <te-dropdown-item>Item 2</te-dropdown-item>
            <te-dropdown-item>Item 3</te-dropdown-item>
          </te-dropdown>
          <te-dropdown label="Secondary" type="secondary">
            <te-dropdown-item>Item 1</te-dropdown-item>
            <te-dropdown-item>Item 2</te-dropdown-item>
            <te-dropdown-item>Item 3</te-dropdown-item>
          </te-dropdown>
          <te-dropdown label="Success" type="success">
            <te-dropdown-item>Item 1</te-dropdown-item>
            <te-dropdown-item>Item 2</te-dropdown-item>
            <te-dropdown-item>Item 3</te-dropdown-item>
          </te-dropdown>
          <te-dropdown label="Warning" type="warning">
            <te-dropdown-item>Item 1</te-dropdown-item>
            <te-dropdown-item>Item 2</te-dropdown-item>
            <te-dropdown-item>Item 3</te-dropdown-item>
          </te-dropdown>
          <te-dropdown label="Danger" type="danger">
            <te-dropdown-item>Item 1</te-dropdown-item>
            <te-dropdown-item>Item 2</te-dropdown-item>
            <te-dropdown-item>Item 3</te-dropdown-item>
          </te-dropdown>
          <te-dropdown label="Pink" type="pink">
            <te-dropdown-item>Item 1</te-dropdown-item>
            <te-dropdown-item>Item 2</te-dropdown-item>
            <te-dropdown-item>Item 3</te-dropdown-item>
          </te-dropdown>
          <te-dropdown label="Purple" type="purple">
            <te-dropdown-item>Item 1</te-dropdown-item>
            <te-dropdown-item>Item 2</te-dropdown-item>
            <te-dropdown-item>Item 3</te-dropdown-item>
          </te-dropdown>
          <te-dropdown label="Light" type="light">
            <te-dropdown-item>Item 1</te-dropdown-item>
            <te-dropdown-item>Item 2</te-dropdown-item>
            <te-dropdown-item>Item 3</te-dropdown-item>
          </te-dropdown>
          <te-dropdown label="Dark" type="dark">
            <te-dropdown-item>Item 1</te-dropdown-item>
            <te-dropdown-item>Item 2</te-dropdown-item>
            <te-dropdown-item>Item 3</te-dropdown-item>
          </te-dropdown>
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Dropdown'
}
</script>

<style>

</style>