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
    </div>
    <div class="flex items-center relative">
      <slot name="right" />
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