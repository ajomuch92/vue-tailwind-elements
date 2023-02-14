<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">List Group</h1>
    <h1 class="text-lg my-2">Normal</h1>
    <te-list-group :active-item.sync="selectedItem" :items="['First Item', 'Second Item', 'Third Item', {label: 'Disabled Item', disabled: true}]" clickable />
    <p>Active item {{selectedItem}}</p>
    <code-view :code="code[0]" />
    <h1 class="text-lg my-2">Flush</h1>
    <te-list-group :items="['First Item', 'Second Item', 'Third Item', {label: 'Disabled Item', disabled: true}]" :clickable="false" flush />
    <code-view :code="code[1]" />
    <h1 class="text-lg my-2">Templates</h1>
    <te-list-group :items="['First Item', 'Second Item', 'Third Item', {label: 'Disabled Item', disabled: true}]" clickable>
      <template slot="item-0">
        <div class="flex justify-between">
          <span>Home</span>
          <te-icon name="house"/>
        </div>
      </template>
    </te-list-group>
    <code-view :code="code[2]" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';

export default {
  name: 'ListGroup',
  components: { CodeView },
  data: () => ({
    selectedItem: null,
    code: [
      `
      <te-list-group
        :active-item.sync="selectedItem"
        :items="['First Item', 'Second Item', 'Third Item', {label: 'Disabled Item', disabled: true}]" clickable
      />
      `,
      `
      <te-list-group
        :items="['First Item', 'Second Item', 'Third Item', {label: 'Disabled Item', disabled: true}]"
        :clickable="false"
        flush
      />
      `,
      `
      <te-list-group 
        :items="['First Item', 'Second Item', 'Third Item', {label: 'Disabled Item', disabled: true}]" 
        clickable
      >
        <template slot="item-0">
          <div class="flex justify-between">
            <span>Home</span>
            <te-icon name="house"/>
          </div>
        </template>
      </te-list-group>
      `,
    ],
  }),
}
</script>

<style>

</style>