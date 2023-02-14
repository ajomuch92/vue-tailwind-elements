<template>
  <pre :class="`language-${lang} relative`">
    <code>
      {{ code }}
    </code>
    <te-button class="absolute top-5 right-5 flex justify-center items-center" icon @click="copy">
      <te-icon name="clipboard"/>
    </te-button>
  </pre>
</template>

<script>

export default {
  name: 'CodeView',
  props: {
    code: {
      type: String,
      required: true,
    },
    lang: {
      type: String,
      default: 'markup'
    }
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.code);
      this.$showToast(
        {
          position: 'bottom',
          align: 'right',
          timeout: 1000,
          type: 'normal',
          toast: {
            title: 'Copied',
            message: 'Code copied successfully',
            color: 'success',
          }
        }
      );
    },
  }
}
</script>

<style>

</style>