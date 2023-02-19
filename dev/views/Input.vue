<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Text components</h1>
    <h1 class="text-lg my-2">Textarea</h1>
    <te-textarea v-model="textAreaValue" placeholder="Write your text" :rows="4" :disabled="false"/>
    <p>Value: {{textAreaValue}}</p>
    <code-view :code="code[0]" />
    <h1 class="text-lg my-2">Input</h1>
    <te-input type="number" class="my-1" size="small" placeholder="Write a number"/>
    <te-input v-model="inputValue" class="my-1" :disabled="false" placeholder="Write a text"/>
    <te-input type="email" class="my-1" size="large" placeholder="Write an email"/>
    <p>Value: {{inputValue}}</p>
    <code-view :code="code[1]" />
    <h1 class="text-lg my-2">Helper text</h1>
    <te-input type="password" class="my-1" size="medium" placeholder="Password" helper-text="Min 9 characters" />
    <code-view :code="code[2]" />
    <h1 class="text-lg my-2">Invalid</h1>
    <te-input type="password" class="my-1" size="medium" placeholder="Password" helper-text="Min 9 characters" invalid />
    <code-view :code="code[3]" />
    <h1 class="text-lg my-2">Floating</h1>
    <p>When floating is applied, size does not work very well</p>
    <te-input type="password" class="my-1" placeholder="Password" floating helper-text="Min 9 characters"/>
    <code-view :code="code[4]" />
    <h1 class="text-lg my-2">Icons</h1>
    <p>Using same icons from <a class="text-blue-500" href="https://icons.getbootstrap.com/" target="blank">Glyphicons</a></p>
    <te-input type="password" class="my-1" placeholder="Password" right-icon="key" helper-text="Required field" />
    <te-input type="password" class="my-1" placeholder="Password" left-icon="key" />
    <te-input class="my-1" placeholder="Search..." right-icon="search" right-icon-clickable @right-icon-click="()=>{}"/>
    <p>*NOTE: Right or left icon could be clickable, applying the prop left-icon-clickable or right-icon-clickable, both emit an event(right-icon-click or left-icon-click)</p>
    <te-input placeholder="Email" invalid helper-text="Invalid email address" floating right-icon="envelope"/>
    <code-view :code="code[5]" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue'
export default {
  components: { CodeView },
  name: 'Input',
  data: () => ({
    textAreaValue: '',
    inputValue: '',
    code: [
      `
      <te-textarea v-model="textAreaValue" placeholder="Write your text" :rows="4" :disabled="false"/>
      `,
      `
      <te-input type="number" size="small" placeholder="Write a number"/>
      <te-input v-model="inputValue" :disabled="false" placeholder="Write a text"/>
      <te-input type="email" size="large" placeholder="Write an email"/>
      `,
      `
      <te-input type="password" class="my-1" size="medium" placeholder="Password" helper-text="Min 9 characters" />
      `,
      `
      <te-input type="password" class="my-1" size="medium" placeholder="Password" helper-text="Min 9 characters" invalid />
      `,
      `
      <te-input type="password" class="my-1" placeholder="Password" floating helper-text="Min 9 characters" />
      `,
      `
      <te-input type="password" placeholder="Password" right-icon="key" helper-text="Required field" />
      <te-input type="password" placeholder="Password" left-icon="key" />
      <te-input placeholder="Search..." right-icon="search" right-icon-clickable @right-icon-click="..."/>
      <te-input placeholder="Email" invalid helper-text="Invalid email address" floating right-icon="envelope"/>
      `,
    ]
  }),
}
</script>

<style>

</style>