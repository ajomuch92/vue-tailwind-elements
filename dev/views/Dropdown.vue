<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Dropdown</h1>
    <h1 class="text-lg my-2">Normal</h1>
    <te-dropdown label="Dropdown">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
      <te-dropdown-item disabled>Disabled item</te-dropdown-item>
    </te-dropdown>
    <code-view :code="code[0]" />
    <h1 class="text-lg my-2">Size</h1>
    <te-dropdown label="Small" size="small">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Medium" size="medium">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Large" size="large">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <code-view :code="code[1]" />
    <h1 class="text-lg my-2">Types</h1>
    <te-dropdown label="Normal" type="normal">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Primary" type="primary">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Secondary" type="secondary">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Success" type="success">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Warning" type="warning">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Danger" type="danger">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Pink" type="pink">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Purple" type="purple">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Light" type="light">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <te-dropdown label="Dark" type="dark">
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <code-view :code="code[2]" />
    <h1 class="text-lg my-2">Custom Trigger Slot</h1>
    <te-dropdown label="Dark" type="dark">
      <template #trigger="{active}">
        <span class="bg-red-50 px-2 py-1 cursor-pointer rounded-sm">
          Custom active <te-icon :name="active? 'chevron-up': 'chevron-down'" />
        </span>
      </template>
      <te-dropdown-item>Item 1</te-dropdown-item>
      <te-dropdown-item>Item 2</te-dropdown-item>
      <te-dropdown-item>Item 3</te-dropdown-item>
    </te-dropdown>
    <code-view :code="code[3]" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue'
export default {
  components: { CodeView },
  name: 'Dropdown',
  data: () => ({
    code: [
      `
      <te-dropdown label="Dropdown">
        <te-dropdown-item>Item 1</te-dropdown-item>
        <te-dropdown-item>Item 2</te-dropdown-item>
        <te-dropdown-item>Item 3</te-dropdown-item>
        <te-dropdown-item disabled>Disabled item</te-dropdown-item>
      </te-dropdown>
      `,
      `
      <te-dropdown label="Small" size="small">
        <te-dropdown-item>Item 1</te-dropdown-item>
        <te-dropdown-item>Item 2</te-dropdown-item>
        <te-dropdown-item>Item 3</te-dropdown-item>
      </te-dropdown>
      <te-dropdown label="Medium" size="medium">
        <te-dropdown-item>Item 1</te-dropdown-item>
        <te-dropdown-item>Item 2</te-dropdown-item>
        <te-dropdown-item>Item 3</te-dropdown-item>
      </te-dropdown>
      <te-dropdown label="Large" size="large">
        <te-dropdown-item>Item 1</te-dropdown-item>
        <te-dropdown-item>Item 2</te-dropdown-item>
        <te-dropdown-item>Item 3</te-dropdown-item>
      </te-dropdown>
      `,
      `
      <te-dropdown label="Normal" type="normal">
        <te-dropdown-item>Item 1</te-dropdown-item>
        <te-dropdown-item>Item 2</te-dropdown-item>
        <te-dropdown-item>Item 3</te-dropdown-item>
      </te-dropdown>
      <te-dropdown label="Primary" type="primary">
        <te-dropdown-item>Item 1</te-dropdown-item>
        <te-dropdown-item>Item 2</te-dropdown-item>
        <te-dropdown-item>Item 3</te-dropdown-item>
      </te-dropdown>
      <te-dropdown label="Secondary" type="secondary">
        <te-dropdown-item>Item 1</te-dropdown-item>
        <te-dropdown-item>Item 2</te-dropdown-item>
        <te-dropdown-item>Item 3</te-dropdown-item>
      </te-dropdown>
      <te-dropdown label="Success" type="success">
        <te-dropdown-item>Item 1</te-dropdown-item>
        <te-dropdown-item>Item 2</te-dropdown-item>
        <te-dropdown-item>Item 3</te-dropdown-item>
      </te-dropdown>
      <te-dropdown label="Warning" type="warning">
        <te-dropdown-item>Item 1</te-dropdown-item>
        <te-dropdown-item>Item 2</te-dropdown-item>
        <te-dropdown-item>Item 3</te-dropdown-item>
      </te-dropdown>
      <te-dropdown label="Danger" type="danger">
        <te-dropdown-item>Item 1</te-dropdown-item>
        <te-dropdown-item>Item 2</te-dropdown-item>
        <te-dropdown-item>Item 3</te-dropdown-item>
      </te-dropdown>
      <te-dropdown label="Pink" type="pink">
        <te-dropdown-item>Item 1</te-dropdown-item>
        <te-dropdown-item>Item 2</te-dropdown-item>
        <te-dropdown-item>Item 3</te-dropdown-item>
      </te-dropdown>
      <te-dropdown label="Purple" type="purple">
        <te-dropdown-item>Item 1</te-dropdown-item>
        <te-dropdown-item>Item 2</te-dropdown-item>
        <te-dropdown-item>Item 3</te-dropdown-item>
      </te-dropdown>
      <te-dropdown label="Light" type="light">
        <te-dropdown-item>Item 1</te-dropdown-item>
        <te-dropdown-item>Item 2</te-dropdown-item>
        <te-dropdown-item>Item 3</te-dropdown-item>
      </te-dropdown>
      <te-dropdown label="Dark" type="dark">
        <te-dropdown-item>Item 1</te-dropdown-item>
        <te-dropdown-item>Item 2</te-dropdown-item>
        <te-dropdown-item>Item 3</te-dropdown-item>
      </te-dropdown>
      `,
      `
      <te-dropdown label="Dark" type="dark">
        <template #trigger="{active}">
          <span class="bg-red-50 px-2 py-1 cursor-pointer rounded-sm">
            Custom active <te-icon :name="active? 'chevron-up': 'chevron-down'" />
          </span>
        </template>
        <te-dropdown-item>Item 1</te-dropdown-item>
        <te-dropdown-item>Item 2</te-dropdown-item>
        <te-dropdown-item>Item 3</te-dropdown-item>
      </te-dropdown>
      `
    ]
  })
}
</script>

<style>

</style>