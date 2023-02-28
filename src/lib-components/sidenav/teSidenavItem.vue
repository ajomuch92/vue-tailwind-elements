<template>
  <ul class="relative m-0 list-none px-0.2rem">
    <li class="relative cursor-pointer">
      <component :is="tagComputed" v-bind="tagOptions" class="flex h-12 items-center truncate rounded-md w-full hover:bg-blue-50 py-4 pr-6 pl-3 text-md text-gray-600 outline-none transition duration-300 ease-linear" @click="showOptionsHandler">
        <span class="mr-1 h-5 w-5">
          <slot name="icon" />
        </span>
        <span :class="{'font-bold': options.length}">
          <slot name="label">
            {{ label }}
          </slot>
        </span>
        <span v-if="options.length" class="absolute right-0 ml-auto mr-1 transition-transform duration-300 ease-linear motion-reduce:transition-none text-gray-600 dark:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5 transition ease-in-out duration-200"
              :class="{'transform rotate-180': open}">
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd" />
            </svg>
          </span>
      </component>
      <ul v-if="options.length" class="relative m-0 list-none p-0 content" ref="content" :style="styleContent">
        <te-sidenav-item v-for="(option, key) in options" :key="key" v-bind="option" />
      </ul>
    </li>
    <slot name="default" />
  </ul>
</template>

<script>
export default {
  name: 'TeSidenavItem',
  props: {
    label: {
      type: String,
      default: '',
    },
    linkTo: {
      type: String,
      default: undefined,
    },
    target: {
      type: String,
      default: undefined,
    },
    options: {
      type: Array,
      default: () => []
    },
    tag: {
      type: String,
      default: 'a',
      validator: (val) => ['a', 'router-link', 'nuxt-link'].includes(val),
    },
    expanded: {
      type: Boolean,
      default: false,
    },
    activeClass: {
      type: String,
      default: '',
    },
    exact: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    open: false,
    isMounted: false,
  }),
  created() {
    this.open = this.expanded;
  },
  mounted() {
    this.isMounted = true;
  },
  watch: {
    expanded(val) {
      this.open = val;
    },
    open(val) {
      if (val !== this.expanded) {
        this.$emit('update:expanded', val);
      }
    }
  },
  computed: {
    tagComputed() {
      if (this.options.length) return 'button';
      return this.tag;
    },
    tagOptions() {
      if (this.tag === 'a') return { href: this.linkTo, target: this.target };
      return { to: this.linkTo, activeClass: this.activeClass, exact: this.exact }
    },
    styleContent() {
      return this.open && this.isMounted ? { maxHeight: `${this.$refs.content.scrollHeight}px` } : {};
    }
  },
  methods: {
    showOptionsHandler() {
      if (this.options.length) {
        this.open = !this.open;
      }
    }
  }
}
</script>

<style scoped>
  .px-0\.2rem {
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }

  .content {
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }
</style>