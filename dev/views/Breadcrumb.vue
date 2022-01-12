<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Breadcrumb</h1>
    <h1 class="text-lg">Default</h1>
    <te-breadcrumb :options="options" />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-breadcrumb :options="[
                {
                  href: '/',
                  label: 'Index'
                },
                {
                  href: '/breadcrumb',
                  label: 'Breadcrumb'
                },
              ]" />
        </script>
      </code>
    </pre>
    <h1 class="text-lg">Custom Separator</h1>
    <te-breadcrumb :options="options" separator=">" />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-breadcrumb :options="options" separator=">" />
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data: () => ({
    options: [
      {
        href: '/',
        label: 'Index'
      },
      {
        href: '/breadcrumb',
        label: 'Breadcrumb'
      },
    ]
  })
}
</script>

<style>

</style>