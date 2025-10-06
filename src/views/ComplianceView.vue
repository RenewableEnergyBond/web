<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocalization } from '@/composables/useLocalization'
import { useSeo } from '@/composables/useSeo'
import AMFLogo from '@/components/logos/AMFLogo.vue'
import CreditMutuelLogo from '@/components/logos/CreditMutuelLogo.vue'
import DotsafeLogo from '@/components/logos/DotsafeLogo.vue'
import EthereumLogo from '@/components/logos/EthereumLogo.vue'
import { Icon } from '@iconify/vue'

const { t } = useI18n()
const { getRouteFor } = useLocalization()

// SEO
useSeo('compliance')
</script>

<template>
  <!-- Hero Section -->
  <section class="max-w-7xl mx-auto flex flex-col gap-3 py-8 sm:py-16 px-4 lg:px-8 justify-center">
    <div class="flex flex-col leading-normal">
      <h1 class="font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl uppercase"
        v-html="t('compliance.hero.title')" />
    </div>

    <div class="flex flex-col gap-3 lg:flex-row justify-between items-center">
      <div class="text-lg md:text-xl" v-html="t('compliance.hero.intro')" />
    </div>
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <!-- Compliance Section -->
  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <h2 class="font-semibold text-2xl sm:text-3xl mb-4">
      <span v-html="t('compliance.regulation.title')"></span>
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <article
        class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg flex flex-col items-center justify-center">
        <h3 class="lg:text-xl sm:text-lg mb-2 flex flex-col gap-2 items-center text-center">
          <div>
            <AMFLogo class="h-16" />
          </div>
          <span class="text-nowrap" v-html="t('compliance.regulation.prospectus')"></span>
        </h3>
      </article>
      <article
        class="p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg flex flex-col items-center justify-center">
        <h3 class="lg:text-xl sm:text-lg mb-2 flex flex-col gap-2 items-center text-center">
          <div class="h-16 flex items-center self-center">
            <div class="font-semibold text-3xl">KYC / AML<sup class="text-xl">*</sup></div>
          </div>
          <div v-html="t('compliance.regulation.qualified')"></div>
        </h3>
      </article>
      <article
        class="p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg flex flex-col items-center justify-center">
        <h3 class="lg:text-xl sm:text-lg mb-2 flex flex-col gap-2 items-center text-center">
          <div class="h-16 flex items-center self-center">
            <div class="font-semibold text-3xl">MiFID II<sup class="text-xl">*</sup></div>
          </div>
          <span v-html="t('compliance.regulation.risk')"></span>
        </h3>
      </article>
    </div>
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <!-- Customer security Section -->
  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <h2 class="font-semibold text-2xl sm:text-3xl mb-4">
      <span v-html="t('compliance.customerSecurity.title')"></span>
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <article
        class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg flex flex-col items-center justify-center">
        <h3 class="text-base sm:text-md xl:text-lg mb-2 flex flex-col gap-2 items-center text-center">
          <span v-html="t('compliance.customerSecurity.custody')"></span>
          <div>
            <CreditMutuelLogo class="h-16" />
          </div>
          
        </h3>
      </article>
      <article
        class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg flex flex-col items-center justify-center">
        <h3 class="text-base sm:text-md xl:text-lg mb-2 flex flex-col gap-2 items-center text-center">
          <span v-html="t('compliance.customerSecurity.traceability')"></span>
          <div class="h-16 flex items-center">
            <EthereumLogo class="h-12" />
          </div>
        </h3>
      </article>
      <article
        class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg flex flex-col items-center justify-center">
        <h3 class="text-base sm:text-md xl:text-lg mb-2 flex flex-col gap-2 items-center text-center">
          <span v-html="t('compliance.customerSecurity.tokenization')"></span>
          <div class="h-16 flex items-center">
            <DotsafeLogo class="h-8" />
          </div>
        </h3>
      </article>
    </div>
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <h2 class="font-semibold text-2xl sm:text-3xl mb-4" v-html="t('compliance.rwa.title')"></h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <Icon icon="mdi:chart-line" class="text-2xl" />
          <span v-html="t('compliance.rwa.study.title')"></span>
        </h3>
        <div v-html="t('compliance.rwa.study.description')" class="text-base leading-relaxed" />
      </article>

      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <Icon icon="mdi:math-compass" class="text-2xl" />
          <span v-html="t('compliance.rwa.structuration.title')"></span>
        </h3>
        <div v-html="t('compliance.rwa.structuration.description')" class="text-base leading-relaxed" />
      </article>

      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <Icon icon="mdi:bank" class="text-2xl" />
          <span v-html="t('compliance.rwa.custody.title')"></span>
        </h3>
        <div v-html="t('compliance.rwa.custody.description')" class="text-base leading-relaxed" />
      </article>

      <article class="basis-full p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center">
          <Icon icon="mdi:chart-bar" class="text-2xl" />
          <span v-html="t('compliance.rwa.impact.title')"></span>
        </h3>
        <div v-html="t('compliance.rwa.impact.description')" class="text-base leading-relaxed" />
      </article>

    </div>
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <h2 class="font-semibold text-2xl sm:text-3xl mb-4" v-html="t('compliance.governance.title')"></h2>
    <div class="flex flex-col lg:flex-row gap-4">

      <article class="grow p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center text-nowrap">
          <Icon icon="mdi:eye-check" class="text-2xl" />
          <span v-html="t('compliance.governance.advisory.title')"></span>
        </h3>
        <div v-html="t('compliance.governance.advisory.description')" class="text-base leading-relaxed" />
      </article>

      <article class="p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <h3 class="font-semibold xl:text-xl sm:text-lg mb-2 flex gap-2 items-center text-nowrap">
          <Icon icon="mdi:scale-balance" class="text-2xl" />
          <span v-html="t('compliance.governance.consultants.title')"></span>
        </h3>
        <div v-html="t('compliance.governance.consultants.description')" class="text-base leading-relaxed" />
      </article>

    </div>
  </section>

  <!-- Section Divider -->
  <hr class="h-0 border-t-2 border-primary/20 border-dashed" />

  <section class="max-w-7xl mx-auto p-4 lg:p-8">
    <h2 class="font-semibold text-2xl sm:text-3xl mb-4" v-html="t('compliance.transparency.title')"></h2>
    <div class="flex flex-col lg:flex-row gap-4">

      <article class="grow p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <p class="text-base leading-relaxed mb-2 flex gap-2">
          <span>
            <Icon icon="mdi:alert-circle-outline" class="text-2xl" />
          </span>
          <span v-html="t('compliance.transparency.disclaimer')"></span>
        </p>
      </article>

      <article class="grow p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <p class="text-base leading-relaxed mb-2 flex gap-2">
          <span>
            <Icon icon="mdi:shield-account-outline" class="text-2xl" />
          </span>
          <span v-html="t('compliance.transparency.restricted')"></span>
        </p>
      </article>

      <article class="grow p-4 border-2 border-primary/20 hover:border-primary/40 border-dashed rounded-lg">
        <p class="text-base leading-relaxed mb-2 flex gap-2">
          <span>
            <Icon icon="mdi:file-chart-outline" class="text-2xl" />
          </span>
          <span v-html="t('compliance.transparency.reporting')"></span>
        </p>
      </article>

    </div>
  </section>

</template>
