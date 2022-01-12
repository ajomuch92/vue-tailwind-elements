
// Import vue components
import * as components from '@/lib-components/index';
import * as directives from '@/lib-components/directives/index';

// install function executed by Vue.use()
const install = function installVueTailwindElements(Vue) {
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });

  Object.entries(directives).forEach(([directiveName, directive]) => {
    Vue.directive(directiveName, directive);
  });
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/lib-components/index';
export * from '@/lib-components/directives/index';
