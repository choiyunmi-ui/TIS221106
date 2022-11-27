import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/3103',
    component: () => import('../views/Vue3103View.vue'),
  },
  {
    path: '/3104',
    component: () => import('../views/Vue3104View.vue'),
  },
  {
    path: '/3403',
    component: () => import('../views/Vue3403View.vue'),
  },
  {
    path: '/34ex',
    component: () => import('../views/Vue34exView.vue'),
  },
  {
    path: '/3701',
    component: () => import('../views/Vue3701View.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
