import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Details from '../views/Details.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/details/:id', component: Details, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
