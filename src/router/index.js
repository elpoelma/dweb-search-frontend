import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'Search',
    props: (route) => ({ query: route.query }),
    // route level code-splitting
    component: () => import('../views/Search.vue'),
  },
  {
    path: '/search/detail/:fileType/:fileHash',
    name: 'Detail',
    props: (route) => ({
      ...route.params,
      query: route.query,
    }),
    // route level code-splitting
    component: () => import('../views/Detail.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
