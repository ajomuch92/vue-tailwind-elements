import Vue from 'vue';
import TeLoading from './teLoading.vue';

const showLoading = (options) => {
  const { type, size = 'large', color, timeout, text } = options || {};
  const LoadingClass = Vue.extend(TeLoading);
  const loadingInstance = new LoadingClass({
    propsData: {
      type,
      size,
      color,
      text,
    },
  });
  loadingInstance.$mount();
  document.querySelector('body').appendChild(loadingInstance.$el);
  if (timeout) {
    setTimeout(() => {
      loadingInstance.close();
    }, timeout);
  }
  return loadingInstance;
};

export default showLoading;