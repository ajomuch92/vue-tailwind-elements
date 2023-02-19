<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Stepper</h1>
    <div class="w-1/3 my-2">
      <label class="w-1/3">Choose a color</label>
      <te-select v-model="color" :options="colors" />
    </div>
    <te-stepper :steps="['Job details', 'Application form', 'Preview', 'Result']" :active-step.sync="activeStep" :color="color" />
    <p>Active page {{activeStep}}</p>
    <code-view :code="code[0]" />
    <h1 class="text-3xl my-2">Disable steps</h1>
    <te-stepper :steps="['Job details', 'Application form', 'Preview', 'Result']" :disabled="[false, true, false, false]" />
    <code-view :code="code[1]" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';

export default {
  name: 'Stepper',
  components: { CodeView },
  data: () => ({
    activeStep: 0,
    colors: ['primary', 'secondary', 'success', 'warning', 'danger', 'pink', 'purple', 'dark'],
    color: 'primary',
    code: [
      `<te-stepper :steps="['Job details', 'Application form', 'Preview', 'Result']" :active-step.sync="activeStep" :color="color" />`,
      `<te-stepper :steps="['Job details', 'Application form', 'Preview', 'Result']" :disabled="[false, true, false, false]" />`
    ]
  }),
}
</script>

<style>

</style>