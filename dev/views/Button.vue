<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Buttons</h1>
    <h1 class="text-lg">Normal</h1>
    <te-button>Button</te-button>
    <code-view :code="code[0]" />
    <h1 class="text-lg">Types</h1>
    <div class="flex space-x-2">
      <te-button button-type="button">Button</te-button>
      <te-button button-type="submit">Submit</te-button>
      <te-button button-type="reset">Reset</te-button>
    </div>
    <code-view :code="code[1]" />
    <h1 class="text-lg">Sizes</h1>
    <div class="flex space-x-2">
      <te-button size="small">Button</te-button>
      <te-button size="medium">Button</te-button>
      <te-button size="large">Button</te-button>
    </div>
    <code-view :code="code[2]" />
    <h1 class="text-lg">Colors</h1>
    <div class="flex space-x-2">
      <te-button size="small" type="normal">Button</te-button>
      <te-button size="small" type="primary">Button</te-button>
      <te-button size="small" type="secondary">Button</te-button>
      <te-button size="small" type="success">Button</te-button>
      <te-button size="small" type="warning">Button</te-button>
      <te-button size="small" type="danger">Button</te-button>
      <te-button size="small" type="pink">Button</te-button>
      <te-button size="small" type="purple">Button</te-button>
      <te-button size="small" type="dark">Button</te-button>
      <te-button size="small" type="light">Button</te-button>
    </div>
    <code-view :code="code[3]" />
    <h1 class="text-lg">Rounded</h1>
    <div class="flex space-x-2">
      <te-button size="small" type="success" rounded>Button</te-button>
      <te-button size="medium" type="success" rounded>Button</te-button>
      <te-button size="large" type="success" rounded>Button</te-button>
    </div>
    <code-view :code="code[4]" />
    <h1 class="text-lg">Outlined</h1>
    <div class="flex space-x-2">
      <te-button size="small" type="warning" rounded outlined>Button</te-button>
      <te-button size="medium" type="primary" rounded outlined>Button</te-button>
      <te-button size="large" type="danger" rounded outlined>Button</te-button>
    </div>
    <code-view :code="code[5]" />
    <h1 class="text-lg">Only Text</h1>
    <div class="flex space-x-2">
      <te-button size="medium" type="warning" only-text>Button</te-button>
      <te-button size="medium" type="primary" only-text>Button</te-button>
      <te-button size="medium" type="danger" only-text>Button</te-button>
    </div>
    <code-view :code="code[6]" />
    <h1 class="text-lg">Uppercase / Shadow</h1>
    <div class="flex space-x-2">
      <te-button size="medium" type="warning" uppercased>Button</te-button>
      <te-button size="medium" type="primary" shadowed>Button</te-button>
    </div>
    <code-view :code="code[7]" />
    <h1 class="text-lg">Loading</h1>
    <div class="flex space-x-2">
      <te-button size="medium" loading>Button</te-button>
      <te-button size="medium" type="light" loading>Button</te-button>
    </div>
    <code-view :code="code[8]" />
    <h1 class="text-lg">Ripple</h1>
    <div class="flex space-x-2">
      <te-button size="medium" ripple>Button</te-button>
    </div>
    <code-view :code="code[9]" />
    <h1 class="text-lg">Icon</h1>
    <div class="flex space-x-2">
      <te-button size="medium" icon rounded>
        <te-icon name="wallet" />
      </te-button>
      <te-button size="medium" icon>
        <te-icon name="wallet" />
      </te-button>
      <te-button size="medium" icon type="light">
        <te-icon name="wallet" />
      </te-button>
      <te-button size="medium" icon only-text>
        <te-icon name="wallet" />
      </te-button>
    </div>
    <code-view :code="code[10]" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue'
export default {
  components: { CodeView },
  name: 'Button',
  data: () => ({
    code: [
      `<te-button>Button</te-button>`,

      `<te-button button-type="button">Button</te-button>
      <te-button button-type="submit">Submit</te-button>
      <te-button button-type="reset">Reset</te-button>`,

      `<te-button size="small">Button</te-button>
      <te-button size="medium">Button</te-button>
      <te-button size="large">Button</te-button>`,

      `<te-button size="small" type="normal">Button</te-button>
      <te-button size="small" type="primary">Button</te-button>
      <te-button size="small" type="secondary">Button</te-button>
      <te-button size="small" type="success">Button</te-button>
      <te-button size="small" type="warning">Button</te-button>
      <te-button size="small" type="danger">Button</te-button>
      <te-button size="small" type="pink">Button</te-button>
      <te-button size="small" type="purple">Button</te-button>
      <te-button size="small" type="dark">Button</te-button>
      <te-button size="small" type="light">Button</te-button>`,

      `<te-button size="small" type="success" rounded>Button</te-button>
      <te-button size="medium" type="success" rounded>Button</te-button>
      <te-button size="large" type="success" rounded>Button</te-button>`,

      `<te-button size="small" type="warning" rounded outlined>Button</te-button>
      <te-button size="medium" type="primary" rounded outlined>Button</te-button>
      <te-button size="large" type="danger" rounded outlined>Button</te-button>`,

      `<te-button size="medium" type="warning" only-text>Button</te-button>
      <te-button size="medium" type="primary" only-text>Button</te-button>
      <te-button size="medium" type="danger" only-text>Button</te-button>`,

      `<te-button size="medium" type="warning" uppercased>Button</te-button>
      <te-button size="medium" type="primary" shadowed>Button</te-button>`,

      `<te-button size="medium" loading>Button</te-button>
      <te-button size="medium" type="light" loading>Button</te-button>`,

      `<te-button size="medium" ripple>Button</te-button>`,

      `<te-button size="medium" icon rounded>
        <te-icon name="wallet" />
      </te-button>
      <te-button size="medium" icon>
        <te-icon name="wallet" />
      </te-button>
      <te-button size="medium" icon type="light">
        <te-icon name="wallet" />
      </te-button>
      <te-button size="medium" icon only-text>
        <te-icon name="wallet" />
      </te-button>`
    ]
  })
}
</script>

<style>

</style>