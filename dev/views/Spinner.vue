<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Spinner</h1>
    <h1 class="text-lg my-2">Normal</h1>
    <te-spinner />
    <code-view :code="code[0]" />
    <h1 class="text-lg my-2">Size</h1>
    <te-spinner size="small" />
    <te-spinner size="medium" />
    <te-spinner size="large" />
    <code-view :code="code[1]" />
    <te-spinner color="normal" />
    <te-spinner color="primary" />
    <te-spinner color="secondary" />
    <te-spinner color="success" />
    <te-spinner color="warning" />
    <te-spinner color="danger" />
    <te-spinner color="pink" />
    <te-spinner color="purple" />
    <te-spinner color="light" />
    <te-spinner color="dark" />
    <code-view :code="code[2]" />
    <h1 class="text-lg my-2">Show a spinner globally</h1>
    <te-button @click="showLoading">Show Loading</te-button>
    <code-view :code="code[3]" lang="js" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';
export default {
  components: { CodeView },
  name: 'Spinner',
  data: () => ({
    code: [
      `
      <te-spinner />
      `,
      `
      <te-spinner size="small" />
      <te-spinner size="medium" />
      <te-spinner size="large" />
      `,
      `
      <te-spinner color="normal" />
      <te-spinner color="primary" />
      <te-spinner color="secondary" />
      <te-spinner color="success" />
      <te-spinner color="warning" />
      <te-spinner color="danger" />
      <te-spinner color="pink" />
      <te-spinner color="purple" />
      <te-spinner color="light" />
      <te-spinner color="dark" />
      `,
      `
      showLoading() {
        const loading = this.$showLoading({
          text: 'Loading...',
          size: 'large',
          type: 'normal', // 'growing'
          timeout: undefined, // number
          color: 'primary' //normal, primary, secondary, success, warning, danger, pink, purple, light, dark
        });
        setTimeout(() => {
          loading.close(); // you can close it manually or after a timeout
        }, 1500);
      }
      `,
    ]
  }),
  methods: {
    showLoading() {
      const loading = this.$showLoading({
        text: 'Loading...',
        size: 'large',
        type: 'normal', // 'growing'
        timeout: undefined, // number
        color: 'purple'
      });
      setTimeout(() => {
        loading.close();
      }, 1500);
    }
  }
}
</script>

<style>

</style>