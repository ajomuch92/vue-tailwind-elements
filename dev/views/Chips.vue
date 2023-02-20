<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Chips</h1>
    <div class="flex items-center justify-around">
      <te-chip size="small">Hello World</te-chip>
      <te-chip size="medium">Hello World</te-chip>
      <te-chip size="large">Hello World</te-chip>
      <te-chip size="medium" img-url="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg">Hello World</te-chip>
      <te-chip closable>Hello World</te-chip>
      <te-chip closable>
        Custom Icon
        <te-icon class="text-xl" name="trash2" slot="icon" />
      </te-chip>
    </div>
    <code-view :code="code" />
    <h1 class="text-lg my-1">Types</h1>
    <div class="flex items-center justify-around">
      <te-chip size="small" type="normal">Hello World</te-chip>
      <te-chip size="small" type="primary">Hello World</te-chip>
      <te-chip size="small" type="secondary">Hello World</te-chip>
      <te-chip size="small" type="success">Hello World</te-chip>
      <te-chip size="small" type="warning">Hello World</te-chip>
      <te-chip size="small" type="danger">Hello World</te-chip>
      <te-chip size="small" type="pink">Hello World</te-chip>
      <te-chip size="small" type="purple">Hello World</te-chip>
      <te-chip size="small" type="light">Hello World</te-chip>
      <te-chip size="small" type="dark">Hello World</te-chip>
    </div>
    <code-view :code="code2" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';

export default {
  components: { CodeView },
  name: 'Chips',
  data: () => ({
    code: `
      <te-chip size="small">Hello World</te-chip>
      <te-chip size="medium">Hello World</te-chip>
      <te-chip size="large">Hello World</te-chip>
      <te-chip size="medium" img-url="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg">Hello World</te-chip>
      <te-chip closable>Hello World</te-chip>
      <te-chip closable type="primary" @close="...">Hello World</te-chip>
      <te-chip closable>
        Custom Icon
        <te-icon class="text-xl" name="trash2" slot="icon" />
      </te-chip>
    `,
    code2: `
      <te-chip size="small" type="normal">Hello World</te-chip>
      <te-chip size="small" type="primary">Hello World</te-chip>
      <te-chip size="small" type="secondary">Hello World</te-chip>
      <te-chip size="small" type="success">Hello World</te-chip>
      <te-chip size="small" type="warning">Hello World</te-chip>
      <te-chip size="small" type="danger">Hello World</te-chip>
      <te-chip size="small" type="pink">Hello World</te-chip>
      <te-chip size="small" type="purple">Hello World</te-chip>
      <te-chip size="small" type="light">Hello World</te-chip>
      <te-chip size="small" type="dark">Hello World</te-chip>
    `,
  })
}
</script>

<style>

</style>