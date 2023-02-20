<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Offcanvas</h1>
    <h1 class="text-lg my-1">Left (by default)</h1>
    <te-switch label="Open left" v-model="showLeft" />
    <te-offcanvas v-model="showLeft">
      Left Panel
    </te-offcanvas>
    <code-view :code="code[0]" />
    <h1 class="text-lg my-1">Right</h1>
    <te-switch label="Open right" v-model="showRight" />
    <te-offcanvas v-model="showRight" position="right">
      Right Panel
    </te-offcanvas>
    <code-view :code="code[1]" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';

export default {
  components: { CodeView },
  name: 'Offcanvas',
  data: () => ({
    showRight: false,
    showLeft: false,
    code: [
      `
      <te-offcanvas v-model="showLeft">
        Left Panel
      </te-offcanvas>
      `,
      `
      <te-offcanvas v-model="showRight" position="right">
        Right Panel
      </te-offcanvas>
      `,
    ]
  }),
}
</script>

<style>

</style>