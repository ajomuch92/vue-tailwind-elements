<template>
  <div class="w-full flex">
    <aside class="p-6 sm:w-60 bg-white text-gray-800 overflow-y-auto">
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
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'Index',
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
          label: 'Toast',
          href: '/toast'
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