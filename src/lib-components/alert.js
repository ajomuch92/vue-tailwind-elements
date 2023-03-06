import Vue from 'vue';
import TeToastHandler from './toastHandler.vue';

const showAlert = (options) => {
  const { type, position, text, solid, align, timeout } = options || {};
  if (!toast) return;
  const ToastClass = Vue.extend(TeToastHandler);
  const instance = new ToastClass({
    propsData: {
      position,
      align,
      alert: true,
      alertType: type,
      alertText: text,
      alertSolid: solid
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

export default showAlert;