<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Stepper</h1>
    <te-stepper :steps="steps" v-model="activeStep">
      <template #step-1>
        <p class="text-xl">Step 1 content</p>
      </template>
      <template #step-2>
        <p class="text-xl">Step 2 content</p>
      </template>
      <template #step-3>
        <p class="text-xl">Step 3 content</p>
      </template>
      <template #step-4>
        <p class="text-xl">Step 4 content</p>
      </template>
    </te-stepper>
    <p>Active page {{activeStep}}</p>
    <code-view :code="code[0]" lang="js" />
    <code-view :code="code[1]" />
    <h1 class="text-3xl my-2">Disable steps</h1>
    <te-stepper :steps="stepsDisabled" />
    <code-view :code="code[2]" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';

export default {
  name: 'Stepper',
  components: { CodeView },
  data: () => ({
    activeStep: 0,
    steps: [
      {
        label: 'Job details',
      },
      {
        label: 'Application form',
      },
      {
        label: 'Preview',
      },
      {
        label: 'Result',
      },
    ],
    stepsDisabled: [
      {
        label: 'Job details',
      },
      {
        label: 'Application form',
        disabled: true,
      },
      {
        label: 'Preview',
      },
      {
        label: 'Result',
      },
    ],
    code: [
      `
      steps: [
        {
          label: 'Job details',
        },
        {
          label: 'Application form',
          disabled: true,
        },
        {
          label: 'Preview',
        },
        {
          label: 'Result',
        },
      ]
      `,
      `
      <te-stepper :steps="steps" v-model="activeStep">
        <template #step-1>
          <p class="text-xl">Step 1 content</p>
        </template>
        <template #step-2>
          <p class="text-xl">Step 2 content</p>
        </template>
        <template #step-3>
          <p class="text-xl">Step 3 content</p>
        </template>
        <template #step-4>
          <p class="text-xl">Step 4 content</p>
        </template>
      </te-stepper>
      `,
      `<te-stepper :steps="['Job details', 'Application form', 'Preview', 'Result']" :disabled="[false, true, false, false]" />`
    ]
  }),
}
</script>

<style>

</style>