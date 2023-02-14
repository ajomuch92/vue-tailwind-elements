<template>
  <span class="dropdown relative" v-click-outside="outsideHandler">
    <button v-if="$slots.trigger" class="trigger" @click="show=!show">
      <slot name="trigger"/>
    </button>
    <te-button v-else class="dropdown-toggle mb-0" :type="type" :size="size" :outlined="outlined" :ripple="ripple" @click="show=!show">
      <div class="flex">
        {{label}}
        <svg
          v-if="!show"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          class="svg-inline--fa fa-caret-down w-2 ml-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
        <svg
          v-else
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-up"
          class="svg-inline--fa fa-caret-up w-2 ml-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
          ></path>
        </svg>
      </div>
    </te-button>
    <ul
      class="
        dropdown-menu
        min-w-max
        absolute
        bg-white
        text-base
        float-left
        py-2
        list-none
        text-left
        rounded-lg
        shadow-lg
        m-0
        -mt-1
        bg-clip-padding
        border-none
        right-0
      "
      :class="{'hidden': !show}"
      @click="listHandler"
    >
      <slot name="default" />
    </ul>
  </span>
</template>

<script>
import clickOutside from '../directives/v-outside';
import teButton from '../teButton.vue';

export default {
  name: 'teDropdown',
  components: { teButton },
  directives: {
    'click-outside': clickOutside
  },
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: (value) => ['normal', 'primary', 'secondary', 'success', 'warning', 'danger', 'pink', 'purple', 'light', 'dark'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium','large'].includes(value)
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    ripple: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    show: false,
  }),
  methods: {
    listHandler(event) {
      if(event?.target?.classList?.contains('dropdown-item')) {
        this.show = false;
      }
    },
    outsideHandler() {
      this.show = false;
    }
  }
}
</script>

<style scoped>
  .trigger {
    all: unset;
  }
</style>