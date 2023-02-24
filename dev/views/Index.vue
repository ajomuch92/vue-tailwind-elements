<template>
  <div class="w-full flex flex-wrap">
    <aside v-if="windowSizeType!='sm'" class="w-full p-6 sm:w-3/12 lg:w-2/12 bg-white text-gray-800 overflow-y-auto sticky h-screen shadow-lg">
      <nav class="space-y-8 text-sm">
        <te-sidenav-item v-for="(option, i) in options" :key="i" v-bind="option">
        </te-sidenav-item>
      </nav>
    </aside>
    <te-offcanvas v-else v-model="showPanel">
      <nav class="space-y-8 text-sm">
        <te-sidenav-item v-for="(option, i) in options" :key="i" v-bind="option">
        </te-sidenav-item>
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
    options: [
      {
        label: 'Getting Started',
        expanded: true,
        options: [
          {
            label: 'Home',
            linkTo: '/',
            tag: 'router-link'
          },
        ]
      },
      {
        label: 'Components',
        options: [
          {
            label: 'Accordion',
            linkTo: '/accordion',
            tag: 'router-link'
          },
          {
            label: 'Alert',
            linkTo: '/alert',
            tag: 'router-link'
          },
          {
            label: 'Badge',
            linkTo: '/badge',
            tag: 'router-link'
          },
          {
            label: 'Back To Top',
            linkTo: '/back-to-top',
            tag: 'router-link'
          },
          {
            label: 'Buttons',
            linkTo: '/buttons',
            tag: 'router-link'
          },
          {
            label: 'Buttongroup',
            linkTo: '/buttongroup',
            tag: 'router-link'
          },
          {
            label: 'Card',
            linkTo: '/card',
            tag: 'router-link'
          },
          {
            label: 'Carousel',
            linkTo: '/carousel',
            tag: 'router-link'
          },
          {
            label: 'Chips',
            linkTo: '/chips',
            tag: 'router-link'
          },
          {
            label: 'Dropdown',
            linkTo: '/dropdown',
            tag: 'router-link'
          },
          {
            label: 'Listgroup',
            linkTo: '/listgroup',
            tag: 'router-link'
          },
          {
            label: 'Modal',
            linkTo: '/modal',
            tag: 'router-link'
          },
          {
            label: 'Spinner',
            linkTo: '/spinner',
            tag: 'router-link'
          },
          {
            label: 'Stepper',
            linkTo: '/stepper',
            tag: 'router-link'
          },
          {
            label: 'Table',
            linkTo: '/table',
            tag: 'router-link'
          },
          {
            label: 'Notification',
            linkTo: '/notification',
            tag: 'router-link'
          },
          {
            label: 'Offcanvas',
            linkTo: '/offcanvas',
            tag: 'router-link'
          },
          {
            label: 'Timeline',
            linkTo: '/timeline',
            tag: 'router-link'
          },
          {
            label: 'Toast',
            linkTo: '/toast',
            tag: 'router-link'
          },
          {
            label: 'Tooltip',
            linkTo: '/tooltip',
            tag: 'router-link'
          },
          {
            label: 'Icons',
            linkTo: '/icons',
            tag: 'router-link'
          },
          {
            label: 'Rating',
            linkTo: '/rating',
            tag: 'router-link'
          },
        ]
      },
      {
        label: 'Navigation',
        options: [
          {
            label: 'Breadcrumb',
            linkTo: '/breadcrumb',
            tag: 'router-link'
          },
          {
            label: 'Navbar',
            linkTo: '/navbar',
            tag: 'router-link'
          },
          {
            label: 'Pagination',
            linkTo: '/pagination',
            tag: 'router-link'
          },
          {
            label: 'Sidenav',
            linkTo: '/sidenav',
            tag: 'router-link'
          },
          {
            label: 'Tab',
            linkTo: '/tab',
            tag: 'router-link'
          },
        ]
      },
      {
        label: 'Form',
        options:[
          {
            label: 'Date',
            linkTo: '/date',
            tag: 'router-link'
          },
          {
            label: 'Input',
            linkTo: '/input',
            tag: 'router-link'
          },
          {
            label: 'Files',
            linkTo: '/files',
            tag: 'router-link'
          },
          {
            label: 'Range',
            linkTo: '/range',
            tag: 'router-link'
          },
          {
            label: 'Switchable',
            linkTo: '/switchable',
            tag: 'router-link'
          },
          {
            label: 'Select',
            linkTo: '/select',
            tag: 'router-link'
          },
        ]
      },
      {
        label: 'Utilities',
        options: [
          {
            label: 'Directives/Mixins',
            linkTo: '/utilities',
            tag: 'router-link'
          },
        ]
      }
    ],
    showPanel: false,
  }),
}
</script>

<style>

</style>