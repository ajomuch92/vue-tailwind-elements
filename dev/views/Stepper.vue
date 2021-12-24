<template>
  <div class="container p-6">
    <h1 class="text-3xl my-2">Stepper</h1>
    <div class="w-1/3 my-2">
      <label class="w-1/3">Choose a color</label>
      <te-select v-model="color" :options="colors" />
    </div>
    <te-stepper :steps="['Job details', 'Application form', 'Preview', 'Result']" :active-step.sync="activeStep" :color="color" />
    <p>Active page {{activeStep}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-stepper :steps="['Job details', 'Application form', 'Preview', 'Result']" :active-step.sync="activeStep" :color="color" />
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Stepper',
  data: () => ({
    activeStep: 0,
    colors: ['primary', 'secondary', 'success', 'warning', 'danger', 'pink', 'purple', 'dark'],
    color: 'primary'
  }),
}
</script>

<style>

</style>