<template>
  <li>
    <div class="flex-start flex items-center" :class="{'pt-2 md:block md:pt-0':horizontal, 'pt-3': !horizontal}">
      <div class="mr-3 rounded-full" :class="[
        colorClass,
        dotClass,
        {
          'md:ml-0 md:mr-0 -mt-5px': horizontal,
          'h-25px w-25px flex justify-center items-center -ml-13px': $slots.icon,
          'h-9px w-9px -ml-5px': !$slots.icon
        }]" >
        <slot name="icon" />
      </div>
      <h4 v-if="!inverted" class="text-xl font-semibold">
        <slot name="title">
          {{ title }}
        </slot>
      </h4>
      <p v-else class="text-sm text-gray-500">
        <slot name="subtitle">
          {{ subtitle }}
        </slot>
      </p>
    </div>
    <div class="mt-2 ml-4 mb-6" :class="{'md:ml-0': horizontal}">
      <h4 v-if="inverted" class="mb-1.5 text-xl font-semibold">
        <slot name="title">
          {{ title }}
        </slot>
      </h4>
      <p v-else class="text-sm text-gray-500">
        <slot name="subtitle">
          {{ subtitle }}
        </slot>
      </p>
      <p class="mb-3">
        <slot name="default" />
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'TeTimelineItem',
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    dotClass: {
      type: String,
      default: ''
    },
  },
  computed: {
    colorClass() {
      return this.$parent.colorClass.replace(new RegExp('border', 'gi'), 'bg');
    },
    inverted() {
      return this.$parent.inverted;
    },
    horizontal() {
      return this.$parent.horizontal || false;
    }
  }
}
</script>

<style scoped>
  .-ml-5px {
    margin-left: -5px;
  }
  
  .-mt-5px {
    margin-top: -5px;
  }

  .-ml-13px {
    margin-left: -13px;
  }
  .h-9px {
    height: 9px;
  }

  .w-9px {
    width: 9px;
  }
  .h-25px {
    height: 25px;
  }

  .w-25px {
    width: 25px;
  }
</style>