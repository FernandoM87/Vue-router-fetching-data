// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import MoviesView from '@/views/MoviesView.vue';
import UsersView from '@/views/UsersView.vue';
import ProductsView from '@/views/ProductsView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/movies', component: MoviesView },
  { path: '/users', component: UsersView },
  { path: '/products', component: ProductsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

