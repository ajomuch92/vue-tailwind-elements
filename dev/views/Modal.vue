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
    <code-view :code="code[0]" />
    <h1 class="text-lg">No header / No footer</h1>
    <te-button @click="visible2=true">Launch Modal</te-button>
    <te-modal title="Modal title" :visible.sync="visible2" hide-header hide-footer>
      <p>Modal content</p>
      <te-button @click="visible2=false">Close</te-button>
    </te-modal>
    <code-view :code="code[1]" />
    <h1 class="text-lg">Centered</h1>
    <te-button @click="visible3=true">Launch Modal</te-button>
    <te-modal title="Modal title" :visible.sync="visible3" centered>
      <p>Modal content</p>
    </te-modal>
    <code-view :code="code[2]" />
    <h1 class="text-lg">Sizes</h1>
    <te-button @click="visible4=true">Launch Modal</te-button>
    <te-select v-model="size" class="my-1" placeholder="Select a size" :options="['xl', 'lg', 'sm']"/>
    <te-modal title="Modal title" :visible.sync="visible4" :size="size">
      <p>Modal content</p>
    </te-modal>
    <code-view :code="code[3]" />
    <h1 class="text-lg">Launch Modal(Programmatically)</h1>
    <te-button @click="showModal">Launch</te-button>
    <code-view :code="code[4]" />
    <code-view :code="code[5]" lang="js" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';
import TestModal from '../components/ModalTest.vue';

export default {
  components: { CodeView },
  name: 'Modal',
  data: () => ({
    visible: false,
    visible2: false,
    visible3: false,
    visible4: false,
    size: '',
    title: '{{title}}',
    code: [
      `
      <te-modal title="Modal title" :visible.sync="visible" :show-close-button="true">
        <p>Modal content</p>
        <template slot="footer">
          <te-button type="success" @click="visible=false">Accept</te-button>
        </template>
      </te-modal>
      `,
      `
      <te-modal title="Modal title" :visible.sync="visible2" hide-header hide-footer>
        <p>Modal content</p>
        <te-button @click="visible2=false">Close</te-button>
      </te-modal>
      `,
      `
      <te-modal title="Modal title" :visible.sync="visible3" centered>
        <p>Modal content</p>
      </te-modal>
      `,
      `
      <te-modal title="Modal title" :visible.sync="visible4" :size="size">
        <p>Modal content</p>
      </te-modal>
      `,
      `
      <section class="bg-white">
        <h1>{{title}}</h1>
        <te-button @click="$emit('custom', $event)">Emit Event</te-button>
        <te-button @click="$parent.close()">Close</te-button>
      </section>
      `,  
      `
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
      `, 
    ]
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