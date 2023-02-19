<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Switchable components</h1>
    <h1 class="text-lg">Checkbox</h1>
    <te-checkbox v-model="value1" label="Checkbox" />
    <p>{{value1}}</p>
    <code-view :code="code[0]" />
    <h1 class="text-lg">Checkbox with slot</h1>
    <te-checkbox v-model="value1">
      <template v-slot:default="{selected}">
        <p v-if="selected">:)</p>
        <p v-else>:(</p>
      </template>
    </te-checkbox>
    <p>{{value1}}</p>
    <code-view :code="code[1]" />
    <h1 class="text-lg">Switch</h1>
    <te-switch v-model="value2" class="pl-5" label="Switch" />
    <p>{{value2}}</p>
    <code-view :code="code[2]" />
    <h1 class="text-lg">Switch with slot</h1>
    <te-switch v-model="value2">
      <template v-slot:default="{selected}">
        <p v-if="selected">:)</p>
        <p v-else>:(</p>
      </template>
    </te-switch>
    <p>{{value2}}</p>
    <code-view :code="code[3]" />
    <h1 class="text-lg">Radio</h1>
    <div class="flex flex-col">
      <te-radio v-model="value3" native-value="M" label="Male"/>
      <te-radio v-model="value3" native-value="F" label="Female"/>
      <te-radio v-model="value3" native-value="O" label="Other"/>
    </div>
    <p>{{value3}}</p>
    <code-view :code="code[4]" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';

export default {
  components: { CodeView },
  name: 'Switchable',
  data: () => ({
    value1: false,
    value2: false,
    value3: '',
    code: [
      `
      <te-checkbox v-model="value1" label="Checkbox" />
      `,
      `
      <te-checkbox v-model="value1">
        <template v-slot:default="{selected}">
          <p v-if="selected">:)</p>
          <p v-else>:(</p>
        </template>
      </te-checkbox>
      `,
      `
      <te-switch v-model="value2" class="pl-5" label="Switch" />
      `,
      `
      <te-switch v-model="value2">
        <template v-slot:default="{selected}">
          <p v-if="selected">:)</p>
          <p v-else>:(</p>
        </template>
      </te-switch>
      `,
      `
      <te-radio v-model="value3" native-value="M" label="Male"/>
      <te-radio v-model="value3" native-value="F" label="Female"/>
      <te-radio v-model="value3" native-value="O" label="Other"/>
      `,
    ],
  })
}
</script>

<style>

</style>