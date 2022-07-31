import Vue from 'vue';
import TeToastHandler from './toastHandler.vue';

const showToast = (options) => {
  const { type, position, align, timeout, toast } = options || {};
  if (!toast) return;
  const ToastClass = Vue.extend(TeToastHandler);
  const instance = new ToastClass({
    propsData: {
      position,
      align,
      type,
      toast,
    },
  });
  instance.$mount();
  document.querySelector('body').appendChild(instance.$el);
  if (timeout) {
    setTimeout(() => {
      instance.close();
    }, timeout);
  }
  return instance;
};

export default showToast;