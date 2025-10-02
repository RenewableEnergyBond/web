import { ViteSSG } from 'vite-ssg'
import { createWebHistory, createMemoryHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router, { getLocaleFromRoute, SUPPORTED_LOCALES, type SupportedLocale } from './router'
import './assets/main.css'
import en from './locales/en.json'
import fr from './locales/fr.json'

const isClient = typeof window !== 'undefined'

const createI18nInstance = (initialLocale: SupportedLocale) => {
  return createI18n({
    legacy: false,
    locale: initialLocale,
    fallbackLocale: 'en',
    warnHtmlMessage: false,
    messages: { en, fr }
  })
}

const getLocaleFromPath = (pathname: string): SupportedLocale => {
  const segments = pathname.split('/').filter(Boolean)
  const localeSegment = segments.find(segment => 
    SUPPORTED_LOCALES.includes(segment as SupportedLocale)
  )
  return (localeSegment as SupportedLocale) || 'fr'
}

const getInitialLocale = (): SupportedLocale => {
  if (isClient) {
    return getLocaleFromPath(window.location.pathname)
  }
  return 'fr'
}

export const createApp = ViteSSG(
  App,
  {
    history: isClient 
      ? createWebHistory(import.meta.env.BASE_URL)
      : createMemoryHistory(import.meta.env.BASE_URL),
    routes: router.getRoutes(),
    scrollBehavior: () => ({ top: 0, behavior: 'smooth' })
  },
  ({ app, router: appRouter }) => {
    const initialLocale = isClient ? getInitialLocale() : 'fr'
    const i18n = createI18nInstance(initialLocale)
    
    app.use(i18n)

    // Sync locale with route changes
    appRouter.beforeEach((to) => {
      const locale = getLocaleFromRoute(to)
      i18n.global.locale.value = locale
    })

    // Ensure correct locale for SSG rendering
    if (!isClient) {
      const currentRoute = appRouter.currentRoute.value
      const locale = getLocaleFromRoute(currentRoute)
      i18n.global.locale.value = locale
    }
  }
)
