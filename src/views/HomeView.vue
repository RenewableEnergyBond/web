<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocalization } from '@/composables/useLocalization'
import { useSeo } from '@/composables/useSeo'
import { Icon } from '@iconify/vue'
import AMFLogo from '@/components/logos/AMFLogo.vue'
import CreditMutuelLogo from '@/components/logos/CreditMutuelLogo.vue'
import EthereumLogo from '@/components/logos/EthereumLogo.vue'

const { t } = useI18n()
const { getRouteFor } = useLocalization()

// SEO
useSeo('home')
</script>

<template>
  <!-- Hero Section -->
  <section class="max-w-7xl mx-auto flex flex-col gap-3 py-8 sm:py-16 px-4 lg:px-8 justify-center">
    <div class="flex flex-col leading-normal">
      <h1 class="font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl uppercase" v-html="t('home.hero.title')" />
      <p class="font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl uppercase"
        v-html="t('home.hero.subtitle1')" />
    </div>

    <div class="flex flex-col gap-3 lg:flex-row justify-between items-center">
      <div class="lg:w-2/3 text-lg md:text-xl" v-html="t('home.hero.intro')" />
    </div>
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <!-- Section CTA & Funnels -->
  <div
    class="bg-[center_bottom] md:bg-[center_-270px] relative w-full overflow-hidden bg-cover bg-fixed bg-no-repeat"
    :style="{ backgroundImage: 'url(assets/hero-1920.jpg)' }">
    <section class="max-w-7xl mx-auto p-4 lg:p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <article class="bg-white/90 basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg flex flex-col items-center justify-center text-center">
          <h3 class="text-xl mb-2 font-semibold" v-html="t('home.funnels.producers.title')"></h3>
          <p class="mb-2" v-html="t('home.funnels.producers.text')"></p>
          <p>
            <RouterLink :to="getRouteFor('Producers')"
              class="text-primary font-semibold text-lg py-2 px-2 border-1 inline-flex items-center gap-1 rounded-lg self-end hover:brightness-[120%] uppercase"
              :aria-label="t('home.hero.contact')">
              <Icon icon="mdi:calculator" class="text-2xl" />
              {{ t('home.funnels.producers.cta') }}
            </RouterLink>
          </p>
        </article>
        <article class="bg-white/90 basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg flex flex-col items-center justify-center text-center">
          <h3 class="text-xl mb-2 font-semibold" v-html="t('home.funnels.investors.title')"></h3>
          <p class="mb-2" v-html="t('home.funnels.investors.text')"></p>
          <p>
            <RouterLink :to="getRouteFor('Investors')"
              class="text-primary font-semibold text-lg py-2 px-2 border-1 inline-flex items-center gap-1 rounded-lg self-end hover:brightness-[120%] uppercase"
              :aria-label="t('home.hero.contact')">
              <Icon icon="mdi:account-check" class="text-2xl" />
              {{ t('home.funnels.investors.cta') }}
            </RouterLink>
          </p>
        </article>
      </div>
    </section>
  </div>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <!-- Compliance Section -->
  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <h2 class="font-semibold text-2xl sm:text-3xl mb-4">
      <span v-html="t('home.compliance.title')"></span>
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <article
        class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg flex flex-col items-center justify-center">
        <h3 class="text-base mb-2 flex flex-col gap-2 items-center text-center">
          <span class="" v-html="t('home.compliance.regulation')"></span>
          <div>
            <AMFLogo class="h-12" />
          </div>
        </h3>
      </article>

      <article
        class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg flex flex-col items-center justify-center">
        <h3 class="text-base mb-2 flex flex-col gap-2 items-center text-center">
          <span class="" v-html="t('home.compliance.custody')"></span>
          <div>
            <CreditMutuelLogo class="h-12" />
          </div>
        </h3>
      </article>

      <article
        class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg flex flex-col items-center justify-center">
        <h3 class="text-base mb-2 flex flex-col gap-2 items-center text-center">
          <span class="" v-html="t('home.compliance.security')"></span>
          <div>
            <EthereumLogo class="h-12" />
          </div>
        </h3>
      </article>
    </div>
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <!-- Solution Section -->
  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <h2 v-html="t('home.solution.title')" class="font-semibold  text-2xl sm:text-3xl mb-4" />
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <Icon icon="mdi:file-sign" class="text-2xl" />
          <span v-html="t('home.solution.structuration.title')"></span>
        </h3>
        <div v-html="t('home.solution.structuration.description')" class="text-base leading-relaxed" />
      </article>
      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <Icon icon="mdi:cube-scan" class="text-2xl" />
          <span v-html="t('home.solution.tokenization.title')"></span>
        </h3>
        <div v-html="t('home.solution.tokenization.description')" class="text-base leading-relaxed" />
      </article>
      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <Icon icon="mdi:account-group" class="text-2xl" />
          <span v-html="t('home.solution.distribution.title')"></span>
        </h3>
        <div v-html="t('home.solution.distribution.description')" class="text-base leading-relaxed" />
      </article>
    </div>
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <!-- Why Section -->
  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <h2 v-html="t('home.why.title')" class="font-semibold  text-2xl sm:text-3xl mb-4" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <Icon icon="mdi:scale-balance" class="text-2xl" />
          <span v-html="t('home.why.regulation.title')"></span>
        </h3>
        <div v-html="t('home.why.regulation.description')" class="text-base leading-relaxed" />
      </article>
      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <Icon icon="mdi:finance" class="text-2xl" />
          <span v-html="t('home.why.yield.title')"></span>
        </h3>
        <div v-html="t('home.why.yield.description')" class="text-base leading-relaxed" />
      </article>
      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <Icon icon="mdi:sprout" class="text-2xl" />
          <span v-html="t('home.why.impact.title')"></span>
        </h3>
        <div v-html="t('home.why.impact.description')" class="text-base leading-relaxed" />
      </article>
      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <Icon icon="mdi:flask" class="text-2xl" />
          <span v-html="t('home.why.innovation.title')"></span>
        </h3>
        <div v-html="t('home.why.innovation.description')" class="text-base leading-relaxed" />
      </article>
    </div>
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <!-- KPIs Section -->
  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <h2 class="font-semibold  text-2xl sm:text-3xl mb-4" v-html="t('home.kpi.title')"></h2>
    <div class="flex flex-col md:flex-row gap-4">
      <div class="grow p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h4 class="text-center">
          <span v-html="t('home.kpi.pipe')"></span>
        </h4>
      </div>
      <div class="grow p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h4 class="text-center">
          <span v-html="t('home.kpi.yield')"></span>
        </h4>
      </div>
      <div class="grow p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h4 class="text-center">
          <span v-html="t('home.kpi.duration')"></span>
        </h4>
      </div>
    </div>
  </section>

</template>
