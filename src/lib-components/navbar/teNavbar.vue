<template>
  <nav class="
    relative
    w-full
    flex flex-wrap
    items-center
    justify-between
    py-4
    bg-gray-100
    shadow-lg
    navbar navbar-expand-lg navbar-light
    "
    :class="[!dark? 'bg-gray-100': 'bg-gray-900']"
  >
    <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
      <button class="
          navbar-toggler
          text-gray-500
          border-0
          hover:shadow-none hover:no-underline
          py-2
          px-2.5
          bg-transparent
          focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
        " type="button" @click="$emit('toggle-click', $event)">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
            class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
            </path>
          </svg>
      </button>
      <div class="collapse navbar-collapse flex-grow items-center">
        <a class="
            flex
            items-center
            text-gray-900
            hover:text-gray-900
            focus:text-gray-900
            mt-2
            lg:mt-0
            mr-1
          "
          :href="hrefHeader"
        >
          <slot name="brand" />
        </a>
        <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
          <slot name="default" />
        </ul>
      </div>
      <div class="flex items-center relative">
        <slot name="right" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'teNavbar',
  props: {
    hrefHeader : {
      type: String,
      default: '#'
    },
    dark: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style>

</style>