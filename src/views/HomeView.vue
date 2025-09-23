<script setup lang="ts">
import FinanceIcon from '@/icons/FinanceIcon.vue';
import CogIcon from '@/icons/CogIcon.vue';
import BankTransferIcon from '@/icons/BankTransferIcon.vue';
import CheckIcon from '@/icons/CheckIcon.vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col gap-3 py-8 sm:py-16 px-4 justify-center text-center text-primary">
    <div class="flex flex-col leading-normal">
      <div class="font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl" 
           v-html="t('home.hero.title')">
      </div>
      <div class="font-semibold lg:text-3xl md:text-2xl text-xl"
           v-html="t('home.hero.subtitle1')">
      </div>
      <div class="font-semibold lg:text-3xl md:text-2xl text-xl">
        {{ t('home.hero.subtitle2') }}
      </div>
    </div>
    <div class="text-lg md:text-xl">
      <span class="text-secondary">re</span><span class="text-primary">bond</span> {{ t('home.description') }}
    </div>
  </div>

  <div class="h-[30vh] relative w-full overflow-hidden bg-cover bg-fixed bg-[center_-30vh] bg-no-repeat"
    style="background-image: url(assets/hero-1920.jpg);">
    <!-- <img alt="Centrale EnR" src="/assets/hero-1920.jpg"
        class="h-[30vh] w-full object-cover object-bottom absolute left-1/2 animate-zoom-loop" /> -->
  </div>

  <div class="md:hidden h-0 border-t-2 border-primary/20 border-dashed"></div>

  <div class="bg-primary/20">
    <div class="container m-auto lg:max-w-5xl flex flex-col md:flex-row justify-center">
      <div class="flex flex-1 flex-col text-center p-4">
        <div class="md:text-3xl text-xl font-semibold">{{ t('home.stats.yield.value') }}</div>
        <div class="md:text-lg">{{ t('home.stats.yield.label') }}</div>
      </div>
      <div class="md:hidden h-0 border-t-2 border-white border-dashed"></div>
      <div class="flex flex-1 flex-col text-center p-4">
        <div class="md:text-3xl text-xl font-semibold">{{ t('home.stats.partners.value') }}</div>
        <div class="md:text-lg"><span class="text-nowrap">{{ t('home.stats.partners.label') }}</span></div>
      </div>
      <div class="md:hidden h-0 border-t-2 border-white border-dashed"></div>
      <div class="flex flex-1 flex-col text-center p-4">
        <div class="md:text-3xl text-xl font-semibold">{{ t('home.stats.analysis.value') }}</div>
        <div class="md:text-lg"><span>{{ t('home.stats.analysis.label') }}</span></div>
      </div>
    </div>
  </div>

  <div class="container lg:max-w-5xl m-auto py-8 sm:py-16 flex flex-col">
    <div class="text-primary font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center mb-8">
      {{ t('home.whatWeDo.title') }}</div>
    <div class="flex flex-col sm:flex-row gap-6 sm:gap-2">
      <div class="flex-1 flex flex-col text-center">
        <FinanceIcon class="w-16 md:w-24 self-center" />
        <div class="md:text-xl font-semibold">{{ t('home.whatWeDo.services.bonds') }}</div>
        <div></div>
      </div>
      <div class="sm:hidden h-0 border-t-2 border-primary/20 border-dashed"></div>
      <div class="flex-1 flex flex-col text-center">
        <CogIcon class="w-16 md:w-24 self-center" />
        <div class="md:text-xl font-semibold">{{ t('home.whatWeDo.services.tokenization') }}</div>
        <div></div>
      </div>
      <div class="sm:hidden h-0 border-t-2 border-primary/20 border-dashed"></div>
      <div class="flex-1 flex flex-col text-center">
        <BankTransferIcon class="w-16 md:w-24 self-center" />
        <div class="md:text-xl font-semibold">{{ t('home.whatWeDo.services.distribution') }}</div>
        <div></div>
      </div>
    </div>
  </div>

  <div class="bg-primary/20">
    <div class="container m-auto lg:max-w-5xl flex flex-col md:flex-row justify-center px-4 py-8 gap-2">
      <div class="flex flex-1">
        <div class="md:text-3xl text-xl font-semibold">{{ t('home.why.title') }}</div>
      </div>
      <div class="flex-1">
        <div class="md:text-xl text-lg flex gap-1">
          <CheckIcon class="w-6 fill-secondary" />
          <div>{{ t('home.why.reasons.expertise') }}</div>
        </div>
        <div class="md:text-xl text-lg flex gap-1">
          <CheckIcon class="w-6 fill-secondary" />
          <div>{{ t('home.why.reasons.compliance') }}</div>
        </div>
        <div class="md:text-xl text-lg flex gap-1">
          <CheckIcon class="w-6 fill-secondary" />
          <div>{{ t('home.why.reasons.quality') }}</div>
        </div>
        <div class="md:text-xl text-lg flex gap-1">
          <CheckIcon class="w-6 fill-secondary" />
          <div>{{ t('home.why.reasons.tech') }}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="container lg:max-w-5xl m-auto py-8 sm:py-16 flex flex-col">
    <div class="flex flex-col sm:flex-row gap-6 sm:gap-2">
      <div class="flex-1 flex flex-col gap-2 text-center">
        <div class="text-xl font-semibold">{{ t('home.targets.producer.title') }}</div>
        <div>{{ t('home.targets.producer.description') }}</div>
        <button type="button" class="text-white bg-primary hover:brightness-[120%] active:brightness-[120%] font-medium rounded-lg text-lg 
        px-5 py-2.5 self-center">{{ t('home.targets.producer.cta') }}</button>
      </div>
      <div class="sm:hidden h-0 border-t-2 border-primary/20 border-dashed"></div>
      <div class="flex-1 flex flex-col gap-2 text-center">
        <div class="text-xl font-semibold">{{ t('home.targets.investor.title') }}</div>
        <div>{{ t('home.targets.investor.description') }}</div>
        <button type="button" class="text-white bg-primary hover:brightness-[120%] active:brightness-[120%] font-medium rounded-lg text-lg 
        px-5 py-2.5 self-center">{{ t('home.targets.investor.cta') }}</button>
      </div>
    </div>
  </div>

  <!-- <PitchSlide></PitchSlide> -->
  <!-- <section class="animate-jump flex flex-col py-16 gap-8">
        <h2
          class="text-3xl font-semibold tracking-tight leading-none text-primary md:text-4xl lg:text-5xl border-l-8 pl-4 border-primary">
          <span class="text-secondary">Financer</span> la transition énergétique
        </h2>
        <h2
          class="text-3xl font-semibold tracking-tight leading-none text-primary md:text-4xl lg:text-5xl border-l-8 pl-4 border-primary">
          <span class="text-secondary">Innover</span> dans le financement EnR
        </h2>
        <h2
          class="text-3xl font-semibold tracking-tight leading-none text-primary md:text-4xl lg:text-5xl border-l-8 pl-4 border-primary">
          <span class="text-secondary">Optimiser</span> la gestion financière
        </h2>
        <h2
          class="text-3xl font-semibold tracking-tight leading-none text-primary md:text-4xl lg:text-5xl border-l-8 pl-4 border-primary">
          <span class="text-secondary">Assurer</span> la conformité ESG
        </h2>
      </section> -->
  <!-- <div class="flex gap-2 items-center bg-primary px-4 text-white mb-4 min-h-20">
        <div class="flex-1 text-xl font-medium">Actifs réels détenus par une banque dépositaire agréée</div>
        <img alt="Logo CACEIS" src="/assets/logo-caceis.svg" class="h-12" />
      </div>
      <div class="flex gap-2 items-center bg-secondary px-4 text-white mb-4 min-h-20">
        <div class="flex-1 text-xl font-medium">Adossés à des contrats long-terme de rachat d'énergie</div>
        <img alt="Logo EDF" src="/assets/logo-edf.svg" class="h-12" />
      </div>
      <div class="flex gap-2 items-center bg-primary px-4 text-white mb-4 min-h-20">
        <div class="flex-1 text-xl font-medium">Sécurisés par les meilleures blockchains</div>
        <img alt="Logo ETHEREUM" src="/assets/logo-ethereum.svg" class="h-10" />
      </div>
      <div class="flex gap-2 items-center bg-secondary px-4 text-white min-h-20">
        <div class="flex-1 text-xl font-medium">Conformes aux réglementations française et européenne</div>
        <img alt="Logo AMF" src="/assets/logo-amf.svg" class="h-16" />
      </div> -->
</template>

<style scoped>
@keyframes zoom-loop {

  0%,
  100% {
    transform: translateX(-50%) scale(1);
  }

  50% {
    transform: translateX(-50%) scale(1.2);
  }
}

.animate-zoom-loop {
  animation: zoom-loop 7s ease-in-out infinite;
}
</style>
