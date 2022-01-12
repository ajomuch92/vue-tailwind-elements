<template>
  <div class="offcanvas fixed bottom-0 flex flex-col max-w-full bg-white bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 border-none w-96"
    :class="getClass"
    tabindex="-1"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header flex items-center justify-between p-4">
      <h5 class="offcanvas-title mb-0 leading-normal font-semibold">{{title}}</h5>
      <button type="button" class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" aria-label="Close" @click="visible=false" />
    </div>
    <div class="offcanvas-body flex-grow p-4 overflow-y-auto">
      <slot name="default" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'teOffcanvas',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'left',
      validator: (value) => ['right', 'left'].includes(value)
    }
  },
  data: () => ({
    visible: false,
    backdrop: undefined,
  }),
  created() {
    this.visible = this.value;
  },
  watch: {
    visible(val) {
      if (val) {
        this.backdrop = document.createElement('div');
        this.backdrop.className = 'offcanvas-backdrop fade show';
        document.body.appendChild(this.backdrop);
      } else {
        document.body.removeChild(this.backdrop);
        this.backdrop = undefined;
      }
      this.$emit('input', val);
    },
    value(val) {
      this.visible = val;
    }
  },
  computed: {
    getClass() {
      return {
        'show': this.visible,
        'offcanvas-start top-0 left-0': this.position === 'left',
        'offcanvas-end top-0 right-0': this.position === 'right',
      };
    }
  }
}
</script>

<style>

</style>