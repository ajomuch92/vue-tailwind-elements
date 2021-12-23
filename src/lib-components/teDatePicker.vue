<template>
  <div class="antialiased sans-serif w-44">
    <div class="relative">
      <input
        type="text"
        readonly
        v-model="datepickerValue"
        @click="showDatepicker = !showDatepicker"
        @keydown.esc="showDatepicker = false"
        class="
          w-full
          pl-4
          pr-10
          py-3
          leading-none
          rounded-lg
          focus:outline-none focus:shadow-outline
          text-gray-600
          font-medium
          border-2
        "
        :placeholder="placeholder"
        :disabled="disabled"
      />

      <div class="absolute top-0 right-0 px-3 py-2">
        <slot name="icon">
          <svg
            class="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </slot>
      </div>

      <div
        class="
          bg-white
          mt-12
          rounded-lg
          shadow
          p-4
          absolute
          top-0
          left-0
        "
        style="width: 17rem"
        v-show="showDatepicker"
        v-click-outside="hideCalendar"
      >
        <div class="flex justify-between items-center mb-2">
          <div>
            <span
              class="text-lg font-bold text-gray-800"
            >
              {{monthNames[month]}}
            </span>
            <span
              class="ml-1 text-lg text-gray-600 font-normal"
            >
              {{year}}
            </span>
          </div>
          <div>
            <button
              type="button"
              class="
                transition
                ease-in-out
                duration-100
                inline-flex
                cursor-pointer
                hover:bg-gray-200
                p-1
                rounded-full
              "
              @click="deductMonth"
            >
              <svg
                class="h-6 w-6 text-gray-500 inline-flex"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              class="
                transition
                ease-in-out
                duration-100
                inline-flex
                cursor-pointer
                hover:bg-gray-200
                p-1
                rounded-full
              "
              @click="addMonth"
            >
              <svg
                class="h-6 w-6 text-gray-500 inline-flex"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="flex flex-wrap mb-3 -mx-1">
          <template v-for="(day, index) in days" >
            <div style="width: 14.26%" class="px-1" :key="`d-${index}`">
              <div class="text-gray-800 font-medium text-center text-xs">
                {{day}}
              </div>
            </div>
          </template>
        </div>

        <div class="flex flex-wrap -mx-1">
          <template v-for="(blankday, key) in blankdays">
            <div
              :key="`bd-${key}`"
              style="width: 14.28%"
              class="
                text-center
                border
                p-1
                border-transparent
                text-sm
              "
            ></div>
          </template>
          <template
            v-for="(date, dateIndex) in noOfDays"
          >
            <div :key="dateIndex" style="width: 14.28%" class="px-1 mb-1">
              <div
                @click="getDateValue(date)"
                class="
                  cursor-pointer
                  text-center text-sm
                  leading-none
                  rounded-full
                  leading-loose
                  transition
                  ease-in-out
                  duration-100
                "
                :class="{'bg-blue-500 text-white': isToday(date), 'text-gray-700 hover:bg-blue-200': !isToday(date) }"
              >
                {{date}}
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import clickOutside from './directives/v-outside';

export default {
  name: 'teDatePicker',
  directives: {
    'click-outside': clickOutside
  },
  props: {
    value: {
      type: Date,
      default: null,
    },
    monthNames: {
      type: Array,
      default: () => [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    },
    days: {
      type: Array,
      default: () => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: 'Select a date'
    }
  },
  watch: {
    value() {
      this.initDate();
    }
  },
  data: () => ({
    datepickerValue: '',
    showDatepicker: false,
    month: '',
    year: '',
    noOfDays: [],
    blankdays: [],
  }),
  created() {
    this.initDate();
    this.getNoOfDays();
  },
  methods: {
    initDate() {
      const today = this.value || new Date();
      this.month = today.getMonth();
      this.year = today.getFullYear();
      if (this.value) {
        this.datepickerValue = today.toLocaleDateString();
      }
    },
    isToday(date) {
      const d = new Date(this.year, this.month, date);
      const today = this.value || new Date();
      return today.toDateString() === d.toDateString();
    },
    getDateValue(date) {
      const selectedDate = new Date(this.year, this.month, date);
      this.$emit('input', selectedDate);
      this.datepickerValue = selectedDate.toLocaleDateString();
      this.showDatepicker = false;
    },
    addMonth() {
      if (this.month == 11) {
        this.month = -1;
        this.year++;
      }
      this.month++;
      this.getNoOfDays();
    },
    deductMonth() {
      if (this.month === 0) {
        this.month = 12;
        this.year--;
      }
      this.month--;
      this.getNoOfDays();
    },
    getNoOfDays() {
      const daysInMonth = new Date(
        this.year,
        this.month + 1,
        0
      ).getDate();
      const dayOfWeek = new Date(this.year, this.month).getDay();
      const blankdaysArray = [];
      for (var i = 1; i <= dayOfWeek; i++) {
        blankdaysArray.push(i);
      }
      const daysArray = [];
      for (var i = 1; i <= daysInMonth; i++) {
        daysArray.push(i);
      }
      this.blankdays = blankdaysArray;
      this.noOfDays = daysArray;
    },
    hideCalendar() {
      this.showDatepicker = false;
    }
  }
}
</script>

<style>

</style>