import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('@/views/my.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

