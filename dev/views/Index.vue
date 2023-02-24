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
    <te-scroll-to-top class="bg-blue-500 text-white" parent="main" />
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
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
        ]
      },
      {
        label: 'Components',
        options: [
          {
            label: 'Accordion',
            linkTo: '/accordion',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Alert',
            linkTo: '/alert',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Badge',
            linkTo: '/badge',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Back To Top',
            linkTo: '/back-to-top',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Buttons',
            linkTo: '/buttons',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Buttongroup',
            linkTo: '/buttongroup',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Card',
            linkTo: '/card',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Carousel',
            linkTo: '/carousel',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Chips',
            linkTo: '/chips',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Dropdown',
            linkTo: '/dropdown',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Listgroup',
            linkTo: '/listgroup',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Modal',
            linkTo: '/modal',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Spinner',
            linkTo: '/spinner',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Stepper',
            linkTo: '/stepper',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Table',
            linkTo: '/table',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Notification',
            linkTo: '/notification',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Offcanvas',
            linkTo: '/offcanvas',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Timeline',
            linkTo: '/timeline',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Toast',
            linkTo: '/toast',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Tooltip',
            linkTo: '/tooltip',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Icons',
            linkTo: '/icons',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Rating',
            linkTo: '/rating',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
        ]
      },
      {
        label: 'Navigation',
        options: [
          {
            label: 'Breadcrumb',
            linkTo: '/breadcrumb',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Navbar',
            linkTo: '/navbar',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Pagination',
            linkTo: '/pagination',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Sidenav',
            linkTo: '/sidenav',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Tab',
            linkTo: '/tab',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
        ]
      },
      {
        label: 'Form',
        options:[
          {
            label: 'Date',
            linkTo: '/date',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Input',
            linkTo: '/input',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Files',
            linkTo: '/files',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Range',
            linkTo: '/range',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Switchable',
            linkTo: '/switchable',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
          {
            label: 'Select',
            linkTo: '/select',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
          },
        ]
      },
      {
        label: 'Utilities',
        options: [
          {
            label: 'Directives/Mixins',
            linkTo: '/utilities',
            tag: 'router-link',
            activeClass: 'bg-blue-300'
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