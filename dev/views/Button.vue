<template>
  <div class="container p-6">
    <h1 class="text-3xl my-2">Buttons</h1>
    <h1 class="text-lg">Normal</h1>
    <te-button>Button</te-button>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-button>Button</te-button>
        </script>
      </code>
    </pre>
    <h1 class="text-lg">Sizes</h1>
    <div class="flex space-x-2">
      <te-button size="small">Button</te-button>
      <te-button size="medium">Button</te-button>
      <te-button size="large">Button</te-button>
    </div>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-button size="small">Button</te-button>
          <te-button size="medium">Button</te-button>
          <te-button size="large">Button</te-button>
        </script>
      </code>
    </pre>
    <h1 class="text-lg">Colors</h1>
    <div class="flex space-x-2">
      <te-button size="small" type="normal">Button</te-button>
      <te-button size="small" type="primary">Button</te-button>
      <te-button size="small" type="secondary">Button</te-button>
      <te-button size="small" type="success">Button</te-button>
      <te-button size="small" type="warning">Button</te-button>
      <te-button size="small" type="danger">Button</te-button>
      <te-button size="small" type="pink">Button</te-button>
      <te-button size="small" type="purple">Button</te-button>
      <te-button size="small" type="dark">Button</te-button>
      <te-button size="small" type="light">Button</te-button>
    </div>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-button size="small" type="normal">Button</te-button>
          <te-button size="small" type="primary">Button</te-button>
          <te-button size="small" type="secondary">Button</te-button>
          <te-button size="small" type="success">Button</te-button>
          <te-button size="small" type="warning">Button</te-button>
          <te-button size="small" type="danger">Button</te-button>
          <te-button size="small" type="pink">Button</te-button>
          <te-button size="small" type="purple">Button</te-button>
          <te-button size="small" type="dark">Button</te-button>
          <te-button size="small" type="light">Button</te-button>
        </script>
      </code>
    </pre>
    <h1 class="text-lg">Rounded</h1>
    <div class="flex space-x-2">
      <te-button size="small" type="success" rounded>Button</te-button>
      <te-button size="medium" type="success" rounded>Button</te-button>
      <te-button size="large" type="success" rounded>Button</te-button>
    </div>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-button size="small" type="success" rounded>Button</te-button>
          <te-button size="medium" type="success" rounded>Button</te-button>
          <te-button size="large" type="success" rounded>Button</te-button>
        </script>
      </code>
    </pre>
    <h1 class="text-lg">Outlined</h1>
    <div class="flex space-x-2">
      <te-button size="small" type="warning" rounded outlined>Button</te-button>
      <te-button size="medium" type="primary" rounded outlined>Button</te-button>
      <te-button size="large" type="danger" rounded outlined>Button</te-button>
    </div>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-button size="small" type="warning" rounded outlined>Button</te-button>
          <te-button size="medium" type="primary" rounded outlined>Button</te-button>
          <te-button size="large" type="danger" rounded outlined>Button</te-button>
        </script>
      </code>
    </pre>
    <h1 class="text-lg">Only Text</h1>
    <div class="flex space-x-2">
      <te-button size="medium" type="warning" only-text>Button</te-button>
      <te-button size="medium" type="primary" only-text>Button</te-button>
      <te-button size="medium" type="danger" only-text>Button</te-button>
    </div>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-button size="medium" type="warning" only-text>Button</te-button>
          <te-button size="medium" type="primary" only-text>Button</te-button>
          <te-button size="medium" type="danger" only-text>Button</te-button>
        </script>
      </code>
    </pre>
    <h1 class="text-lg">Uppercase / Shadow</h1>
    <div class="flex space-x-2">
      <te-button size="medium" type="warning" uppercased>Button</te-button>
      <te-button size="medium" type="primary" shadowed>Button</te-button>
    </div>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-button size="medium" type="warning" uppercased>Button</te-button>
          <te-button size="medium" type="primary" shadowed>Button</te-button>
        </script>
      </code>
    </pre>
    <h1 class="text-lg">Loading</h1>
    <div class="flex space-x-2">
      <te-button size="medium" loading>Button</te-button>
      <te-button size="medium" type="light" loading>Button</te-button>
    </div>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-button size="medium" loading>Button</te-button>
          <te-button size="medium" type="light" loading>Button</te-button>
        </script>
      </code>
    </pre>
    <h1 class="text-lg">Ripple</h1>
    <div class="flex space-x-2">
      <te-button size="medium" ripple>Button</te-button>
    </div>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-button size="medium" loading>Button</te-button>
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<style>

</style>