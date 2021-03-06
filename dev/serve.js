import Vue from 'vue';
import Dev from './serve.vue';
import VueTailwindElements from '@/entry.esm';
import VuePrism from 'vue-prism';

// import '../src/tailwind.min.css';
import './index.css';
import '../src/tailwind-forms.min.css';
import './styles/styles.css';
import 'prismjs/themes/prism.css';

Vue.use(VueTailwindElements);
Vue.use(VuePrism)


import router from './router'

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(Dev),
}).$mount('#app');
