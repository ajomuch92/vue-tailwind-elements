<template>
  <div class="table-container min-w-full" :class="{'overflow-x-auto': responsive, 'overflow-hidden': !responsive}">
    <table class="min-w-full" :class="{'text-center': centered, 'border': bordered}">
      <thead :class="{'border-b': !borderless, ...headerBackgroundClass}">
        <tr>
          <th v-for="(header, key) in headers" :key="key" scope="col" class="text-sm font-medium px-6" :class="{'text-left': !centered, ...headerCellClass, ...paddingClass}">
            {{header.label||header}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in items" :key="key" :class="rowClass(key)">
          <td v-for="(header, index) in headers" :key="index" class="text-sm text-gray-900 font-medium px-6 whitespace-nowrap" :class="{...paddingClass, 'border-r': bordered}">
            {{item[header.field] || item[header]}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'teTable',
  props: {
    items: {
      type: Array,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
    striped: {
      type: Boolean,
      default: false,
    },
    hoverable: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    centered: {
      type: Boolean,
      default: false,
    },
    borderless: {
      type: Boolean,
      default: false,
    },
    compact: {
      type: Boolean,
      default: false,
    },
    responsive: {
      type: Boolean,
      default: false,
    },
    headerType: {
      type: String,
      default: 'normal',
      validator: (value) => ['normal', 'light', 'dark']
    },
  },
  computed: {
    headerBackgroundClass() {
      return {
        'bg-gray-50': this.headerType === 'light',
        'bg-gray-800': this.headerType === 'dark',
      }
    },
    headerCellClass() {
      return {
        'text-gray-900': this.headerType === 'light',
        'text-white': this.headerType === 'dark',
        'border-r': this.bordered,
      }
    },
    paddingClass () {
      return {
        'py-4': !this.compact,
        'py-2': this.compact,
      }
    }
  },
  methods: {
    rowClass(index) {
      return {
        'border-b': !this.borderless,
        'bg-gray-50': index % 2 === 0 && this.striped,
        'bg-white': index % 2 === 1 && this.striped,
        'transition duration-300 ease-in-out hover:bg-gray-100': this.hoverable,
      }
    }
  }
}
</script>

<style>

</style>