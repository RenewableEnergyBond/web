<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocalization } from '@/composables/useLocalization'
import { useSeo } from '@/composables/useSeo'
import CurrencyEurIcon from '@/components/icons/CurrencyEurIcon.vue'
import FileSignIcon from '@/components/icons/FileSignIcon.vue'
import CubeSendIcon from '@/components/icons/CubeSendIcon.vue'
import SupportIcon from '@/components/icons/SupportIcon.vue'
import BankPlusIcon from '@/components/icons/BankPlusIcon.vue'
import SproutIcon from '@/components/icons/SproutIcon.vue'

const { t } = useI18n()
const { getRouteFor } = useLocalization()

// SEO
useSeo('producers')
</script>

<template>
  <!-- Hero Section -->
  <section class="max-w-7xl mx-auto flex flex-col gap-3 py-8 sm:py-16 px-4 lg:px-8 justify-center">
    <div class="flex flex-col leading-normal">
      <h1 class="font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl uppercase"
        v-html="t('producers.hero.title')" />
    </div>

    <div class="flex flex-col gap-3 lg:flex-row justify-between items-center">
      <div class="text-lg md:text-xl" v-html="t('producers.hero.intro')" />
    </div>
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <!-- Needs Section -->
  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <div class="flex flex-col lg:flex-row gap-2 items-stretch">
      <div class="grow flex-1">
        <h2 class="font-semibold text-3xl mb-4">
          <span v-html="t('producers.needs.title')"></span>
        </h2>
        <div v-html="t('producers.needs.description')" class="text-base leading-relaxed" />
      </div>
      <div class="shrink h-full flex items-stretch">
        <img src="/assets/funding-gap.webp" alt="Funding Gap"
          class="object-contain h-full lg:max-h-[160px] border-2 border-primary/20 hover:border-primary/40 border-dashed" />
      </div>
    </div>
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <!-- Solution Section -->
  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <h2 class="font-semibold text-3xl mb-4">
      <span v-html="t('producers.solution.title')"></span>
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <FileSignIcon class="w-6 h-6"></FileSignIcon>
          <span v-html="t('producers.solution.structured.title')"></span>
        </h3>
        <p v-html="t('producers.solution.structured.description')" class="text-base leading-relaxed"></p>
      </article>
      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <CubeSendIcon class="w-6 h-6"></CubeSendIcon>
          <span v-html="t('producers.solution.digitalization.title')"></span>
        </h3>
        <p v-html="t('producers.solution.digitalization.description')" class="text-base leading-relaxed"></p>
      </article>
      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <SupportIcon class="w-6 h-6"></SupportIcon>
          <span v-html="t('producers.solution.support.title')"></span>
        </h3>
        <p v-html="t('producers.solution.support.description')" class="text-base leading-relaxed"></p>
      </article>
    </div>
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <!-- Advantages Section -->
  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <h2 class="font-semibold text-3xl mb-4">
      <span v-html="t('producers.advantages.title')"></span>
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <BankPlusIcon class="w-6 h-6" />
          <span v-html="t('producers.advantages.capital.title')"></span>
        </h3>
        <div v-html="t('producers.advantages.capital.description')" class="text-base leading-relaxed" />
      </article>
      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <CurrencyEurIcon class="w-6 h-6" />
          <span v-html="t('producers.advantages.fees.title')"></span>
        </h3>
        <div v-html="t('producers.advantages.fees.description')" class="text-base leading-relaxed" />
      </article>
      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <SproutIcon class="w-6 h-6"></SproutIcon>
          <span v-html="t('producers.advantages.esg.title')"></span>
        </h3>
        <div v-html="t('producers.advantages.esg.description')" class="text-base leading-relaxed" />
      </article>
      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <CubeSendIcon class="w-6 h-6" />
          <span v-html="t('producers.advantages.speed.title')"></span>
        </h3>
        <div v-html="t('producers.advantages.speed.description')" class="text-base leading-relaxed" />
      </article>
    </div>
  </section>

</template>
