import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('../views/Index.vue')
    },
    {
      path: '/accordion',
      name: 'Accordion',
      component: () => import('../views/Accordion.vue')
    },
    {
      path: '/alert',
      name: 'Alert',
      component: () => import('../views/Alert.vue')
    },
    {
      path: '/badge',
      name: 'Badge',
      component: () => import('../views/Badge.vue')
    },
    {
      path: '/buttons',
      name: 'Button',
      component: () => import('../views/Button.vue')
    },
    {
      path: '/buttongroup',
      name: 'ButtonGroup',
      component: () => import('../views/ButtonGroup.vue')
    },
    {
      path: '/card',
      name: 'Card',
      component: () => import('../views/Card.vue')
    },
    {
      path: '/switchable',
      name: 'Switchable',
      component: () => import('../views/Switchable.vue')
    },
    {
      path: '/select',
      name: 'Selects',
      component: () => import('../views/Selects.vue')
    },
    {
      path: '/breadcrumb',
      name: 'Breadcrumb',
      component: () => import('../views/Breadcrumb.vue')
    },
    {
      path: '/input',
      name: 'Input',
      component: () => import('../views/Input.vue')
    },
    {
      path: '/date',
      name: 'Date',
      component: () => import('../views/Date.vue')
    },
    {
      path: '/range',
      name: 'Range',
      component: () => import('../views/Range.vue')
    },
    {
      path: '/tab',
      name: 'Tab',
      component: () => import('../views/Tab.vue')
    },
    {
      path: '/listgroup',
      name: 'ListGroup',
      component: () => import('../views/ListGroup.vue')
    },
  ]
});

export default router;