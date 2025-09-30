<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocalization } from '@/composables/useLocalization'
import { useSeo } from '@/composables/useSeo'
import RocketLaunchIcon from '@/components/icons/RocketLaunchIcon.vue'

const { t } = useI18n()
const { getRouteFor } = useLocalization()

// SEO
useSeo('investors')
</script>

<template>
  <!-- Hero Section -->
  <section class="max-w-7xl mx-auto flex flex-col gap-3 py-8 sm:py-16 px-4 lg:px-8 justify-center">
    <div class="flex flex-col leading-normal">
      <h1 class="font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl uppercase"
        v-html="t('investors.hero.title')" />
    </div>

    <div class="flex flex-col gap-3 lg:flex-row justify-between items-center">
      <div class="text-lg md:text-xl" v-html="t('investors.hero.intro')" />
    </div>
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <!-- Yield Section -->
  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <h3 class="font-semibold text-3xl mb-4 flex gap-2 items-center">
      <RocketLaunchIcon class="w-8 h-8"></RocketLaunchIcon>
      <span v-html="t('investors.yield.title')"></span>
    </h3>
    <div v-html="t('investors.yield.description')" class="text-base leading-relaxed" />
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <!-- ESG Section -->
  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <h3 class="font-semibold text-3xl mb-4 flex gap-2 items-center">
      <RocketLaunchIcon class="w-8 h-8"></RocketLaunchIcon>
      <span v-html="t('investors.esg.title')"></span>
    </h3>
    <div v-html="t('investors.esg.description')" class="text-base leading-relaxed" />
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <!-- Security Section -->
  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <h3 class="font-semibold text-3xl mb-4 flex gap-2 items-center">
      <RocketLaunchIcon class="w-8 h-8"></RocketLaunchIcon>
      <span v-html="t('investors.security.title')"></span>
    </h3>
    <div v-html="t('investors.security.description')" class="text-base leading-relaxed" />
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <!-- Transparency Section -->
  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <h3 class="font-semibold text-3xl mb-4 flex gap-2 items-center">
      <RocketLaunchIcon class="w-8 h-8"></RocketLaunchIcon>
      <span v-html="t('investors.transparency.title')"></span>
    </h3>
    <div v-html="t('investors.transparency.description')" class="text-base leading-relaxed" />
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <!-- Liquidity Section -->
  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <h3 class="font-semibold text-3xl mb-4 flex gap-2 items-center">
      <RocketLaunchIcon class="w-8 h-8"></RocketLaunchIcon>
      <span v-html="t('investors.liquidity.title')"></span>
    </h3>
    <div v-html="t('investors.liquidity.description')" class="text-base leading-relaxed" />
  </section>

</template>
