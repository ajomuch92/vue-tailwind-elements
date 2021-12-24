<template>
  <div class="container p-6">
    <h1 class="text-3xl my-2">Spinner</h1>
    <h1 class="text-lg my-2">Normal</h1>
    <te-spinner />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-spinner />
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-2">Size</h1>
    <te-spinner size="small" />
    <te-spinner size="medium" />
    <te-spinner size="large" />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-spinner size="small" />
          <te-spinner size="medium" />
          <te-spinner size="large" />
        </script>
      </code>
    </pre>
    <te-spinner color="normal" />
    <te-spinner color="primary" />
    <te-spinner color="secondary" />
    <te-spinner color="success" />
    <te-spinner color="warning" />
    <te-spinner color="danger" />
    <te-spinner color="pink" />
    <te-spinner color="purple" />
    <te-spinner color="light" />
    <te-spinner color="dark" />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-spinner color="normal" />
          <te-spinner color="primary" />
          <te-spinner color="secondary" />
          <te-spinner color="success" />
          <te-spinner color="warning" />
          <te-spinner color="danger" />
          <te-spinner color="pink" />
          <te-spinner color="purple" />
          <te-spinner color="light" />
          <te-spinner color="dark" />
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Spinner'
}
</script>

<style>

</style>