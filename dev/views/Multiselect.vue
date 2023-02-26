<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Multiselect</h1>
    <te-multiselect
      v-model="value"
      :options="options"
      value-field="value"
      ext-field="text"
      :disabled="disabled"
      :single-select="single"
      :show-select-all="showSelectAll"
      :searchable="searchable"
      :visible-items="visibleItems"
      placeholder="Select an option"
      placeholder-search="Type here to search"
    >
      <template v-if="customTemplate" #item="{option, key}">
        Option: {{ option }} Key: {{ key }}
      </template>
    </te-multiselect>
    <div class="mt-1">
      <te-checkbox v-model="single" class="mx-1">Single</te-checkbox>
      <te-checkbox v-model="disabled" class="mx-1">Disabled</te-checkbox>
      <te-checkbox v-model="showSelectAll" class="mx-1">Select All</te-checkbox>
      <te-checkbox v-model="searchable" class="mx-1">Searchable</te-checkbox>
      <te-checkbox v-model="customTemplate" class="mx-1">Custom item template</te-checkbox>
      <label class="mx-1">Visible Items</label>
      <te-input class="inline-block" v-model.number="visibleItems" type="number" />
    </div>
    <p>Value: {{ value }}</p>
    <code-view :code="code[0]" lang="js"/>
    <code-view :code="code[1]" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';

export default {
  name: 'Multiselect',
  components: { CodeView },
  data: () => ({
    single: false,
    disabled: false,
    showSelectAll: false,
    searchable: false,
    value: undefined,
    customTemplate: false,
    visibleItems: 3,
    options: [
      {
        text: 'Option 1',
        value: 1,
      },
      {
        text: 'Option 2',
        value: 2,
      },
      {
        text: 'Option 3',
        value: 3,
      },
      {
        text: 'Option 4',
        value: 4,
      },
      {
        text: 'Option 5',
        value: 5,
      },
      {
        text: 'Option 6',
        value: 6,
      },
      {
        text: 'Option 7',
        value: 7,
      },
      {
        text: 'Option 8',
        value: 8,
      },
      {
        text: 'Option 9',
        value: 9,
      },
      {
        text: 'Option 10',
        value: 10,
      },
    ],
    code: [
      `
      options: [
        {
          text: 'Option 1',
          value: 1,
        },
        {
          text: 'Option 2',
          value: 2,
        },
        {
          text: 'Option 3',
          value: 3,
        },
        {
          text: 'Option 4',
          value: 4,
        },
        {
          text: 'Option 5',
          value: 5,
        },
        {
          text: 'Option 6',
          value: 6,
        },
        {
          text: 'Option 7',
          value: 7,
        },
        {
          text: 'Option 8',
          value: 8,
        },
        {
          text: 'Option 9',
          value: 9,
        },
        {
          text: 'Option 10',
          value: 10,
        },
      ]
      `,
      `
      <te-multiselect
        v-model="value"
        :options="options"
        value-field="value"
        ext-field="text"
        :disabled="disabled"
        :single-select="single"
        :show-select-all="showSelectAll"
        :searchable="searchable"
        :visible-items="visibleItems"
        placeholder="Select an option"
        placeholder-search="Type here to search"
      >
        <template #item="{option, key}">
          Option: {{ option }} Key: {{ key }}
        </template>
      </te-multiselect>
      `,
    ]
  }),
}
</script>

<style>

</style>