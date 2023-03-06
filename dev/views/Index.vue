<template>
  <div class="w-full flex flex-wrap">
    <aside v-if="isDesktop" class="w-full p-6 sm:w-3/12 lg:w-2/12 bg-white text-gray-800 overflow-y-auto sticky h-screen shadow-lg">
      <sidebar-menu />
    </aside>
    <te-offcanvas v-else v-model="showPanel">
      <sidebar-menu />
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
import SidebarMenu from '../components/SidebarMenu.vue';

export default {
  components: { SidebarMenu },
  name: 'Index',
  mixins: [sizeMixin],
  data: () => ({
    showPanel: false,
  }),
  computed: {
    route() {
      return this.$route.path;
    }
  },
  watch: {
    route() {
      this.showPanel = false;
    }
  },
}
</script>

<style>

</style>