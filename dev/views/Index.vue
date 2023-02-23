<template>
  <div class="w-full flex flex-wrap">
    <aside v-if="windowSizeType!='sm'" class="w-full p-6 sm:w-3/12 lg:w-2/12 bg-white text-gray-800 overflow-y-auto sticky h-screen">
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
            <router-link v-for="(option, i) in item" :key="i" :to="option.href">{{option.label}}</router-link>
          </div>
        </div>
      </nav>
    </aside>
    <te-offcanvas v-else v-model="showPanel">
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
            <router-link v-for="(option, i) in item" :key="i" :to="option.href">{{option.label}}</router-link>
          </div>
        </div>
      </nav>
    </te-offcanvas>
    <main id="main" class="w-full px-4 sm:w-9/12 lg:w-10/12 sm:pr-10 lg:pr-4 overflow-y-auto sticky h-screen">
      <router-view />
      <te-button v-if="windowSizeType=='sm'" class="absolute right-0 top-7" @click="showPanel=!showPanel" only-text>
        <te-icon name="list" />
      </te-button>
    </main>
  </div>
</template>

<script>
import { sizeMixin } from '@/entry.esm';

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
          label: 'Back To Top',
          href: '/back-to-top'
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
          label: 'Carousel',
          href: '/carousel'
        },
        {
          label: 'Chips',
          href: '/chips'
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
          label: 'Offcanvas',
          href: '/offcanvas'
        },
        {
          label: 'Timeline',
          href: '/timeline'
        },
        {
          label: 'Toast',
          href: '/toast'
        },
        {
          label: 'Tooltip',
          href: '/tooltip'
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
      ],
      Utilities: [
        {
          label: 'Directives/Mixins',
          href: '/utilities'
        },
      ]
    },
    showPanel: false,
  }),
}
</script>

<style>

</style>