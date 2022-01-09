<template>
  <div class="flex" :class="{'pointer-events-none':disabled}">
    <te-icon
      v-if="clearable"
      name="eraser"
      class="cursor-pointer text-red-500 opacity-60 hover:opacity-100"
      :class="[iconSizeClass, `mx-${spacing}`]"
      @click.native="clickHandler(0)"
    />
    <span v-for="key in quantity" :key="key" class="relative">
      <te-icon
        class="cursor-pointer text-gray-400 opacity-60 hover:opacity-100"
        :class="[iconSizeClass, `mx-${spacing}`]"
        :name="icon"
        :style="getStarStyle(key)"
        @mouseover.native="hoverIndex=key"
        @mouseout.native="hoverIndex=0"
        @click.native="clickHandler(key)"
      />
      <span
        v-if="hasHalfValues"
        class="icon-half"
        :style="halfColorStyle"
        @mouseover="hoverIndex=key-0.5"
        @mouseout="hoverIndex=0"
        @click="clickHandler(key-0.5)"
      />
    </span>
  </div>
</template>

<script>
import teIcon from './teIcon.vue';

export default {
  name: 'teRating',
  components: { teIcon },
  props: {
    value: {
      type: Number,
      default: 0
    },
    quantity: {
      type: Number,
      default: 5
    },
    icon: {
      type: String,
      default: 'star-fill'
    },
    iconSizeClass: {
      type: String,
      default: 'text-xl',
    },
    spacing: {
      type: Number,
      default: 1,
      validator: value => value >= 0 && value < 6
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'yellow'
    },
    hasHalfValues: {
      type: Boolean,
      default: true
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    hoverIndex: 0,
    halfColorStyle: {
      'background-image': 'linear-gradient(90deg, $color 50%, #929292 50%)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      '-moz-background-clip': 'text',
      '-moz-text-fill-color': 'transparent',
      opacity: 1
    }
  }),
  methods: {
    clickHandler (index) {
      this.$emit('input', index)
    },
    getStarStyle (index) {
      if (index <= this.hoverIndex || index <= this.value) {
        return {
          opacity: 1,
          color: this.color
        }
      } else if (index - 0.5 === this.hoverIndex || index - 0.5 === this.value) {
        return JSON.parse(JSON.stringify(this.halfColorStyle).replace('$color', this.color))
      }
      return {}
    }
  }
}
</script>

<style scoped>
  .icon-half {
    position: absolute;
    cursor: pointer;
    top: 0px;
    left: 0px;
    width: 50%;
    height: -moz-available;
    height: -webkit-fill-available;
    background-color: transparent;
  }
</style>
