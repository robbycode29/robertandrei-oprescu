import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'AboutMe',
    component: () => import('@/views/AboutMe.vue'),
  },
  {
    path: '/contact',
    name: 'ContactVue',
    component: () => import('@/views/ContactVue.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
