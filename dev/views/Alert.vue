<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Alerts</h1>
    <h1 class="text-lg">Default</h1>
    <code-view :code="code" />
    <te-alert text="Hello world" />
    <h1 class="text-lg">Variants</h1>
    <code-view :code="code2" />
    <te-alert text="Default" />
    <te-alert text="Primary" type="primary" />
    <te-alert text="Success" type="success" />
    <te-alert text="Info" type="info" />
    <te-alert text="Warning" type="warning" />
    <te-alert text="Danger" type="danger" />
    <h1 class="text-lg">Solid</h1>
    <code-view :code="code3" />
    <te-alert text="Default" solid />
    <te-alert text="Primary" type="primary" solid />
    <te-alert text="Success" type="success" solid />
    <te-alert text="Info" type="info" solid />
    <te-alert text="Warning" type="warning" solid />
    <te-alert text="Danger" type="danger" solid />
    <h1 class="text-lg my-1">Show a Alert Globally</h1>
    <div class="w-1/3 my-2">
      <label class="w-1/3">Choose a type</label>
      <te-select class="w-32" v-model="alertTypeSelected" :options="alertTypes" />
      <te-checkbox v-model="solid">Solid?</te-checkbox><br>
      <label>Text</label>
      <te-input v-model="message" />
    </div>
    <div class="flex space-x-2">
      <te-button @click="showAlert('bottom', 'left')">Bottom Start</te-button>
      <te-button @click="showAlert('bottom', 'center')">Bottom Center</te-button>
      <te-button @click="showAlert('bottom', 'right')">Bottom End</te-button>
      <te-button @click="showAlert('top', 'left')">Top Start</te-button>
      <te-button @click="showAlert('top', 'center')">Top Center</te-button>
      <te-button @click="showAlert('top', 'right')">Top End</te-button>
    </div>
    <code-view :code="code4" lang="js" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';

export default {
  name: 'Alert',
  components: { CodeView },
  data: () => ({
    alertTypes: ['normal','primary', 'success', 'warning', 'danger'],
    alertTypeSelected: 'normal',
    solid: false,
    message: 'Hello World!',
    code: '<te-alert text="Hello world" />',
    code2: `
      <te-alert text="Default" />
      <te-alert text="Primary" type="primary" />
      <te-alert text="Success" type="success" />
      <te-alert text="Info" type="info" />
      <te-alert text="Warning" type="warning" />
      <te-alert text="Danger" type="danger" />
    `,
    code3: `
      <te-alert text="Default" solid />
      <te-alert text="Primary" type="primary" solid />
      <te-alert text="Success" type="success" solid />
      <te-alert text="Info" type="info" solid />
      <te-alert text="Warning" type="warning" solid />
      <te-alert text="Danger" type="danger" solid />
    `,
    code4: `
      this.$showAlert({
        position,
        align,
        solid: this.solid,
        timeout: 3000,
        type: this.alertTypeSelected,
        text: this.message
      });
    `
  }),
  methods: {
    showAlert(position, align) {
      this.$showAlert({
        position,
        align,
        solid: this.solid,
        timeout: 3000,
        type: this.alertTypeSelected,
        text: this.message
      });
    }
  }
}
</script>

<style>

</style>