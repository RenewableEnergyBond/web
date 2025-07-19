import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MissionView from '@/views/MissionView.vue'
import OperationView from '@/views/OperationView.vue'

const isClient = typeof window !== 'undefined'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: isClient
        ? createWebHistory(import.meta.env.BASE_URL)
        : createMemoryHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/mission',
      name: 'Mission',
      component: MissionView,
    },
    {
      path: '/operation',
      name: 'Operation',
      component: OperationView,
    },
    {
      path: '/producer',
      name: 'Producer',
      component: HomeView,
    },
    {
      path: '/investor',
      name: 'Investor',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: HomeView,
    }
  ],
})

export default router
