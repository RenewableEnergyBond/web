<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocalization } from '@/composables/useLocalization'

const { t } = useI18n()
const { getRouteFor } = useLocalization()
</script>

<template>
  <!-- Contact Page -->
  <section class="max-w-7xl mx-auto py-8 sm:py-16 px-4 lg:px-8 text-primary">
    <!-- Header -->
    <header class="text-center mb-12 lg:mb-16">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
        {{ t('contact.title') }}
      </h1>
      <p class="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {{ t('contact.description') }}
      </p>
    </header>

    <!-- Contact Information -->
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        <!-- Email Contact -->
        <article class="bg-white p-6 lg:p-8 rounded-xl border-2 border-primary/20 border-dashed hover:border-primary/40 transition-colors">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <h2 class="text-xl lg:text-2xl font-semibold mb-2">
                {{ t('contact.email.title') }}
              </h2>
              <p class="text-gray-600 mb-4 text-sm lg:text-base">
                {{ t('contact.email.description') }}
              </p>
              <a 
                href="mailto:bonjour@rebond.eco"
                class="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-lg"
              >
                bonjour@rebond.eco
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </article>

        <!-- Physical Address -->
        <article class="bg-white p-6 lg:p-8 rounded-xl border-2 border-primary/20 border-dashed hover:border-primary/40 transition-colors">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <h2 class="text-xl lg:text-2xl font-semibold mb-2">
                {{ t('contact.address.title') }}
              </h2>
              <p class="text-gray-600 mb-4 text-sm lg:text-base">
                {{ t('contact.address.description') }}
              </p>
              <address class="not-italic text-gray-800 space-y-1">
                <div class="font-semibold">Rebond SAS</div>
                <div>Bordeaux Technowest - La Place</div>
                <div>185 Boulevard Maréchal Leclerc</div>
                <div>33000 Bordeaux</div>
                <div class="text-gray-600 mt-2">France</div>
              </address>
            </div>
          </div>
        </article>

      </div>

      <!-- Additional Information -->
      <div class="mt-12 lg:mt-16 text-center">
        <div class="bg-gray-50 rounded-xl p-6 lg:p-8 max-w-2xl mx-auto">
          <h2 class="text-xl lg:text-2xl font-semibold mb-4">
            {{ t('contact.additional.title') }}
          </h2>
          <p class="text-gray-600 mb-6 text-sm lg:text-base leading-relaxed">
            {{ t('contact.additional.description') }}
          </p>
          
          <!-- Back to Home -->
          <RouterLink 
            :to="getRouteFor('Home')" 
            class="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-lg"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            {{ t('contact.backToHome') }}
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
