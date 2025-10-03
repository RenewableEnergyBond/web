<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocalization } from '@/composables/useLocalization'
import { useSeo } from '@/composables/useSeo'
import { Icon } from '@iconify/vue'

const { t } = useI18n()
const { getRouteFor } = useLocalization()

// SEO
useSeo('legals')
</script>

<template>
  <!-- Legal Notice Page -->
  <section class="max-w-4xl mx-auto py-8 sm:py-16 px-4 lg:px-8 text-primary">
    <!-- Header -->
    <header class="mb-12">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        {{ t('legals.title') }}
      </h1>
      <p class="text-lg">
        {{ t('legals.lastUpdated') }}
      </p>
    </header>

    <!-- Legal Content -->
    <div class="prose prose-lg max-w-none">

      <!-- Company Information -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-primary">
          {{ t('legals.company.title') }}
        </h2>
        <div class="bg-primary/5 rounded-lg p-6 space-y-2">
          <p><strong>{{ t('legals.company.name') }}:</strong> {{ t('legals.company.nameValue') }}</p>
          <p><strong>{{ t('legals.company.form') }}:</strong> {{ t('legals.company.formValue') }}</p>
          <p><strong>{{ t('legals.company.capital') }}:</strong> {{ t('legals.company.capitalValue') }}</p>
          <p><strong>{{ t('legals.company.siret') }}:</strong> {{ t('legals.company.siretValue') }}</p>
          <div class="flex flex-wrap gap-1">
            <strong class="text-nowrap">{{ t('legals.company.address') }}:</strong>
            <address class="not-italic">
              {{ t('legals.company.addressValue') }}
            </address>
          </div>
          <p><strong>{{ t('legals.company.email') }}:</strong>
            <a href="mailto:bonjour@rebond.eco" class="text-primary hover:text-primary/80">
              bonjour@rebond.eco
            </a>
          </p>
        </div>
      </section>

      <!-- Publication Director -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-primary">
          {{ t('legals.director.title') }}
        </h2>
        <p class="">{{ t('legals.director.content') }}</p>
      </section>

      <!-- Hosting -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-primary">
          {{ t('legals.hosting.title') }}
        </h2>
        <div class="bg-primary/5 rounded-lg p-6">
          <p class="mb-2">{{ t('legals.hosting.content') }}</p>
          <div class="space-y-1 text-sm">
            <p>{{ t('legals.hosting.provider') }}</p>
            <p>{{ t('legals.hosting.address') }}</p>
            <p>{{ t('legals.hosting.phone') }}</p>
          </div>
        </div>
      </section>

      <!-- Intellectual Property -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-primary">
          {{ t('legals.intellectual.title') }}
        </h2>
        <div class="space-y-4 ">
          <p>{{ t('legals.intellectual.content1') }}</p>
          <p>{{ t('legals.intellectual.content2') }}</p>
        </div>
      </section>

      <!-- Personal Data -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-primary">
          {{ t('legals.data.title') }}
        </h2>
        <div class="space-y-4 ">
          <p>{{ t('legals.data.content1') }}</p>
          <p>{{ t('legals.data.content2') }}</p>
          <p>{{ t('legals.data.content3') }}</p>
        </div>
      </section>

      <!-- Cookies -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-primary">
          {{ t('legals.cookies.title') }}
        </h2>
        <div class="space-y-4 ">
          <p>{{ t('legals.cookies.content1') }}</p>
          <p>{{ t('legals.cookies.content2') }}</p>
        </div>
      </section>

      <!-- Liability -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-primary">
          {{ t('legals.liability.title') }}
        </h2>
        <p class="">{{ t('legals.liability.content') }}</p>
      </section>

      <!-- Applicable Law -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-primary">
          {{ t('legals.law.title') }}
        </h2>
        <p class="">{{ t('legals.law.content') }}</p>
      </section>

    </div>

    <!-- Navigation -->
    <div class="mt-12 pt-8 border-t border-primary/20 text-center">
      <RouterLink :to="getRouteFor('Home')"
        class="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-medium text-lg">
        <Icon icon="mdi:arrow-left" class="text-xl" />
        {{ t('legals.backToHome') }}
      </RouterLink>
    </div>
  </section>
</template>

<style scoped></style>