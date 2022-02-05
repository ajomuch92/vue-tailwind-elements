<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Modal</h1>
    <h1 class="text-lg">Normal</h1>
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
    <h1 class="text-lg">No header / No footer</h1>
    <te-button @click="visible2=true">Launch Modal</te-button>
    <te-modal title="Modal title" :visible.sync="visible2" hide-header hide-footer>
      <p>Modal content</p>
      <te-button @click="visible2=false">Close</te-button>
    </te-modal>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-modal title="Modal title" :visible.sync="visible2" hide-header hide-footer>
            <p>Modal content</p>
            <te-button @click="visible2=false">Close</te-button>
          </te-modal>
        </script>
      </code>
    </pre>
    <h1 class="text-lg">Centered</h1>
    <te-button @click="visible3=true">Launch Modal</te-button>
    <te-modal title="Modal title" :visible.sync="visible3" centered>
      <p>Modal content</p>
    </te-modal>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-modal title="Modal title" :visible.sync="visible3" centered>
            <p>Modal content</p>
          </te-modal>
        </script>
      </code>
    </pre>
    <h1 class="text-lg">Sizes</h1>
    <te-button @click="visible4=true">Launch Modal</te-button>
    <te-select v-model="size" class="my-1" placeholder="Select a size" :options="['xl', 'lg', 'sm']"/>
    <te-modal title="Modal title" :visible.sync="visible4" :size="size">
      <p>Modal content</p>
    </te-modal>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-modal title="Modal title" :visible.sync="visible4" :size="size">
            <p>Modal content</p>
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
    visible2: false,
    visible3: false,
    visible4: false,
    size: ''
  }),
}
</script>

<style>

</style>