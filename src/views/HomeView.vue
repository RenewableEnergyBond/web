<script setup lang="ts">
import WhatWeDoBlock from '@/components/WhatWeDoBlock.vue';
import WhyBlock from '@/components/WhyBlock.vue';
import TargetsBlock from '@/components/TargetsBlock.vue';
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
    <div class="text-lg md:text-xl" v-html="t('home.description')">
    </div>
  </div>

  <div class="h-[30vh] relative w-full overflow-hidden bg-cover bg-fixed bg-[center_-30vh] bg-no-repeat"
    style="background-image: url(assets/hero-1920.jpg);">
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

  <WhatWeDoBlock />

  <WhyBlock />

  <TargetsBlock />

</template>

<style scoped>

</style>
