<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocalization } from '@/composables/useLocalization'
import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue'

const { t } = useI18n()
const { getRouteFor } = useLocalization()
</script>

<template>
  <!-- Hero Section -->
  <section class="max-w-7xl mx-auto flex flex-col gap-3 py-8 sm:py-16 px-4 lg:px-8 justify-center text-primary">
    <div class="flex flex-col leading-normal">
      <h1 class="font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl uppercase" v-html="t('home.hero.title')" />
      <p class="font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl uppercase" v-html="t('home.hero.subtitle1')" />
    </div>
    
    <div class="flex flex-col gap-3 lg:flex-row justify-between items-center">
      <div class="lg:w-2/3 text-lg md:text-xl" v-html="t('home.hero.intro')" />
      <RouterLink 
        :to="getRouteFor('Contact')" 
        class="text-primary font-medium text-lg md:text-xl py-2 px-2 border-1 inline-flex items-center gap-1 rounded-lg self-end hover:brightness-[120%]"
        :aria-label="t('home.hero.contact')"
      >
        <ArrowRightIcon class="w-6 h-6" />
        {{ t('home.hero.contact') }}
      </RouterLink>
    </div>
  </section>

  <!-- Hero Image -->
  <section 
    class="h-[180px] bg-[center_-40px] sm:bg-[center_-270px] relative w-full overflow-hidden bg-cover bg-fixed bg-no-repeat" 
    :style="{ backgroundImage: 'url(assets/hero-1920.jpg)' }"
    role="img"
    :aria-label="t('home.hero.imageAlt', 'Hero image')"
  />

  <!-- Solution Section -->
  <section class="max-w-7xl mx-auto my-8 sm:my-16 px-4 lg:px-8">
    <h2 v-html="t('blocks.solution.title')" class="font-semibold text-3xl mb-4" />
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <article class="basis-full p-4 border-2 border-primary/20 border-dashed rounded-lg">
        <h3 v-html="t('blocks.solution.structuration.title')" class="font-semibold text-xl mb-2" />
        <div v-html="t('blocks.solution.structuration.description')" class="text-base leading-relaxed" />
      </article>
      <article class="basis-full p-4 border-2 border-primary/20 border-dashed rounded-lg">
        <h3 v-html="t('blocks.solution.tokenization.title')" class="font-semibold text-xl mb-2" />
        <div v-html="t('blocks.solution.tokenization.description')" class="text-base leading-relaxed" />
      </article>
      <article class="basis-full p-4 border-2 border-primary/20 border-dashed rounded-lg">
        <h3 v-html="t('blocks.solution.distribution.title')" class="font-semibold text-xl mb-2" />
        <div v-html="t('blocks.solution.distribution.description')" class="text-base leading-relaxed" />
      </article>
    </div>
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <!-- Why Section -->
  <section class="max-w-7xl mx-auto my-8 sm:my-16 px-4 lg:px-8">
    <h2 v-html="t('blocks.why.title')" class="font-semibold text-3xl mb-4" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <article class="basis-full p-4 border-2 border-primary/20 border-dashed rounded-lg">
        <h3 v-html="t('blocks.why.regulation.title')" class="font-semibold text-xl mb-2" />
        <div v-html="t('blocks.why.regulation.description')" class="text-base leading-relaxed" />
      </article>
      <article class="basis-full p-4 border-2 border-primary/20 border-dashed rounded-lg">
        <h3 v-html="t('blocks.why.yield.title')" class="font-semibold text-xl mb-2" />
        <div v-html="t('blocks.why.yield.description')" class="text-base leading-relaxed" />
      </article>
      <article class="basis-full p-4 border-2 border-primary/20 border-dashed rounded-lg">
        <h3 v-html="t('blocks.why.impact.title')" class="font-semibold text-xl mb-2" />
        <div v-html="t('blocks.why.impact.description')" class="text-base leading-relaxed" />
      </article>
      <article class="basis-full p-4 border-2 border-primary/20 border-dashed rounded-lg">
        <h3 v-html="t('blocks.why.innovation.title')" class="font-semibold text-xl mb-2" />
        <div v-html="t('blocks.why.innovation.description')" class="text-base leading-relaxed" />
      </article>
    </div>
  </section>

</template>
