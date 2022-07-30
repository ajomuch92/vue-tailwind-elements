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
    <h1 class="text-lg">Launch Modal(Programmatically)</h1>
    <te-button @click="showModal">Launch</te-button>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <section class="bg-white">
            <h1>{{title}}</h1>
            <te-button @click="$emit('custom', $event)">Emit Event</te-button>
            <te-button @click="$parent.close()">Close</te-button>
          </section>
        </script>
      </code>
    </pre>
    <pre class="language-markup">
      <code>
        <script type="prism-js">
          import TestModal from '../components/ModalTest.vue';

          ...

          methods: {
            showModal() {
              this.$showModal({
                parent: this,
                component: TestModal,
                scrollable: false,
                centered: true,
                size: 'sm',
                props: {
                  title: 'Hello World'
                },
                events: {
                  'custom': (e) => {
                    console.log(e);
                    alert('Event emitted')
                  }
                }
              });
            }
          }
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
import TestModal from '../components/ModalTest.vue';

export default {
  name: 'Modal',
  data: () => ({
    visible: false,
    visible2: false,
    visible3: false,
    visible4: false,
    size: '',
    title: '{{title}}'
  }),
  methods: {
    showModal() {
      this.$showModal({
        parent: this,
        component: TestModal,
        props: {
          title: 'Hello World'
        },
        events: {
          'custom': (e) => {
            console.log(e);
            alert('Event emitted')
          }
        }
      });
    }
  }
}
</script>

<style>

</style>