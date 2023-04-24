<template>
  <div class="mt-2 px-5 py-2 w-44 bg-white rounded-lg border-2" :class="{'pointer-events-none bg-gray-50': disabled}">
    <div class="flex">
      <select
        name="hours"
        class="bg-transparent text-xl appearance-none outline-none"
        v-model="currentHours"
      >
        <option v-for="(hour, key) in hours" :key="key" :value="hour">{{hour | lpad}}</option>
      </select>
      <span class="text-xl mx-1">:</span>
      <select
        name="minutes"
        class="bg-transparent text-xl appearance-none outline-none"
        v-model="currentMinutes"
      >
        <option v-for="(minute, key) in minutes" class="px-1" :key="key" :value="minute">{{minute | lpad}}</option>
      </select>
      <span class="text-xl mx-1">:</span>
      <select
        name="seconds"
        class="bg-transparent text-xl appearance-none outline-none mr-1"
        v-model="currentSeconds"
      >
        <option v-for="(second, key) in seconds" class="px-1" :key="key" :value="second">{{second | lpad}}</option>
      </select>
      <select
        v-if="ampm"
        name="ampm"
        class="bg-transparent text-xl appearance-none outline-none"
        v-model="currentAmpm"
      >
        <option value="am">AM</option>
        <option value="pm">PM</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'teTimePicker',
  props: {
    value: {
      type: Number,
      default: null
    },
    ampm: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  data: () => ({
    currentHours: 12,
    currentMinutes: 0,
    currentSeconds: 0,
    currentAmpm: 'am'
  }),
  filters: {
    lpad(num) {
      return `${num}`.padStart(2, '0')
    }
  },
  created() {
    this.setInitialDate();
  },
  computed: {
    hours() {
      if (this.ampm) {
        return Array(12).fill().map((_, i) => i + 1)
      }
      return Array.from(Array(24).keys());
    },
    minutes() {
      return Array.from(Array(60).keys());
    },
    seconds() {
      return Array.from(Array(60).keys());
    },
    currentTime() {
      const hours = this.ampm && this.currentAmpm === 'pm'? 12 + (this.currentHours !== 12? this.currentHours : 0) : this.currentHours
      const date = new Date();
      date.setSeconds(this.currentSeconds);
      date.setMinutes(this.currentMinutes);
      date.setHours(hours);
      return date.valueOf();
    }
  },
  watch: {
    currentTime(val) {
      this.$emit('input', val);
    },
    value() {
      this.setInitialDate();
    }
  },
  methods: {
    setInitialDate() {
      if (!this.value || this.value === this.currentTime) return;
      const date = new Date(this.value);
      this.currentMinutes = date.getMinutes();
      this.currentSeconds = date.getSeconds();
      const hours = date.getHours();
      this.currentHours = this.ampm && hours > 12 ? 12 + hours : hours;
      this.currentAmpm = hours > 12 ? 'pm' : 'am';
    }
  }
}
</script>
