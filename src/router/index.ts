import { createMemoryHistory, createRouter, createWebHistory, type RouteRecordRaw, type RouteLocationNormalized } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import LegalsView from '@/views/LegalsView.vue'

const isClient = typeof window !== 'undefined'

// Langues supportées
export const SUPPORTED_LOCALES = ['fr', 'en'] as const
export type SupportedLocale = typeof SUPPORTED_LOCALES[number]

// Slugs traduits pour chaque route
export const ROUTE_SLUGS = {
  home: {
    fr: '',
    en: ''
  },
  contact: {
    fr: 'contact',
    en: 'contact'
  },
  legals: {
    fr: 'mentions-legales',
    en: 'legal-notice'
  }
} as const

// Helper pour générer les routes pour toutes les langues
const createLocalizedRoutes = (): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []

  // Route racine - redirige vers la langue par défaut
  routes.push({
    path: '/',
    redirect: '/fr'
  })

  // Pour chaque langue supportée
  SUPPORTED_LOCALES.forEach(locale => {
    const prefix = `/${locale}`

    // Home
    routes.push({
      path: `${prefix}`,
      name: `Home-${locale}`,
      component: HomeView,
      meta: { locale, seoKey: 'home' }
    })

    // Contact
    routes.push({
      path: `${prefix}/${ROUTE_SLUGS.contact[locale]}`,
      name: `Contact-${locale}`,
      component: ContactView,
      meta: { locale, seoKey: 'contact' }
    })

    // Legals
    routes.push({
      path: `${prefix}/${ROUTE_SLUGS.legals[locale]}`,
      name: `Legals-${locale}`,
      component: LegalsView,
      meta: { locale, seoKey: 'legals' }
    })
  })

  return routes
}

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: isClient
        ? createWebHistory(import.meta.env.BASE_URL)
        : createMemoryHistory(import.meta.env.BASE_URL),
  // default bahavior but overrided by vite ssg
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: createLocalizedRoutes(),
})

// Helper pour obtenir la langue depuis une route
export const getLocaleFromRoute = (route: RouteLocationNormalized): SupportedLocale => {
  return (route.meta?.locale as SupportedLocale) || 'fr'
}

// Helper pour générer un nom de route localisé
export const getLocalizedRouteName = (baseName: string, locale: SupportedLocale) => {
  return `${baseName}-${locale}`
}

// Helper pour basculer vers une autre langue en gardant la même page
export const switchLocale = (currentRoute: RouteLocationNormalized, newLocale: SupportedLocale) => {
  const currentLocale = getLocaleFromRoute(currentRoute)
  
  // Extraire le nom de base de la route (sans le suffixe de langue)
  const routeName = (currentRoute.name as string)?.replace(`-${currentLocale}`, '') || 'Home'
  
  return {
    name: getLocalizedRouteName(routeName, newLocale)
  }
}

// Guard pour synchroniser la langue de vue-i18n avec la route
router.beforeEach((to, from, next) => {
  // La synchronisation de la langue sera gérée dans le composant racine
  next()
})

export default router
