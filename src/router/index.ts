import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MissionView from '@/views/MissionView.vue'
import OperationView from '@/views/OperationView.vue'

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
  mission: {
    fr: 'mission',
    en: 'mission'
  },
  operation: {
    fr: 'fonctionnement',
    en: 'how-it-works'
  },
  producer: {
    fr: 'producteur-enr',
    en: 're-producer'
  },
  investor: {
    fr: 'investisseur',
    en: 'investor'
  },
  contact: {
    fr: 'contact',
    en: 'contact'
  }
} as const

// Helper pour générer les routes pour toutes les langues
const createLocalizedRoutes = () => {
  const routes: any[] = []

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
      meta: { locale }
    })

    // Mission
    routes.push({
      path: `${prefix}/${ROUTE_SLUGS.mission[locale]}`,
      name: `Mission-${locale}`,
      component: MissionView,
      meta: { locale }
    })

    // Operation
    routes.push({
      path: `${prefix}/${ROUTE_SLUGS.operation[locale]}`,
      name: `Operation-${locale}`,
      component: OperationView,
      meta: { locale }
    })

    // Producer
    routes.push({
      path: `${prefix}/${ROUTE_SLUGS.producer[locale]}`,
      name: `Producer-${locale}`,
      component: HomeView,
      meta: { locale }
    })

    // Investor
    routes.push({
      path: `${prefix}/${ROUTE_SLUGS.investor[locale]}`,
      name: `Investor-${locale}`,
      component: HomeView,
      meta: { locale }
    })

    // Contact
    routes.push({
      path: `${prefix}/${ROUTE_SLUGS.contact[locale]}`,
      name: `Contact-${locale}`,
      component: HomeView,
      meta: { locale }
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
export const getLocaleFromRoute = (route: any): SupportedLocale => {
  return route.meta?.locale || 'fr'
}

// Helper pour générer un nom de route localisé
export const getLocalizedRouteName = (baseName: string, locale: SupportedLocale) => {
  return `${baseName}-${locale}`
}

// Helper pour basculer vers une autre langue en gardant la même page
export const switchLocale = (currentRoute: any, newLocale: SupportedLocale) => {
  const currentLocale = getLocaleFromRoute(currentRoute)
  
  // Extraire le nom de base de la route (sans le suffixe de langue)
  const routeName = currentRoute.name?.replace(`-${currentLocale}`, '') || 'Home'
  
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
