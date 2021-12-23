<template>
  <div class="modal fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto" :class="{'show': visible, 'hidden': !visible}" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog relative w-auto pointer-events-none">
      <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
        <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
          <slot name="header">
            <h5 class="text-xl font-medium leading-normal text-gray-800">{{title}}</h5>
          </slot>
          <button
            v-if="showCloseButton"
            type="button"
            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" 
            aria-label="Close"
            @click="$emit('update:visible', false)"
          />
        </div>
        <div class="modal-body relative p-4">
          <slot name="default" />
        </div>
        <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
          <slot name="footer" />
        </div>
      </div>
    </div>
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
    }
  },
  data: () => ({
    backdrop: undefined
  }),
  watch: {
    visible(val) {
      if (val) {
        this.backdrop = document.createElement('div');
        this.backdrop.className = 'modal-backdrop fade show';
        document.body.appendChild(this.backdrop);
      } else {
        document.body.removeChild(this.backdrop);
        this.backdrop = undefined;
      }
    }
  }
}
</script>

<style>

</style>