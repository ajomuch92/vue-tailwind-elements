<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Date Picker</h1>
    <h1 class="text-lg my-1">Normal</h1>
    <p>Emit a datetime value. You can change the month and year manually</p>
    <te-date-picker v-model="date1" :disabled="false" placeholder="Pick a date"/>
    <p>Value {{date1}}</p>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-date-picker v-model="date1" :disabled="false" placeholder="Pick a date"/>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Not allowed dates</h1>
    <te-date-picker placeholder="Pick a date" :not-allowed-dates="notAllowedDates"/>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-date-picker placeholder="Pick a date" :not-allowed-dates="[new Date(2022, 0, 13), new Date(2022, 1, 1)]"/>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Min and Max Date</h1>
    <te-date-picker placeholder="Pick a date" :min-date="new Date(2022, 0, 15)" :max-date="new Date(2022, 3, 16)"/>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-date-picker placeholder="Pick a date" :not-allowed-dates="[new Date(2022, 0, 13), new Date(2022, 1, 1)]"/>
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
    time1: null,
    notAllowedDates: [new Date(2022, 0, 13), new Date(2022, 1, 1)]
  }),
}
</script>

<style>

</style>