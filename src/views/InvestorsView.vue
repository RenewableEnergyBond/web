<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useLocalization } from '@/composables/useLocalization'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { getRouteFor } = useLocalization()

</script>

<template>
  <!-- HERO -->
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

  <!-- CONTEXTE & OPPORTUNITÉ -->
  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <h2 class="font-semibold text-3xl mb-4">
      {{ t('investors.context.title') }}
    </h2>
    <div class="md:col-span-7 text-muted-foreground leading-relaxed">
      <p v-html="t('investors.context.paragraph1')" />
      <p v-html="t('investors.context.paragraph2')" />
      <p v-html="t('investors.context.paragraph3')" />
    </div>
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <!-- NOTRE OFFRE -->
  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <h2 class="font-semibold text-3xl mb-4">
      {{ t('investors.offer.title') }}
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <!-- Digital Bonds -->
      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <Icon icon="mdi:cube-outline" class="text-2xl" />
          <span v-html="t('investors.offer.digitalBonds.title')"></span>
        </h3>
        <p class="text-base leading-relaxed" v-html="t('investors.offer.digitalBonds.description')" />
      </article>

      <!-- Underlying -->
      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <Icon icon="mdi:solar-panel" class="text-2xl" />
          <span v-html="t('investors.offer.underlying.title')"></span>
        </h3>
        <p class="text-base leading-relaxed" v-html="t('investors.offer.underlying.description')" />
      </article>

      <!-- Distribution -->
      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <Icon icon="mdi:account-group" class="text-2xl" />
          <span v-html="t('investors.offer.distribution.title')"></span>
        </h3>
        <p class="text-base leading-relaxed" v-html="t('investors.offer.distribution.description')" />
      </article>
    </div>
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <!-- POURQUOI INVESTIR AVEC NOUS -->
  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <h2 class="font-semibold text-3xl mb-4" v-html="t('investors.why.title')"></h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <Icon icon="mdi:scale-balance" class="text-2xl" />
          <span v-html="t('investors.why.regulatory.title')"></span>
        </h3>
        <div v-html="t('investors.why.regulatory.description')" class="text-base leading-relaxed" />
      </article>

      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <Icon icon="mdi:sprout" class="text-2xl" />
          <span v-html="t('investors.why.impact.title')"></span>
        </h3>
        <div v-html="t('investors.why.impact.description')" class="text-base leading-relaxed" />
      </article>

      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <Icon icon="mdi:finance" class="text-2xl" />
          <span v-html="t('investors.why.yield.title')"></span>
        </h3>
        <div v-html="t('investors.why.yield.description')" class="text-base leading-relaxed" />
      </article>

      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <Icon icon="mdi:flask" class="text-2xl" />
          <span v-html="t('investors.why.innovation.title')"></span>
        </h3>
        <div v-html="t('investors.why.innovation.description')" class="text-base leading-relaxed" />
      </article>

    </div>
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <!-- COMPARATIF -->
  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <h2 class="font-semibold text-3xl mb-4">
      {{ t('investors.comparison.title') }}
    </h2>

    <div class="overflow-x-auto">
      <table class="min-w-full text-sm">
        <thead class="bg-muted/40">
          <tr class="bg-primary text-white font-semibold">
            <th class="p-4 text-left">{{ t('investors.comparison.headers.assetClass') }}</th>
            <th class="p-4 text-center">{{ t('investors.comparison.headers.yield') }}</th>
            <th class="p-4 text-center">{{ t('investors.comparison.headers.volatility') }}</th>
            <th class="p-4 text-center">{{ t('investors.comparison.headers.esg') }}</th>
            <th class="p-4 text-center">{{ t('investors.comparison.headers.regulation') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t-2 border-primary/20 hover:border-primary/40 border-dashed">
            <td class="p-4 font-semibold">{{ t('investors.comparison.rows.crypto.name') }}</td>
            <td class="p-4 text-center">{{ t('investors.comparison.rows.crypto.yield') }}</td>
            <td class="p-4 text-center">{{ t('investors.comparison.rows.crypto.volatility') }}</td>
            <td class="p-4 text-center">{{ t('investors.comparison.rows.crypto.esg') }}</td>
            <td class="p-4 text-center">{{ t('investors.comparison.rows.crypto.regulation') }}</td>
          </tr>
          <tr class="border-t-2 border-primary/20 hover:border-primary/40 border-dashed">
            <td class="p-4 font-semibold">{{ t('investors.comparison.rows.stable.name') }}</td>
            <td class="p-4 text-center">{{ t('investors.comparison.rows.stable.yield') }}</td>
            <td class="p-4 text-center">{{ t('investors.comparison.rows.stable.volatility') }}</td>
            <td class="p-4 text-center">{{ t('investors.comparison.rows.stable.esg') }}</td>
            <td class="p-4 text-center">{{ t('investors.comparison.rows.stable.regulation') }}</td>
          </tr>
          <tr class="border-t-2 border-primary/20 hover:border-primary/40 border-dashed">
            <td class="p-4 font-semibold">{{ t('investors.comparison.rows.commodities.name') }}</td>
            <td class="p-4 text-center">{{ t('investors.comparison.rows.commodities.yield') }}</td>
            <td class="p-4 text-center">{{ t('investors.comparison.rows.commodities.volatility') }}</td>
            <td class="p-4 text-center">{{ t('investors.comparison.rows.commodities.esg') }}</td>
            <td class="p-4 text-center">{{ t('investors.comparison.rows.commodities.regulation') }}</td>
          </tr>
          <tr
            class="border-t-2 border-primary/20 hover:border-primary/40 border-dashed bg-secondary text-white font-semibold">
            <td class="p-4 font-semibold">{{ t('investors.comparison.rows.rebond.name') }}</td>
            <td class="p-4 text-center">{{ t('investors.comparison.rows.rebond.yield') }}</td>
            <td class="p-4 text-center">{{ t('investors.comparison.rows.rebond.volatility') }}</td>
            <td class="p-4 text-center">{{ t('investors.comparison.rows.rebond.esg') }}</td>
            <td class="p-4 text-center">{{ t('investors.comparison.rows.rebond.regulation') }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <!-- CTA FINAL -->
  <section class="max-w-7xl mx-auto flex flex-col gap-3 py-8 sm:py-16 px-4 lg:px-8 justify-center">
    <div class="flex flex-col leading-normal">
      <h2 class="font-semibold lg:text-3xl md:text-2xl sm:text-xl text-lg" v-html="t('investors.cta.title')" />
    </div>

    <div class="flex flex-col gap-3 lg:flex-row justify-between items-center">
      <div class="text-lg md:text-xl" v-html="t('investors.cta.subtitle')" />
      <RouterLink :to="getRouteFor('Contact')"
        class="text-primary font-semibold py-2 px-2 border-1 inline-flex items-center gap-1 rounded-lg self-end hover:brightness-[120%] uppercase"
        :aria-label="t('investors.cta.button')">
        <Icon icon="mdi:arrow-right" class="text-2xl" />
        {{ t('investors.cta.button') }}
      </RouterLink>
    </div>
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />
</template>
