<template>
  <div class="container p-6">
    <h1 class="text-3xl my-2">Modal</h1>
    <te-button @click="visible=true">Launch Modal</te-button>
    <te-modal title="Modal title" :visible.sync="visible" :show-close-button="true">
      <p>Modal content</p>
      <template slot="footer">
        <te-button type="success" @click="visible=false">Accept</te-button>
      </template>
    </te-modal>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-modal title="Modal title" :visible.sync="visible" :show-close-button="true">
            <p>Modal content</p>
            <template slot="footer">
              <te-button type="success" @click="visible=false">Accept</te-button>
            </template>
          </te-modal>
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data: () => ({
    visible: false,
  }),
}
</script>

<style>

</style>