<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Table</h1>
    <h1 class="text-lg my-1">Normal</h1>
    <te-table :items="items" :headers="headers" />
    <code-view :code="code[0]" />
    <p>Header and items definition</p>
    <code-view :code="code[1]" lang="js" />
    <h1 class="text-lg my-1">Compact</h1>
    <te-table :items="items" :headers="headers" compact/>
    <code-view :code="code[2]" />
    <h1 class="text-lg my-1">Hoverable</h1>
    <te-table :items="items" :headers="headers" hoverable/>
    <code-view :code="code[3]" />
    <h1 class="text-lg my-1">Striped</h1>
    <te-table :items="items" :headers="headers" striped/>
    <code-view :code="code[4]" />
    <h1 class="text-lg my-1">Borderless / Centered</h1>
    <te-table :items="items" :headers="headers" borderless centered/>
    <code-view :code="code[5]" />
    <h1 class="text-lg my-1">Bordered</h1>
    <te-table :items="items" :headers="headers" bordered/>
    <code-view :code="code[6]" />
    <h1 class="text-lg my-1">Header Type</h1>
    <p>Normal</p>
    <te-table :items="items" :headers="headers" header-type="normal"/>
    <code-view :code="code[7]" />
    <p>Dark</p>
    <te-table :items="items" :headers="headers" header-type="dark"/>
    <code-view :code="code[8]" />
    <p>Light</p>
    <te-table :items="items" :headers="headers" header-type="light"/>
    <code-view :code="code[9]" />
    <h1 class="text-lg my-1">Responsive</h1>
    <te-table :items="items" :headers="headers" responsive/>
    <code-view :code="code[10]" />
    <h1 class="text-lg my-1">Search</h1>
    <te-input v-model="search" placeholder="Search..."/>
    <te-table :items="items" :headers="headers" :search="search" no-data-label="No Match" />
    <code-view :code="code[11]" />
    <h1 class="text-lg my-1">Row Number</h1>
    <te-table :items="items" :headers="headers" show-row-num row-num-label="No."/>
    <code-view :code="code[12]" />
    <h1 class="text-lg my-1">Pagination</h1>
    <te-table :items="[...items, ...items]" :headers="headers" show-row-num :item-per-page="3"/>
    <code-view :code="code[13]" />
    <h1 class="text-lg my-1">Slots</h1>
    <te-table :items="items" :headers="headers" show-row-num :item-per-page="3">
      <template v-slot:handle="{value}">
        <te-badge type="info" :text="value" />
      </template>
    </te-table>
    <code-view :code="code[14]" />
    <h1 class="text-lg my-1">Subheading</h1>
    <te-table :items="[...items, ...items]" :headers="headers" has-subheading :item-per-page="3" show-row-num>
      <template #subheading>
        <th class="text-center border-t border-b" colspan="4">Subheading</th>
      </template>
    </te-table>
    <code-view :code="code[15]" />
    <h1 class="text-lg my-1">Loading</h1>
    <te-switch v-model="loading" label="Loading" />
    <te-table :items="items" :headers="headers" :loading="loading">
    </te-table>
    <code-view :code="code[16]" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue'
export default {
  components: { CodeView },
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
    search: '',
    loading: false,
    code:[
      `
      <te-table :items="items" :headers="headers" />
      `,
      `
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
      `,
      `
      <te-table :items="items" :headers="headers" compact/>
      `,
      `
      <te-table :items="items" :headers="headers" hoverable/>
      `,
      `
      <te-table :items="items" :headers="headers" striped/>
      `,
      `
      <te-table :items="items" :headers="headers" borderless centered/>
      `,
      `
      <te-table :items="items" :headers="headers" bordered/>
      `,
      `
      <te-table :items="items" :headers="headers" header-type="normal"/>
      `,
      `
      <te-table :items="items" :headers="headers" header-type="dark"/>
      `,
      `
      <te-table :items="items" :headers="headers" header-type="light"/>
      `,
      `
      <te-table :items="items" :headers="headers" responsive/>
      `,
      `
      <te-table :items="items" :headers="headers" :search="search" no-data-label="No Match" />
      `,
      `
      <te-table :items="items" :headers="headers" show-row-num row-num-label="No."/>
      `,
      `
      <te-table :items="[...items, ...items]" :headers="headers" show-row-num :item-per-page="3"/>
      `,
      `
      <te-table :items="items" :headers="headers" show-row-num :item-per-page="3">
        <template v-slot:handle="{value, row, index}">
          <te-badge type="info" :text="value" />
        </template>
      </te-table>
      `,
      `
      <te-table :items="[...items, ...items]" :headers="headers" has-subheading :item-per-page="3" show-row-num>
        <template #subheading>
          <th class="text-center border-t border-b" colspan="4">Subheading</th>
        </template>
      </te-table>
      `,
      `
      <te-switch v-model="loading" label="Loading" />
      `
    ]
  })
}
</script>

<style>

</style>