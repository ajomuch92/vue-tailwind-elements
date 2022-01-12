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
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-card title="Title">
            <p class="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi
              tenetur, voluptatibus harum consequuntur alias quaerat excepturi
              temporibus nisi commodi, ex, ratione quae soluta! Saepe alias dolores
              dolorem assumenda totam?
            </p>
            <te-button>Button</te-button>
          </te-card>
        </script>
      </code>
    </pre>
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
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-card title="Title" img-src="https://mdbootstrap.com/img/new/standard/city/031.jpg">
            <p class="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi
              tenetur, voluptatibus harum consequuntur alias quaerat excepturi
              temporibus nisi commodi, ex, ratione quae soluta! Saepe alias dolores
              dolorem assumenda totam?
            </p>
            <te-button>Button</te-button>
          </te-card>
        </script>
      </code>
    </pre>
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
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
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
        </script>
      </code>
    </pre>
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
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-card title="Title" img-src="https://mdbootstrap.com/img/new/standard/city/031.jpg" borderless>
            <p class="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi
              tenetur, voluptatibus harum consequuntur alias quaerat excepturi
              temporibus nisi commodi, ex, ratione quae soluta! Saepe alias dolores
              dolorem assumenda totam?
            </p>
            <te-button>Button</te-button>
          </te-card>
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style>

</style>