<template>
  <div class="multiselect-wrapper relative cursor-pointer inline-block" v-click-outside="() => open = false" :style="varCss">
    <input
      type="text"
      readonly
      :placeholder="placeholder"
      :value="textValue"
      :disabled="disabled"
      class="pl-1 bg-white bg-clip-padding border border-solid border-gray-300 h-10 cursor-pointer transition ease-in-out duration-200 outline-none"
      :class="{'rounded-md': !open, 'rounded-tl-md rounded-tr-md': open, 'bg-gray-100 cursor-not-allowed': disabled, 'pr-10': clearable&&textValue, 'pr-6': !clearable}"
      @click="open=!open"
    />
    <span class="icon absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
      <button v-if="clearable&&textValue" class="clear h-4 w-4" @click="clear">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
      </button>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5 transition ease-in-out duration-200"
          :class="{'transform rotate-180': open}">
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd" />
        </svg>
    </span>
    <transition name="zoom">
      <div v-show="open" class="absolute z-50 border border-gray-300 shadow-sm w-full bg-white ">
        <div v-if="searchable" class="search p-2">
          <input v-model="search" type="search" class="border border-gray-100 w-full h-8 outline-none px-2" :placeholder="placeholderSearch" />
        </div>
        <div class="list-container flex flex-col px-2">
          <template v-if="singleSelect">
            <div v-for="(option, key) in filteredOptions"
              :key="key"
              class="hover:bg-gray-100 rounded-md px-1 py-2 cursor-pointer"
              :class="{'bg-blue-500 text-white hover:bg-blue-600': option[valueField] === currentValue}"
              @click="selectSingleValue(option[valueField])"
            >
              <slot name="item" v-bind="{option, key}">
                {{ option[displayField] }}
              </slot>
            </div>
          </template>
          <template v-else>
            <te-checkbox v-if="showSelectAll&&search.length===0" v-model="selectAll" class="py-2 px-1 cursor-pointer rounded-md hover:bg-gray-100">
              Select all
            </te-checkbox>
            <te-checkbox v-for="(option, key) in filteredOptions" :key="key" v-model="currentValue" :native-value="option[valueField]" class="py-2 px-1 cursor-pointer rounded-md hover:bg-gray-100">
              <slot name="item" v-bind="{option, key}">
                {{ option[displayField] }}
              </slot>
            </te-checkbox>
          </template>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import clickOutside from './directives/v-outside';
import teCheckbox from './teCheckbox.vue';

export default {
  name: 'teMultiselect',
  components: { teCheckbox },
  directives: {
    'click-outside': clickOutside
  },
  props: {
    value: {
      type: [Array, String, Number],
      default: undefined,
    },
    singleSelect: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => []
    },
    displayField: {
      type: String,
      default: 'text'
    },
    valueField: {
      type: String,
      default: 'value'
    },
    placeholder: {
      type: String,
      default: ''
    },
    searchable: {
      type: Boolean,
      default: true,
    },
    visibleItems: {
      type: Number,
      default: 3,
      value: (val) => val > 0
    },
    placeholderSearch: {
      type: String,
      default: 'Search...'
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showSelectAll: {
      type: Boolean,
      default: true,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    minWidth: {
      type: [String, Array],
      default: '250px'
    },
    listHeight: {
      type: [String, Array],
      default: '250px'
    },
  },
  data() {
    return {
      open: false,
      search: '',
      currentValue: this.singleSelect ? undefined : [],
      selectAll: false,
    };
  },
  computed: {
    textValue() {
      if (this.singleSelect) {
        return this.options.find((r) => r[this.valueField] === this.currentValue)?.[this.displayField] || '';
      } else {
        const currentLang = navigator.language || navigator.userLanguage;
        const list = this.options.filter((r) => this.currentValue.includes(r[this.valueField])).map((r) => r[this.displayField]);
        const formatter = new Intl.ListFormat(currentLang, { style: 'long', type: 'conjunction' })
        if (this.currentValue.length <= this.visibleItems) {
          return formatter.format(list);
        } else {
          return `${this.currentValue.length} options selected`;
        }
      }
    },
    filteredOptions() {
      if (this.search.length) {
        return this.options.filter((r) => r[this.displayField].toString().toLowerCase().includes(this.search.toLowerCase()))
      }
      return this.options;
    },
    varCss() {
      return {
        '--min-width': typeof this.minWidth === 'number' ? `${this.minWidth}px` : this.minWidth,
        '--height': typeof this.listHeight === 'number' ? `${this.listHeight}px` : this.listHeight,
      };
    }
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },
    selectAll(val) {
      this.currentValue = val ? this.options.map((r) => r[this.valueField]) : [];
    }
  },
  methods: {
    selectSingleValue(newValue) {
      this.currentValue = newValue;
      this.open = false;
    },
    clear() {
      this.currentValue = this.singleSelect ? undefined : [];
      this.open = true;
    }
  }
}
</script>

<style scoped>
  .multiselect-wrapper, input[type="text"] {
    min-width: var(--min-width);
  }
  
  .zoom-enter-active,
  .zoom-leave-active {
    transition: all 100ms ease;
  }

  .zoom-enter,
  .zoom-leave-to {
    transform: scale(0.5);
    opacity: 0;
  }

  .list-container {
    overflow-y: scroll;
    height: var(--height);
  }
</style>