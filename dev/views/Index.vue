<template>
  <div class="w-full flex">
    <aside class="w-full p-6 sm:w-3/12 lg:w-2/12 bg-white text-gray-800 overflow-y-auto">
      <nav class="space-y-8 text-sm">
        <div v-for="(item, key) in items" :key="key" class="space-y-2">
          <h2
            class="
              text-sm
              font-semibold
              tracking-widest
              uppercase
              text-gray-600
            "
          >
            {{key}}
          </h2>
          <div class="flex flex-col space-y-1">
            <a v-for="(option, i) in item" :key="i" :href="option.href">{{option.label}}</a>
          </div>
        </div>
      </nav>
    </aside>
    <main class="container w-full sm:w-9/12 lg:w-10/12 px-4 sm:pr-10 lg:pr-4">
      <router-view />
    </main>
  </div>
</template>

<script>
import { sizeMixin } from '../../src/lib-components/mixins/index';

export default {
  name: 'Index',
  mixins: [sizeMixin],
  data: () => ({
    items: {
      'Getting Started': [
        {
          label: 'Home',
          href: '/'
        },
      ],
      Components: [
        {
          label: 'Accordion',
          href: '/accordion'
        },
        {
          label: 'Alert',
          href: '/alert'
        },
        {
          label: 'Badge',
          href: '/badge'
        },
        {
          label: 'Buttons',
          href: '/buttons'
        },
        {
          label: 'Buttongroup',
          href: '/buttongroup'
        },
        {
          label: 'Card',
          href: '/card'
        },
        {
          label: 'Dropdown',
          href: '/dropdown'
        },
        {
          label: 'Listgroup',
          href: '/listgroup'
        },
        {
          label: 'Modal',
          href: '/modal'
        },
        {
          label: 'Spinner',
          href: '/spinner'
        },
        {
          label: 'Stepper',
          href: '/stepper'
        },
        {
          label: 'Table',
          href: '/table'
        },
        {
          label: 'Notification',
          href: '/notification'
        },
        {
          label: 'Toast',
          href: '/toast'
        },
        {
          label: 'Icons',
          href: '/icons'
        },
        {
          label: 'Rating',
          href: '/rating'
        },
      ],
      Navigation: [
        {
          label: 'Breadcrumb',
          href: '/breadcrumb'
        },
        {
          label: 'Navbar',
          href: '/navbar'
        },
        {
          label: 'Pagination',
          href: '/pagination'
        },
        {
          label: 'Tab',
          href: '/tab'
        },
      ],
      Forms: [
        {
          label: 'Date',
          href: '/date'
        },
        {
          label: 'Input',
          href: '/input'
        },
        {
          label: 'Files',
          href: '/files'
        },
        {
          label: 'Range',
          href: '/range'
        },
        {
          label: 'Switchable',
          href: '/switchable'
        },
        {
          label: 'Select',
          href: '/select'
        },
      ]
    }
  })
}
</script>

<style>

</style>