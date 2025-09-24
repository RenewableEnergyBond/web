import { ViteSSG } from 'vite-ssg'
import { createWebHistory, createMemoryHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router, { getLocaleFromRoute, SUPPORTED_LOCALES, type SupportedLocale } from './router'
import './assets/main.css'
import en from './locales/en.json'
import fr from './locales/fr.json'

const isClient = typeof window !== 'undefined'

// Fonction pour détecter la langue initiale
const getInitialLocale = (): SupportedLocale => {
  if (isClient) {
    // Côté client : détecter depuis l'URL
    const pathname = window.location.pathname
    const localeFromPath = pathname.split('/')[1]
    if (SUPPORTED_LOCALES.includes(localeFromPath as SupportedLocale)) {
      return localeFromPath as SupportedLocale
    }
  }
  return 'fr' // langue par défaut
}

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(), // langue initiale basée sur l'URL
  fallbackLocale: 'en',
  warnHtmlMessage: false, // Désactive le warning HTML
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
}, ({ app, router: appRouter }) => {
  app.use(i18n)
  
  // Synchronisation de la langue avec la route
  appRouter.beforeEach((to) => {
    const locale = getLocaleFromRoute(to)
    if (i18n.global.locale.value !== locale) {
      i18n.global.locale.value = locale
    }
  })
})
