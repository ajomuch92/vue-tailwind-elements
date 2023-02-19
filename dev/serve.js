import Vue from 'vue';
import Dev from './serve.vue';
import VueTailwindElements from '@/entry.esm';
import VuePrism from 'vue-prism';
import './index.css';
import './styles/styles.css';
import 'prismjs/themes/prism.css';
import icons from './icons';

Vue.use(VueTailwindElements, { customIcons: icons });
Vue.use(VuePrism)


import router from './router'

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(Dev),
}).$mount('#app');
