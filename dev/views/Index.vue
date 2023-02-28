<template>
  <div class="w-full flex flex-wrap">
    <aside v-if="isDesktop" class="w-full p-6 sm:w-3/12 lg:w-2/12 bg-white text-gray-800 overflow-y-auto sticky h-screen shadow-lg">
      <nav class="space-y-8 text-sm">
        <te-sidenav-item v-for="(option, i) in options" :key="i" v-bind="option" :expanded="expanded[option.keyOpen]" @update:expanded="expandHandler(option.keyOpen)">
          <template v-if="option.icon" #icon>
            <te-icon v-bind="option.icon" class="text-base" />
          </template>
        </te-sidenav-item>
      </nav>
    </aside>
    <te-offcanvas v-else v-model="showPanel">
      <nav class="space-y-8 text-sm">
        <te-sidenav-item v-for="(option, i) in options" :key="i" v-bind="option" :expanded="expanded[option.keyOpen]" @update:expanded="expandHandler(option.keyOpen)">
          <template v-if="option.icon" #icon>
            <te-icon v-bind="option.icon" class="text-base" />
          </template>
        </te-sidenav-item>
      </nav>
    </te-offcanvas>
    <main id="main" class="w-full px-4 lg:w-10/12 sm:pr-10 lg:pr-4 overflow-y-auto sticky h-screen">
      <router-view />
      <te-button v-if="isMobile" class="absolute right-0 top-7" @click="showPanel=!showPanel" only-text>
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
        keyOpen: 'start',
        icon: {
          name: 'house'
        },
        options: [
          {
            label: 'Home',
            linkTo: '/',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
        ]
      },
      {
        label: 'Components',
        icon: {
          name: 'boxes'
        },
        keyOpen: 'components',
        options: [
          {
            label: 'Accordion',
            linkTo: '/accordion',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Alert',
            linkTo: '/alert',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Badge',
            linkTo: '/badge',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Back To Top',
            linkTo: '/back-to-top',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Buttons',
            linkTo: '/buttons',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Buttongroup',
            linkTo: '/buttongroup',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Card',
            linkTo: '/card',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Carousel',
            linkTo: '/carousel',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Chips',
            linkTo: '/chips',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Dropdown',
            linkTo: '/dropdown',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Listgroup',
            linkTo: '/listgroup',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Modal',
            linkTo: '/modal',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Spinner',
            linkTo: '/spinner',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Stepper',
            linkTo: '/stepper',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Table',
            linkTo: '/table',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Notification',
            linkTo: '/notification',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Offcanvas',
            linkTo: '/offcanvas',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Timeline',
            linkTo: '/timeline',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Toast',
            linkTo: '/toast',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Tooltip',
            linkTo: '/tooltip',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Icons',
            linkTo: '/icons',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Rating',
            linkTo: '/rating',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
        ]
      },
      {
        label: 'Navigation',
        keyOpen: 'navigation',
        icon: {
          name: 'rocket-takeoff'
        },
        options: [
          {
            label: 'Breadcrumb',
            linkTo: '/breadcrumb',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Navbar',
            linkTo: '/navbar',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Pagination',
            linkTo: '/pagination',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Sidenav',
            linkTo: '/sidenav',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Tab',
            linkTo: '/tab',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
        ]
      },
      {
        label: 'Form',
        keyOpen: 'form',
        icon: {
          name: 'check2-square'
        },
        options:[
          {
            label: 'Date',
            linkTo: '/date',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Input',
            linkTo: '/input',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Files',
            linkTo: '/files',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Multiselect',
            linkTo: '/multiselect',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Range',
            linkTo: '/range',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Switchable',
            linkTo: '/switchable',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
          {
            label: 'Select',
            linkTo: '/select',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
        ]
      },
      {
        label: 'Utilities',
        keyOpen: 'utils',
        icon: {
          name: 'tools'
        },
        options: [
          {
            label: 'Directives/Mixins',
            linkTo: '/utilities',
            tag: 'router-link',
            activeClass: 'bg-blue-100'
          },
        ]
      }
    ],
    showPanel: false,
    expanded: {
      start: true,
      navigation: false,
      components: false,
      form: false,
      utils: false,
    }
  }),
  methods: {
    expandHandler(key) {
      for (const keyExpanded of Object.keys(this.expanded)) {
        this.$set(this.expanded, keyExpanded, key === keyExpanded)
      }
    }
  }
}
</script>

<style>

</style>