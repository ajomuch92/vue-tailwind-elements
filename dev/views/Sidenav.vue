<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Sidenav Item</h1>
    <div class="flex justify-center">
      <div class="w-1/4">
        <te-sidenav-item v-for="(option, key) in options" :key="key" v-bind="option">
          <template v-if="option.icon" #icon>
            <te-icon v-bind="option.icon" class="text-base" />
          </template>
        </te-sidenav-item>
      </div>
    </div>
    <code-view :code="code[0]" lang="js" />
    <code-view :code="code[1]" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';

export default {
  name: 'Sidenav',
  components: { CodeView },
  data: () => ({
    options: [
      {
        label: 'Option 1',
        linkTo: '#'
      },
      {
        label: 'Option 2',
        options: [
          {
            label: 'Navigation'
          }
        ]
      },
      {
        label: 'Option with icon',
        icon: {
          name: 'home',
          family: 'metro'
        }
      },
    ],
    code: [
      `
      options: [
        {
          label: 'Option 1',
          linkTo: '#',
          tag: '...'
        },
        {
          label: 'Option 2',
          options: [
            {
              label: 'Navigation'
            }
          ]
        },
        {
          label: 'Option with icon',
          icon: {
            name: 'home',
            family: 'metro'
          }
        },
      ]
      `,
      `
      <te-sidenav-item v-for="(option, key) in options" :key="key" v-bind="option">
        <template v-if="option.icon" #icon>
          <te-icon v-bind="option.icon" class="text-base" />
        </template>
      </te-sidenav-item>
      `
    ]
  })
}
</script>

<style scoped>
@import url('https://cdn.korzh.com/metroui/v4/css/metro-icons.min.css');
</style>