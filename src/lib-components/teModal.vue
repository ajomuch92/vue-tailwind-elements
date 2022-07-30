<template>
  <div v-show="backdropVisible" class="modal fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto modal-backdrop" tabindex="-1" aria-hidden="true">
    <transition name="fade">
      <div v-show="contentVisible" class="modal-dialog relative w-auto pointer-events-none" :class="{'modal-dialog-scrollable': scrollable, 'modal-dialog-centered': centered, ...sizeClass}">
        <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div v-if="!hideHeader" class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <slot name="header">
              <h5 class="text-xl font-medium leading-normal text-gray-800">{{title}}</h5>
            </slot>
            <button
              v-if="showCloseButton"
              type="button"
              class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" 
              aria-label="Close"
              @click="close()"
            />
          </div>
          <div class="modal-body relative p-4">
            <component
              v-if="component"
              :is="component"
              v-bind="props"
              v-on="events"
            />
            <slot v-else name="default" />
          </div>
          <div v-if="!hideFooter"  class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'teModal',
  props: {
    title: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      default: false,
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    hideHeader: {
      type: Boolean,
      default: false,
    },
    hideFooter: {
      type: Boolean,
      default: false,
    },
    scrollable: {
      type: Boolean,
      default: false,
    },
    centered: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
      validator: (value) => ['', 'xl', 'lg', 'sm'].includes(value)
    },
    component: [Object, Function, String],
    events: [Object],
    props: [Object],
  },
  data: () => ({
    backdropVisible: false,
    contentVisible: false,
  }),
  computed: {
    sizeClass() {
      if (this.size.length) {
        return {
          [`modal-${this.size}`]: true
        }
      }
      return {};
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.backdropVisible = true
        setTimeout(() => {
          this.contentVisible = true;
        }, 100)
      } else {
        this.contentVisible = false;
        setTimeout(() => {
          this.backdropVisible = false;
        }, 100)
      }
    },
    backdropVisible(val) {
      if (val) {
        setTimeout(() => {
          this.contentVisible = true;
        }, 100)
      }
    },
  },
  methods: {
    close() {
      this.$emit('close')
      this.$emit('update:visible', false);
      if (this.component) {
        this.contentVisible = false;
        setTimeout(() => {
          this.$destroy();
          this.$el.parentNode.removeChild(this.$el);
        }, 500);
      }
    },
  }
}
</script>

<style scoped>
  .modal-backdrop {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .25s;
  }

  .fade-enter, .fade-leave-to {
    transform: translateY(-50px);
    opacity: 0;
  }
</style>