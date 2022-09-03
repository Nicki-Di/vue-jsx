import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/home.vue'
import login from '../pages/login.vue'
import test from '../pages/test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },

    {
      path: '/login',
      name: 'login',
      component: login
    },

    {
      path: '/test',
      name: 'test',
      component: test
    },
  ]
})

export default router
