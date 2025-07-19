import { ViteSSG } from 'vite-ssg'
// import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { createWebHistory, createMemoryHistory } from 'vue-router'

// const app = createApp(App)

const isClient = typeof window !== 'undefined'


export const createApp = ViteSSG(App, {
  history: isClient
    ? createWebHistory(import.meta.env.BASE_URL)
    : createMemoryHistory(import.meta.env.BASE_URL),
  routes: router.getRoutes(),
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' })
})
