import Vue from 'vue';
import VueRouter from 'vue-router';

import MainPage from '../pages/MainPage.vue';

Vue.use(VueRouter);

const routes = [
  { name: 'main', component: MainPage, path: '/' },
  // { name: 'notFound', component: NotFoundPage, path: '/404' },
  // { path: '*', redirect: '/404' },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
