<template>
  <transition name="fade">
    <div v-show="visible" class="fixed py-4 px-3" :class="toastClass">
      <te-alert v-if="alert" :solid="alertSolid" :type="alertType" :text="alertText" />
      <te-toast v-else-if="type==='normal'" v-bind="toast" @close="close()"/>
      <te-toast-light v-else v-bind="toast"/>
    </div>
  </transition>
</template>

<script>
import TeAlert from './teAlert.vue';
import teToast from './teToast.vue';
import TeToastLight from './teToastLight.vue';

export default {
  name: 'TeToastHandler',
  components: { teToast, TeToastLight, TeAlert },
  props: {
    position: {
      type: String,
      default: 'bottom',
      validator: (val) => ['bottom', 'top'].includes(val)
    },
    align: {
      type: String,
      default: 'center',
      validator: (val) => ['right', 'center', 'left'].includes(val)
    },
    type: {
      type: String,
      default: 'normal',
      validator: (val) => ['normal', 'light'].includes(val)
    },
    toast: {
      type: Object,
      default: () => ({}),
    },
    alert: {
      type: Boolean,
      default: false,
    },
    alertType: {
      type: String,
      default: '',
    },
    alertText: {
      type: String,
      default: '',
    },
    alertSolid: {
      type: Boolean,
      default: false,
    }
  },
  data: () => ({
    visible: false,
  }),
  computed: {
    toastClass() {
      const classes = [];
      if (this.position === 'bottom') {
        classes.push('bottom-0');
      } else if (this.position === 'top') {
        classes.push('top-0');
      }
      if (this.align === 'center') {
        classes.push('left-1/2 transform -translate-x-1/2');
      } else if (this.align === 'left') {
        classes.push('left-0');
      } else if (this.align === 'right') {
        classes.push('right-0');
      }
      classes.push(`justify-${this.align}`);
      return classes;
    },
  },
  mounted() {
    setTimeout(() => {
      this.visible = true;
    }, 50);
  },
  methods: {
    close() {
      this.$emit('close');
      setTimeout(() => {
        this.$destroy();
        this.$el.parentNode.removeChild(this.$el);
      }, 500);
    },
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity  .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  div.fixed {
    z-index: 9999;
  }
</style>