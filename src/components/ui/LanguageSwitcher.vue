<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { switchLocale, type SupportedLocale } from '@/router'
import { useLocalization } from '@/composables/useLocalization'
import FrenchFlagIcon from '@/components/icons/FrenchFlagIcon.vue'
import BritishFlagIcon from '@/components/icons/BritishFlagIcon.vue'

const { locale } = useI18n()
const router = useRouter()
const { currentLocale } = useLocalization()

// Configuration des langues disponibles
const languages = [
  { code: 'fr' as SupportedLocale, name: 'FR', flag: FrenchFlagIcon },
  { code: 'en' as SupportedLocale, name: 'EN', flag: BritishFlagIcon }
] as const

const currentLanguage = computed(() =>
  languages.find(lang => lang.code === locale.value) || languages[0]
)

const isOpen = ref(false)

const changeLanguage = async (langCode: SupportedLocale) => {
  try {
    const route = router.currentRoute.value
    const newRoute = switchLocale(route, langCode)
    await router.push(newRoute)
    isOpen.value = false
  } catch (error) {
    console.error('Erreur lors du changement de langue:', error)
  }
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}
</script>

<template>
  <div class="relative inline-block">
    <!-- Language Selector Button -->
    <button
      @click="toggleDropdown"
      class="bg-white text-primary border border-primary px-3 py-2 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 flex items-center gap-2 h-10 transition-colors"
      :aria-label="`Current language: ${currentLanguage.name}`"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <component :is="currentLanguage.flag" class="w-5 h-4" />
      <svg 
        class="w-4 h-4 transition-transform" 
        :class="{ 'rotate-180': isOpen }"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Language Dropdown Menu -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div 
        v-if="isOpen"
        class="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-full"
        role="menu"
        aria-orientation="vertical"
      >
        <button
          v-for="language in languages"
          :key="language.code"
          @click="changeLanguage(language.code)"
          class="w-full px-3 py-2 text-left hover:bg-gray-100 flex items-center gap-2 text-black transition-colors first:rounded-t-lg last:rounded-b-lg"
          :class="{ 'bg-gray-50': language.code === currentLocale }"
          role="menuitem"
          :aria-current="language.code === currentLocale ? 'true' : 'false'"
        >
          <component :is="language.flag" class="w-5 h-4" />
          {{ language.name }}
        </button>
      </div>
    </Transition>

    <!-- Backdrop to close dropdown -->
    <div 
      v-if="isOpen"
      @click="closeDropdown"
      class="fixed inset-0 z-0"
      aria-hidden="true"
    />
  </div>
</template>
