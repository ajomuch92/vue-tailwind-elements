<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Tabs</h1>
    <h1 class="text-lg my-1">Normal</h1>
    <te-tabs v-model="selectedTab" :titles="['Home', 'Profile', 'Messages', {label: 'Contact', disabled: true}, {label: 'Notification', notification: { color: 'secondary', text: '+2'}}]">
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
      <template slot="tab-5">
        Notifications
      </template>
    </te-tabs>
    <p class="my-2">Selected tab: {{selectedTab}}</p>
    <code-view :code="code[0]" />
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
    <code-view :code="code[1]" />
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
    <code-view :code="code[2]" />
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
    <code-view :code="code[3]" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';

export default {
  name: 'Tab',
  components: { CodeView },
  data: () => ({
    selectedTab: 0,
    code: [
      `
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
      `,
      `
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
      `,
      `
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
      `,
      `
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
      `,
    ]
  })
}
</script>

<style>

</style>