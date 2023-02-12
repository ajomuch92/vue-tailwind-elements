import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('../views/Index.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('../views/Home.vue')
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
        {
          path: '/dropdown',
          name: 'Dropdown',
          component: () => import('../views/Dropdown.vue')
        },
        {
          path: '/modal',
          name: 'Modal',
          component: () => import('../views/Modal.vue')
        },
        {
          path: '/spinner',
          name: 'Spinner',
          component: () => import('../views/Spinner.vue')
        },
        {
          path: '/stepper',
          name: 'Stepper',
          component: () => import('../views/Stepper.vue')
        },
        {
          path: '/toast',
          name: 'Toast',
          component: () => import('../views/Toast.vue')
        },
        {
          path: '/pagination',
          name: 'Pagination',
          component: () => import('../views/Pagination.vue')
        },
        {
          path: '/navbar',
          name: 'Navbar',
          component: () => import('../views/Navbar.vue')
        },
        {
          path: '/table',
          name: 'Table',
          component: () => import('../views/Table.vue')
        },
        {
          path: '/files',
          name: 'Files',
          component: () => import('../views/Files.vue')
        },
        {
          path: '/notification',
          name: 'Notification',
          component: () => import('../views/Notification.vue')
        },
        {
          path: '/icons',
          name: 'Icons',
          component: () => import('../views/Icons.vue')
        },
        {
          path: '/rating',
          name: 'Rating',
          component: () => import('../views/Rating.vue')
        },
        {
          path: '/utilities',
          name: 'Utilities',
          component: () => import('../views/Utilities.vue')
        },
        {
          path: '/chips',
          name: 'Chips',
          component: () => import('../views/Chips.vue')
        },
      ]
    },
  ]
});

export default router;