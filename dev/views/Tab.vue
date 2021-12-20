<template>
  <div class="container p-6">
    <h1 class="text-3xl my-2">Tabs</h1>
    <h1 class="text-lg my-1">Normal</h1>
    <te-tabs v-model="selectedTab" :titles="['Home', 'Profile', 'Messages', {label: 'Contact', disabled: true}]">
      <template slot="tab-1">
        Tab content 1
      </template>
      <template slot="tab-2">
        Tab content 2
      </template>
      <template slot="tab-3">
        Tab content 3
      </template>
      <template slot="tab-4">
        Tab content 4
      </template>
    </te-tabs>
    <p class="my-2">Selected tab: {{selectedTab}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-tabs v-model="selectedTab" :titles="['Home', 'Profile', 'Messages', {label: 'Contact', disabled: true}]">
            <template slot="tab-1">
              Tab content 1
            </template>
            <template slot="tab-2">
              Tab content 2
            </template>
            <template slot="tab-3">
              Tab content 3
            </template>
            <template slot="tab-4">
              Tab content 4
            </template>
          </te-tabs>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Filled</h1>
    <te-tabs :titles="['Home', 'Profile', 'Messages', 'Contact']" filled>
      <template slot="tab-1">
        Tab content 1
      </template>
      <template slot="tab-2">
        Tab content 2
      </template>
      <template slot="tab-3">
        Tab content 3
      </template>
      <template slot="tab-4">
        Tab content 4
      </template>
    </te-tabs>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-tabs :titles="['Home', 'Profile', 'Messages', 'Contact']" filled>
            <template slot="tab-1">
              Tab content 1
            </template>
            <template slot="tab-2">
              Tab content 2
            </template>
            <template slot="tab-3">
              Tab content 3
            </template>
            <template slot="tab-4">
              Tab content 4
            </template>
          </te-tabs>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Vertical</h1>
    <te-tabs :titles="['Home', 'Profile', 'Messages', 'Contact']" vertical>
      <template slot="tab-1">
        Tab content 1
      </template>
      <template slot="tab-2">
        Tab content 2
      </template>
      <template slot="tab-3">
        Tab content 3
      </template>
      <template slot="tab-4">
        Tab content 4
      </template>
    </te-tabs>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-tabs :titles="['Home', 'Profile', 'Messages', 'Contact']" vertical>
            <template slot="tab-1">
              Tab content 1
            </template>
            <template slot="tab-2">
              Tab content 2
            </template>
            <template slot="tab-3">
              Tab content 3
            </template>
            <template slot="tab-4">
              Tab content 4
            </template>
          </te-tabs>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Pills</h1>
    <te-tabs :titles="['Home', 'Profile', 'Messages', 'Contact']" pills>
      <template slot="tab-1">
        Tab content 1
      </template>
      <template slot="tab-2">
        Tab content 2
      </template>
      <template slot="tab-3">
        Tab content 3
      </template>
      <template slot="tab-4">
        Tab content 4
      </template>
    </te-tabs>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data: () => ({
    selectedTab: 0,
  })
}
</script>

<style>

</style>