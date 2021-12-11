<template>
  <div class="container p-6">
    <h1 class="text-3xl my-2">Alerts</h1>
    <h1 class="text-lg">Default</h1>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-alert text="Hello world" />
        </script>
      </code>
    </pre>
    <te-alert text="Hello world" />
    <h1 class="text-lg">Variants</h1>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-alert text="Default" />
          <te-alert text="Primary" type="primary" />
          <te-alert text="Success" type="success" />
          <te-alert text="Info" type="info" />
          <te-alert text="Warning" type="warning" />
          <te-alert text="Danger" type="danger" />
        </script>
      </code>
    </pre>
    <te-alert text="Default" />
    <te-alert text="Primary" type="primary" />
    <te-alert text="Success" type="success" />
    <te-alert text="Info" type="info" />
    <te-alert text="Warning" type="warning" />
    <te-alert text="Danger" type="danger" />
    <h1 class="text-lg">Solid</h1>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-alert text="Default" solid />
          <te-alert text="Primary" type="primary" solid />
          <te-alert text="Success" type="success" solid />
          <te-alert text="Info" type="info" solid />
          <te-alert text="Warning" type="warning" solid />
          <te-alert text="Danger" type="danger" solid />
        </script>
      </code>
    </pre>
    <te-alert text="Default" solid />
    <te-alert text="Primary" type="primary" solid />
    <te-alert text="Success" type="success" solid />
    <te-alert text="Info" type="info" solid />
    <te-alert text="Warning" type="warning" solid />
    <te-alert text="Danger" type="danger" solid />
  </div>
</template>

<script>
export default {
  name: 'Alert',
}
</script>

<style>

</style>