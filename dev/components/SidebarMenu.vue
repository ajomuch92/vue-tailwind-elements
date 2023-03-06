<template>
  <nav class="space-y-8 text-sm">
    <te-input v-model="search" placeholder="Search..." right-icon="search" right-icon-class="text-xl"/>
    <te-sidenav-item v-for="(option, i) in filteredOptions" :key="i" v-bind="option" :expanded="expanded[option.keyOpen]" @update:expanded="expandHandler(option.keyOpen)">
      <template v-if="option.icon" #icon>
        <te-icon v-bind="option.icon" class="text-base" />
      </template>
    </te-sidenav-item>
    <div class="flex justify-center">
      <te-button icon rounded class="mx-1" @click="goToLinkOnNewTab('https://github.com/ajomuch92/vue-tailwind-elements')">
        <te-icon name="github"/>
      </te-button>
      <te-button icon rounded class="mx-1" type="light" @click="goToLinkOnNewTab('https://www.npmjs.com/package/vue-tailwind-elements')">
        <te-icon class="text-xl text-red-600" name="npm" family="fontAwesome"/>
      </te-button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SidebarMenu',
  data: () => ({
    search: '',
    options: [
      {
        label: 'Home',
        keyOpen: 'start',
        icon: {
          name: 'house'
        },
        linkTo: '/',
        tag: 'router-link',
        activeClass: 'bg-blue-100'
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
    expanded: {
      start: true,
      navigation: false,
      components: false,
      form: false,
      utils: false,
    }
  }),
  computed: {
    filteredOptions() {
      if (this.search.length) {
        const options = this.options.flatMap((r) => r.options).filter((r) => r !== undefined);
        return options.filter((r) => r.label.toLowerCase().includes(this.search.toLowerCase()));
      }
      return this.options;
    },
  },
  watch: {
    search(val) {
      for (const keyExpanded of Object.keys(this.expanded)) {
        this.$set(this.expanded, keyExpanded, !!val);
      }
    },
  },
  methods: {
    expandHandler(key) {
      for (const keyExpanded of Object.keys(this.expanded)) {
        this.$set(this.expanded, keyExpanded, key === keyExpanded)
      }
    },
    goToLinkOnNewTab(url) {
      window.open(url, '_blank');
    },
  }
}
</script>

<style>

</style>