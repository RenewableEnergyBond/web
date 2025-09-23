import { ViteSSG } from 'vite-ssg'
// import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { createWebHistory, createMemoryHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'

// const app = createApp(App)

const isClient = typeof window !== 'undefined';
const i18n = createI18n({
  legacy: false,
  locale: 'fr', // set default locale
  fallbackLocale: 'en',
  messages: {
    en,
    fr
  }
})

export const createApp = ViteSSG(App, {
  history: isClient
    ? createWebHistory(import.meta.env.BASE_URL)
    : createMemoryHistory(import.meta.env.BASE_URL),
  routes: router.getRoutes(),
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' })
}, ({ app }) => {
  app.use(i18n)
})
