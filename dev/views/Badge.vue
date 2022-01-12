<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Badge</h1>
    <h1 class="text-lg">Normal</h1>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-badge type="normal" text="Badge" />
          <te-badge type="primary" text="Badge" />
          <te-badge type="success" text="Badge" />
          <te-badge type="info" text="Badge" />
          <te-badge type="warning" text="Badge" />
          <te-badge type="danger" text="Badge" />
          <te-badge type="purple" text="Badge" />
          <te-badge type="pink" text="Badge" />
        </script>
      </code>
    </pre>
    <div class="flex space-x-2">
      <te-badge type="normal" text="Badge" />
      <te-badge type="primary" text="Badge" />
      <te-badge type="success" text="Badge" />
      <te-badge type="info" text="Badge" />
      <te-badge type="warning" text="Badge" />
      <te-badge type="danger" text="Badge" />
      <te-badge type="purple" text="Badge" />
      <te-badge type="pink" text="Badge" />
    </div>
    <h1 class="text-lg">Solid</h1>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-badge type="normal" text="Badge" solid />
          <te-badge type="primary" text="Badge" solid />
          <te-badge type="success" text="Badge" solid />
          <te-badge type="info" text="Badge" solid />
          <te-badge type="warning" text="Badge" solid />
          <te-badge type="danger" text="Badge" solid />
          <te-badge type="purple" text="Badge" solid />
          <te-badge type="pink" text="Badge" solid />
        </script>
      </code>
    </pre>
    <div class="flex space-x-2">
      <te-badge type="normal" text="Badge" solid />
      <te-badge type="primary" text="Badge" solid />
      <te-badge type="success" text="Badge" solid />
      <te-badge type="info" text="Badge" solid />
      <te-badge type="warning" text="Badge" solid />
      <te-badge type="danger" text="Badge" solid />
      <te-badge type="purple" text="Badge" solid />
      <te-badge type="pink" text="Badge" solid />
    </div>
    <h1 class="text-lg">Rounded</h1>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-badge type="normal" text="Badge" solid rounded />
          <te-badge type="primary" text="Badge" solid rounded />
          <te-badge type="success" text="Badge" solid rounded />
          <te-badge type="info" text="Badge" solid rounded />
          <te-badge type="warning" text="Badge" solid rounded />
          <te-badge type="danger" text="Badge" solid rounded />
          <te-badge type="purple" text="Badge" solid rounded />
          <te-badge type="pink" text="Badge" solid rounded />
        </script>
      </code>
    </pre>
    <div class="flex space-x-2">
      <te-badge type="normal" text="Badge" solid rounded />
      <te-badge type="primary" text="Badge" solid rounded />
      <te-badge type="success" text="Badge" solid rounded />
      <te-badge type="info" text="Badge" solid rounded />
      <te-badge type="warning" text="Badge" solid rounded />
      <te-badge type="danger" text="Badge" solid rounded />
      <te-badge type="purple" text="Badge" solid rounded />
      <te-badge type="pink" text="Badge" solid rounded />
    </div>
    <h1 class="text-lg">Outlined</h1>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-badge type="normal" text="Badge" outlined />
          <te-badge type="primary" text="Badge" outlined />
          <te-badge type="success" text="Badge" outlined />
          <te-badge type="info" text="Badge" outlined />
          <te-badge type="warning" text="Badge" outlined />
          <te-badge type="danger" text="Badge" outlined />
          <te-badge type="purple" text="Badge" outlined />
          <te-badge type="pink" text="Badge" outlined />
        </script>
      </code>
    </pre>
    <div class="flex space-x-2">
      <te-badge type="normal" text="Badge" outlined />
      <te-badge type="primary" text="Badge" outlined />
      <te-badge type="success" text="Badge" outlined />
      <te-badge type="info" text="Badge" outlined />
      <te-badge type="warning" text="Badge" outlined />
      <te-badge type="danger" text="Badge" outlined />
      <te-badge type="purple" text="Badge" outlined />
      <te-badge type="pink" text="Badge" outlined />
    </div>
    <h1 class="text-lg">Large</h1>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-badge type="normal" text="Badge" outlined size="large"/>
        </script>
      </code>
    </pre>
    <div class="flex space-x-2">
      <te-badge type="normal" text="Badge" outlined size="large"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Badge'
}
</script>

<style>

</style>