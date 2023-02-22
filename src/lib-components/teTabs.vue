<template>
  <div class="tabs-container" :class="{'flex items-start': vertical}">
    <ul class="nav flex flex-col flex-wrap list-none border-b-0 pl-0 mb-3" :class="{'md:flex-row': !vertical, 'nav-tabs': !pills, 'nav-pills': pills}" role="tablist">
      <li v-for="(title, key) in titles" :key="key" class="nav-item" :class="navItemClass" role="presentation">
        <te-notification v-if="title.notification" v-bind="title.notification" style="margin: 0px;">
          <a class="
              nav-link
              block
              font-medium
              text-xs
              leading-tight
              uppercase
              border-x-0 border-t-0 border-b-2 border-transparent
              px-6
              py-3
              my-2
              cursor-pointer
            "
            :class="{
              'cursor-not-allowed pointer-events-none opacity-50': title.disabled, 
              'active': key===currentValue,
              'hover:border-transparent hover:bg-gray-100 focus:border-transparent': !pills,
              'focus:outline-none focus:ring-0 rounded': pills
            }"
            :id="`tab-${key}`"
            role="tab"
            aria-selected="true"
            @click="currentValue=key"
          >
            {{title.label||title}}
          </a>
        </te-notification>
        <a v-else class="
              nav-link
              block
              font-medium
              text-xs
              leading-tight
              uppercase
              border-x-0 border-t-0 border-b-2 border-transparent
              px-6
              py-3
              my-2
              cursor-pointer
            "
            :class="{
              'cursor-not-allowed pointer-events-none opacity-50': title.disabled, 
              'active': key===currentValue,
              'hover:border-transparent hover:bg-gray-100 focus:border-transparent': !pills,
              'focus:outline-none focus:ring-0 rounded': pills
            }"
            :id="`tab-${key}`"
            role="tab"
            aria-selected="true"
            @click="currentValue=key"
          >
            {{title.label||title}}
          </a>
      </li>
    </ul>
    <div class="tab-content">
      <div v-for="index in titles.length" :key="index" class="tab-pane fade" :class="{'show active': (index-1)===currentValue}" :id="`tab-content-${index-1}`" role="tabpanel">
        <slot :name="`tab-${index}`" />
      </div>
    </div>
  </div>
</template>

<script>
import teNotification from './teNotification.vue';

export default {
  name: 'teTabs',
  components: {
    teNotification
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    titles: {
      type: Array,
      required: true,
    },
    filled: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    pills: {
      type: Boolean,
      default: false,
    }
  },
  data: () => ({
    currentValue: -1,
  }),
  created() {
    this.currentValue = this.value;
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },
    value(val) {
      this.currentValue = val;
    }
  },
  computed: {
    navItemClass() {
      return {
        'flex-auto text-center': this.filled,
        'flex-grow text-center': this.vertical,
        'mx-1': this.pills && !this.vertical,
      }
    }
  }
}
</script>

<style>

</style>