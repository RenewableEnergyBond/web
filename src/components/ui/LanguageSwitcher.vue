<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { switchLocale, getLocaleFromRoute, type SupportedLocale } from '@/router'
import FrenchFlagIcon from '@/components/icons/FrenchFlagIcon.vue'
import BritishFlagIcon from '@/components/icons/BritishFlagIcon.vue'

const { locale } = useI18n()
const route = useRoute()
const router = useRouter()

const languages = [
  { code: 'fr' as SupportedLocale, name: 'FR', flag: FrenchFlagIcon },
  { code: 'en' as SupportedLocale, name: 'EN', flag: BritishFlagIcon }
]

const currentLanguage = computed(() =>
  languages.find(lang => lang.code === locale.value) || languages[0]
)

const isOpen = ref(false)

const changeLanguage = (langCode: SupportedLocale) => {
  // Utiliser le système de routes pour changer de langue
  const newRoute = switchLocale(route, langCode)
  router.push(newRoute)
  isOpen.value = false
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="relative inline-block">
    <!-- Bouton principal avec seulement le drapeau -->
    <button
      @click="toggleDropdown"
      class="bg-white text-primary border border-primary px-3 py-2 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 flex items-center gap-2 h-10"
    >
      <component :is="currentLanguage.flag" class="w-5 h-4" />
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Menu déroulant avec drapeaux + codes -->
    <div 
      v-if="isOpen"
      class="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-full"
    >
      <button
        v-for="language in languages"
        :key="language.code"
        @click="changeLanguage(language.code)"
        class="w-full px-3 py-2 text-left hover:bg-gray-100 flex items-center gap-2 text-black"
      >
        <component :is="language.flag" class="w-5 h-4" />
        {{ language.name }}
      </button>
    </div>

    <!-- Overlay pour fermer le menu en cliquant ailleurs -->
    <div 
      v-if="isOpen"
      @click="isOpen = false"
      class="fixed inset-0 z-0"
    ></div>
  </div>
</template>
