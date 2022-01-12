<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Select controls</h1>
    <h1 class="text-lg">Single</h1>
    <te-select v-model="value" :options="options1" placeholder="Select One"/>
    <p>{{value}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-select v-model="value" :options="options1" placeholder="Select One"/>
        </script>
      </code>
    </pre>
    <te-select v-model="valueSingle" :options="options2" placeholder="Select One" value-field="id" display-field="label"/>
    <p>{{valueSingle}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-select v-model="valueSingle" :options="options2" placeholder="Select One" value-field="id" display-field="label"/>
        </script>
      </code>
    </pre>
    <te-multiple-select v-model="valueMultiple" :options="options3"/>
    <p class="pb-8">{{valueMultiple}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-multiple-select v-model="valueMultiple" :options="options3"/>
        </script>
      </code>
    </pre>

  </div>
</template>

<script>
export default {
  name: 'Selects',
  data: () => ({
    valueSingle: '',
    value: '',
    valueMultiple: [],
    options1 : ['Male', 'Female', 'Other'],
    options2: [
      {
        id: 1,
        label: 'America'
      },
      {
        id: 2,
        label: 'Asia'
      },
      {
        id: 3,
        label: 'Africa'
      },
      {
        id: 4,
        label: 'Europe'
      },
      {
        id: 5,
        label: 'Oceania'
      },
    ],
    options3: ['Volvo', 'Saab', 'Mercedes', 'Audi']
  })
}
</script>

<style>

</style>