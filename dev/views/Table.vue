<template>
  <div class="container p-6">
    <h1 class="text-3xl my-2">Table</h1>
    <h1 class="text-lg my-1">Normal</h1>
    <te-table :items="items" :headers="headers" />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-table :items="items" :headers="headers" />
        </script>
      </code>
    </pre>
    <p>Header and items definition</p>
    <pre class="language-javascript">
      <code>
        <script type="prism-javascript">
          data: () => ({
            headers: [
              {
                label: 'First',
                field: 'first',
              },
              {
                label: 'Last',
                field: 'last',
              },
              {
                label: 'Handle',
                field: 'handle',
              },
            ],
            items: [
              {
                first: 'Mark',
                last: 'Otto',
                handle: '@mdo'
              },
              {
                first: 'Jacob',
                last: 'Thornton',
                handle: '@fat'
              },
              {
                first: 'Larry',
                last: 'Wild',
                handle: '@larwil'
              },
            ]
          })
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Compact</h1>
    <te-table :items="items" :headers="headers" compact/>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-table :items="items" :headers="headers" compact/>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Hoverable</h1>
    <te-table :items="items" :headers="headers" hoverable/>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-table :items="items" :headers="headers" hoverable/>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Striped</h1>
    <te-table :items="items" :headers="headers" striped/>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-table :items="items" :headers="headers" striped/>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Borderless / Centered</h1>
    <te-table :items="items" :headers="headers" borderless centered/>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-table :items="items" :headers="headers" borderless centered/>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Bordered</h1>
    <te-table :items="items" :headers="headers" bordered/>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-table :items="items" :headers="headers" bordered/>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Header Type</h1>
    <p>Normal</p>
    <te-table :items="items" :headers="headers" header-type="normal"/>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-table :items="items" :headers="headers" header-type="normal"/>
        </script>
      </code>
    </pre>
    <p>Dark</p>
    <te-table :items="items" :headers="headers" header-type="dark"/>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-table :items="items" :headers="headers" header-type="dark"/>
        </script>
      </code>
    </pre>
    <p>Light</p>
    <te-table :items="items" :headers="headers" header-type="light"/>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-table :items="items" :headers="headers" header-type="light"/>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Responsive</h1>
    <te-table :items="items" :headers="headers" responsive/>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-table :items="items" :headers="headers" responsive/>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Search</h1>
    <te-input v-model="search" placeholder="Search..."/>
    <te-table :items="items" :headers="headers" :search="search" no-data-label="No Match" />
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-table :items="items" :headers="headers" :search="search" no-data-label="No Match" />
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Row Number</h1>
    <te-table :items="items" :headers="headers" show-row-num row-num-label="No."/>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-table :items="items" :headers="headers" show-row-num row-num-label="No."/>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Pagination</h1>
    <te-table :items="[...items, ...items]" :headers="headers" show-row-num :item-per-page="3"/>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-table :items="[...items, ...items]" :headers="headers" show-row-num :item-per-page="3"/>
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data: () => ({
    headers: [
      {
        label: 'First',
        field: 'first',
      },
      {
        label: 'Last',
        field: 'last',
      },
      {
        label: 'Handle',
        field: 'handle',
      },
    ],
    items: [
      {
        first: 'Mark',
        last: 'Otto',
        handle: '@mdo'
      },
      {
        first: 'Jacob',
        last: 'Thornton',
        handle: '@fat'
      },
      {
        first: 'Larry',
        last: 'Wild',
        handle: '@larwil'
      },
    ],
    search: ''
  })
}
</script>

<style>

</style>