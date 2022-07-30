import Vue from 'vue';
import TeModal from './teModal.vue';

const showModal = (options) => {
  const { parent, props, events, component, scrollable, centered, size } = options;
  if (!component || !parent) return;
  const ModalClass = Vue.extend(TeModal);
  const modalInstance = new ModalClass({
    parent,
    propsData: {
      centered: centered || true,
      visible: true,
      hideHeader: true,
      hideFooter: true,
      scrollable,
      size,
      title: '',
      component,
      events,
      props
    },
  });
  modalInstance.$mount();
  modalInstance.$data.backdropVisible = true;
  parent.$el.appendChild(modalInstance.$el);
};

export default showModal;