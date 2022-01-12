<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Date Picker</h1>
    <p>Emit a datetime value</p>
    <te-date-picker v-model="date1" :disabled="false" placeholder="Pick a date"/>
    <p>Value {{date1}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-date-picker v-model="date1" :disabled="false" placeholder="Pick a date"/>
        </script>
      </code>
    </pre>
    <h1 class="text-3xl my-2">Time Picker</h1>
    <p>Emit a timestamp value</p>
    <te-time-picker v-model="time1" :disabled="false"/>
    <p>Value {{time1}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-time-picker v-model="time1" :disabled="false"/>
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Date',
  data: () => ({
    date1: null,
    time1: null
  }),
}
</script>

<style>

</style>