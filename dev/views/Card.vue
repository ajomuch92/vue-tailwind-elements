<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Cards</h1>
    <h1 class="text-lg">Normal</h1>
    <te-card title="Title">
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi
        tenetur, voluptatibus harum consequuntur alias quaerat excepturi
        temporibus nisi commodi, ex, ratione quae soluta! Saepe alias dolores
        dolorem assumenda totam?
      </p>
      <te-button>Button</te-button>
    </te-card>
    <code-view :code="code[0]" />
    <h1 class="text-lg">With Image</h1>
    <te-card title="Title" img-src="https://mdbootstrap.com/img/new/standard/city/031.jpg">
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi
        tenetur, voluptatibus harum consequuntur alias quaerat excepturi
        temporibus nisi commodi, ex, ratione quae soluta! Saepe alias dolores
        dolorem assumenda totam?
      </p>
      <te-button>Button</te-button>
    </te-card>
    <code-view :code="code[1]" />
    <h1 class="text-lg">With Header / Footer</h1>
    <te-card title="Title" has-header has-footer>
      <template slot="header">
        <span>Card header</span>
      </template>
      <template slot="footer">
        <span>Card footer</span>
      </template>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi
        tenetur, voluptatibus harum consequuntur alias quaerat excepturi
        temporibus nisi commodi, ex, ratione quae soluta! Saepe alias dolores
        dolorem assumenda totam?
      </p>
      <te-button>Button</te-button>
    </te-card>
    <code-view :code="code[2]" />
    <h1 class="text-lg">Borderless</h1>
    <te-card title="Title" img-src="https://mdbootstrap.com/img/new/standard/city/031.jpg" borderless>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi
        tenetur, voluptatibus harum consequuntur alias quaerat excepturi
        temporibus nisi commodi, ex, ratione quae soluta! Saepe alias dolores
        dolorem assumenda totam?
      </p>
      <te-button>Button</te-button>
    </te-card>
    <code-view :code="code[3]" />
    <h1 class="text-lg">Custom width</h1>
    <h1 class="text-md">You can pass a fixed amount of pixels or a percentage</h1>
    <te-card title="Title" width="500px">
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi
        tenetur, voluptatibus harum consequuntur alias quaerat excepturi
        temporibus nisi commodi, ex, ratione quae soluta! Saepe alias dolores
        dolorem assumenda totam?
      </p>
      <te-button>Button</te-button>
    </te-card>
    <code-view :code="code[4]" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';

export default {
  components: { CodeView },
  name: 'Card',
  data: () => ({
    code: [
      `<te-card title="Title">
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi
          tenetur, voluptatibus harum consequuntur alias quaerat excepturi
          temporibus nisi commodi, ex, ratione quae soluta! Saepe alias dolores
          dolorem assumenda totam?
        </p>
        <te-button>Button</te-button>
      </te-card>`,

      `<te-card title="Title" img-src="https://mdbootstrap.com/img/new/standard/city/031.jpg">
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi
          tenetur, voluptatibus harum consequuntur alias quaerat excepturi
          temporibus nisi commodi, ex, ratione quae soluta! Saepe alias dolores
          dolorem assumenda totam?
        </p>
        <te-button>Button</te-button>
      </te-card>`,

      `<te-card title="Title" has-header has-footer>
        <template slot="header">
          <span>Card header</span>
        </template>
        <template slot="footer">
          <span>Card footer</span>
        </template>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi
          tenetur, voluptatibus harum consequuntur alias quaerat excepturi
          temporibus nisi commodi, ex, ratione quae soluta! Saepe alias dolores
          dolorem assumenda totam?
        </p>
        <te-button>Button</te-button>
      </te-card>`,

      `<te-card title="Title" img-src="https://mdbootstrap.com/img/new/standard/city/031.jpg" borderless>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi
          tenetur, voluptatibus harum consequuntur alias quaerat excepturi
          temporibus nisi commodi, ex, ratione quae soluta! Saepe alias dolores
          dolorem assumenda totam?
        </p>
        <te-button>Button</te-button>
      </te-card>`,

      `<te-card title="Title" width="500px">
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi
          tenetur, voluptatibus harum consequuntur alias quaerat excepturi
          temporibus nisi commodi, ex, ratione quae soluta! Saepe alias dolores
          dolorem assumenda totam?
        </p>
        <te-button>Button</te-button>
      </te-card>`
    ]
  })
}
</script>

<style>

</style>