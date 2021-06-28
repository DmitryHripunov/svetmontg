import Vue from 'vue';
import VueRouter from 'vue-router';

import MainPage from '../pages/MainPage.vue';
import CatalogHomePage from '../pages/CatalogHomePage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';

Vue.use(VueRouter);
Vue.prototype.$eventBus = new Vue();

const routes = [
  { name: 'main', component: MainPage, path: '/' },
  { name: 'catalog', component: CatalogHomePage, path: '/catalog/' },
  { name: 'notFound', component: NotFoundPage, path: '/404' },
  { path: '*', redirect: '/404' },
];

const router = new VueRouter({
  // mode: 'history',
  routes,
});

export default router;
