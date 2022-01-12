<template>
  <div class="flex" :class="alignClass">
    <nav>
      <ul class="flex list-style-none">
        <li class="page-item">
          <a
            class="page-link relative block rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none cursor-pointer"
            :class="{'pointer-events-none': currentPage==1||pages==0, ...sizeClass}"
            @click="currentPage--"
          >
            <span v-if="!showIcons">{{labelPrev}}</span>
            <span v-else aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="page in displayedPages" :key="page" class="page-item">
          <a
            class="page-link relative block rounded border-0 bg-transparent outline-none transition-all duration-300 rounded focus:shadow-none cursor-pointer"
            :class="{
              'bg-blue-500 text-white': page===currentPage, 
              'text-gray-800 hover:text-gray-800 hover:bg-gray-200': page!==currentPage,
              'rounded-full': page===currentPage && rounded,
              ...sizeClass
            }"
            @click="currentPage=page"
          >
            {{page}}
          </a>
        </li>
        <li class="page-item">
          <a
            class="page-link relative block rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none cursor-pointer"
            :class="{'pointer-events-none': currentPage==pages||pages==0, ...sizeClass}"
            @click="currentPage++"
          >
            <span v-if="!showIcons">{{labelNext}}</span>
            <span v-else aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'tePagination',
  props: {
    pages: {
      type: Number,
      default: 3
    },
    activePage: {
      type: Number,
      default: 1,
      validator: value => value > 0
    },
    pagesToShow: {
      type: Number,
      default: 3,
    },
    showIcons: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium','large'].includes(value)
    },
    position: {
      type: String,
      default: 'center',
      validator: (value) => ['left', 'center','right'].includes(value)
    },
    labelNext: {
      type: String,
      default: 'Next'
    },
    labelPrev: {
      type: String,
      default: 'Previous'
    },
  },
  data: () => ({
    currentPage: 1,
    displayedPages: [],
  }),
  created() {
    this.currentPage = this.activePage;
    this.setInitialPages();
  },
  watch: {
    currentPage(val, old) {
      this.$emit('update:activePage', val);
      const index = this.displayedPages.indexOf(val);
      if (index === -1 && old < val) {
        this.setMorePages()
      } else if (index === -1 && old > val) {
        this.setLessPages();
      }
    },
    activePage(val) {
      this.currentPage = val;
    },
    pages() {
      this.setInitialPages();
      this.currentPage = 1;
    },
    pagesToShow() {
      this.setInitialPages();
      this.currentPage = 1;
    }
  },
  computed: {
    alignClass() {
      return {
        'justify-center': this.position === 'center',
        'justify-end': this.position === 'right',
        'justify-start': this.position === 'lett',
      }
    },
    sizeClass() {
      return {
        'text-sm py-1 px-2': this.size === 'small',
        'py-1.5 px-3': this.size === 'medium',
        'text-xl py-3 px-6': this.size === 'large',
      }
    }
  },
  methods: {
    setInitialPages() {
      this.displayedPages = Array.from({ length: this.pagesToShow }, (_, i) => i + this.currentPage);
    },
    setMorePages() {
      const pages = []
      const initial = this.currentPage - this.pagesToShow + 1
      for(let i = initial; i <= this.currentPage; i++ ) {
        pages.push(i);
      }
      this.displayedPages = pages;
    },
    setLessPages() {
      const pages = []
      const end = this.currentPage + this.pagesToShow
      for(let i = this.currentPage; i < end; i++ ) {
        pages.push(i);
      }
      this.displayedPages = pages;
    }
  }
}
</script>

<style>

</style>