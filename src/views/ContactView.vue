<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocalization } from '@/composables/useLocalization'
import { useSeo } from '@/composables/useSeo'
import { Icon } from '@iconify/vue'
import ContactForm from '@/components/forms/ContactForm.vue'

const { t } = useI18n()
const { getRouteFor } = useLocalization()

// SEO
useSeo('contact')
</script>

<template>
  <!-- Contact Page -->
  <section class="max-w-7xl mx-auto py-8 sm:py-16 px-4 lg:px-8 text-primary">
    <!-- Header -->
    <header class="text-center mb-12 lg:mb-16">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
        {{ t('contact.title') }}
      </h1>
      <p class="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
        {{ t('contact.description') }}
      </p>
    </header>

    <!-- Contact Information & Form -->
    <div class="max-w-6xl mx-auto">

      <!-- Contact Form Section -->
      <section class="bg-white rounded-xl border-2 border-primary/20 border-dashed p-8 lg:p-12 mb-16">
        <ContactForm />
      </section>
      
      <!-- Contact Information Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        <!-- Email Contact -->
        <article
          class="bg-white p-6 lg:p-8 rounded-xl border-2 border-primary/20 border-dashed hover:border-primary/40 transition-colors">
          <h2 class="flex gap-2 text-xl lg:text-2xl font-semibold mb-2">
            <Icon icon="mdi:mail" class="text-4xl" />
            {{ t('contact.email.title') }}
          </h2>
          <p class="mb-4 text-sm lg:text-base">
            {{ t('contact.email.description') }}
          </p>
          <a href="mailto:bonjour@rebond.eco"
            class="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-medium text-lg">
            bonjour@rebond.eco
            <Icon icon="mdi:open-in-new" class="text-base" />
          </a>
        </article>

        <!-- Physical Address -->
        <article
          class="bg-white p-6 lg:p-8 rounded-xl border-2 border-primary/20 border-dashed hover:border-primary/40 transition-colors">
          <h2 class="flex gap-2 text-xl lg:text-2xl font-semibold mb-2">
            <Icon icon="mdi:map-marker" class="text-4xl" />
            {{ t('contact.address.title') }}
          </h2>
          <p class="mb-4 text-sm lg:text-base">
            {{ t('contact.address.description') }}
          </p>
          <address class="not-italic space-y-1">
            <div class="font-semibold">{{ t('contact.address.name') }}</div>
            <div v-html="t('contact.address.value')"></div>
          </address>
        </article>

      </div>

      

    </div>
  </section>
</template>

<style scoped></style>
