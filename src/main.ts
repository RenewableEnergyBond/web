import { ViteSSG } from 'vite-ssg'
// import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// const app = createApp(App)

export const createApp = ViteSSG(
  App,
  { routes: router.getRoutes() }
)
