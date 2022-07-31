<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Toast</h1>
    <h1 class="text-lg my-1">Normal</h1>
    <te-toast title="Toast" subtitle="Subtitle" message="This is a toast" />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-toast title="Toast" subtitle="Subtitle" message="This is a toast" />
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Color</h1>
    <div class="w-1/3 my-2">
      <label class="w-1/3">Choose a color</label>
      <te-select v-model="color" :options="colors" />
    </div>
    <te-toast title="Toast" subtitle="Subtitle" message="This is a toast" :color="color" :show-close-button="true" />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-toast title="Toast" subtitle="Subtitle" message="This is a toast" :color="color" :show-close-button="true" @close="..."/>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Light</h1>
    <div class="w-1/3 my-2">
      <label class="w-1/3">Choose a type</label>
      <te-select v-model="type" :options="types" />
    </div>
    <te-toast-light title="Toast" subtitle="Subtitle" :type="type" />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-toast-light title="Toast" subtitle="Subtitle" :type="type" />
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Show a Message Globally</h1>
    <div class="w-1/3 my-2">
      <label class="w-1/3">Choose a type</label>
      <te-select class="w-32" v-model="typeToastSelected" :options="typeToasts" />
    </div>
    <div class="flex space-x-2">
      <te-button @click="showToast('bottom', 'left')">Bottom Start</te-button>
      <te-button @click="showToast('bottom', 'center')">Bottom Center</te-button>
      <te-button @click="showToast('bottom', 'right')">Bottom End</te-button>
      <te-button @click="showToast('top', 'left')">Top Start</te-button>
      <te-button @click="showToast('top', 'center')">Top Center</te-button>
      <te-button @click="showToast('top', 'right')">Top End</te-button>
    </div>
    <pre class="language-markup">
      <code>
        <script type="prism-js">
          const toast = this.$showToast({
            position: 'bottom', // top
            align: 'center', // left, right
            timeout: 10000, // if undefined you can cloase manually
            type: 'normal', //light
            toast: { // same props to pass as a regular toast (normal o light) component
              title: 'Title',
              subtitle: 'subtitle',
              message: 'Message',
              color: 'normal', // primary, success, warning, danger
              type: 'info', // success, warning, danger (only for light toast)
            }
          });
          setTimeout(() => {
            toast.close();
          }, 1500)
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data: () => ({
    colors: ['normal','primary', 'success', 'warning', 'danger'],
    color: 'primary',
    types: ['info', 'success', 'warning', 'danger'],
    typeToasts: ['normal', 'light'],
    type: 'info',
    typeToastSelected: 'normal'
  }),
  methods: {
    showToast(position, align) {
      this.$showToast({
        position,
        align,
        timeout: 10000, // undefined
        type: this.typeToastSelected, //light
        toast: { // same props to pass as a regular toast (normal o light) component
          title: 'Title',
          subtitle: 'subtitle',
          message: 'Message',
          color: 'success'
        }
      });
    }
  }
}
</script>

<style>

</style>