import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '@unhead/vue'

export function useSeo(pageKey: 'home' | 'contact' | 'legals') {
  const { t, locale } = useI18n()
  
  const title = computed(() => t(`seo.${pageKey}.title`))
  const description = computed(() => t(`seo.${pageKey}.description`))
  
  useHead({
    title,
    meta: [
      {
        name: 'description',
        content: description
      },
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:locale',
        content: computed(() => locale.value === 'fr' ? 'fr_FR' : 'en_US')
      },
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:title',
        content: title
      },
      {
        name: 'twitter:description',
        content: description
      }
    ]
  })
}