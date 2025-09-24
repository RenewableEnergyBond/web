import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getLocaleFromRoute, getLocalizedRouteName, type SupportedLocale } from '@/router'

/**
 * Composable pour gérer la localisation et les routes localisées
 */
export function useLocalization() {
  const route = useRoute()

  // Langue actuelle basée sur la route
  const currentLocale = computed<SupportedLocale>(() => getLocaleFromRoute(route))

  // Helper pour générer les routes localisées
  const getRouteFor = (routeName: string) => {
    return { name: getLocalizedRouteName(routeName, currentLocale.value) }
  }

  return {
    currentLocale,
    getRouteFor
  }
}