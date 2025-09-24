<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { getLocaleFromRoute, getLocalizedRouteName } from '@/router';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue';

const { t } = useI18n();
const route = useRoute();

// Langue actuelle basée sur la route
const currentLocale = computed(() => getLocaleFromRoute(route));

// Helper pour générer les routes localisées
const getRouteFor = (routeName: string) => {
  return { name: getLocalizedRouteName(routeName, currentLocale.value) };
};
</script>

<template>
  <div class="max-w-7xl mx-auto flex flex-col gap-3 py-8 sm:py-16 px-4 lg:px-8 justify-center text-primary">
    <div class="flex flex-col leading-normal">
      <h1 class="font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl uppercase" v-html="t('home.hero.title')">
      </h1>
      <div class="font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl uppercase"
        v-html="t('home.hero.subtitle1')">
      </div>
    </div>
    <div class="flex flex-col gap-3 lg:flex-row justify-between items-center">
      <div class="lg:w-2/3 text-lg md:text-xl" v-html="t('home.hero.intro')">
      </div>
        <RouterLink :to="getRouteFor('Contact')" class="text-primary hover:brightness-[120%] active:brightness-[120%] font-medium text-lg md:text-xl
          py-2 px-2 border-1 inline-flex items-center gap-1 rounded-lg self-end">
          <ArrowRightIcon class="w-6 h-6"/>
          {{ t('home.hero.contact') }}
        </RouterLink>
    </div>
  </div>

  <div class="h-[180px] bg-[center_-40px] sm:bg-[center_-270px] relative w-full overflow-hidden bg-cover bg-fixed  bg-no-repeat"
    style="background-image: url(assets/hero-1920.jpg);">
  </div>

  <div class="max-w-7xl mx-auto my-8 sm:my-16 px-4 lg:px-8">
    <div>
      <h3 v-html="t('blocks.solution.title')" class="font-semibold text-3xl mb-4"></h3>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="basis-full p-4 border-2 border-primary/20 border-dashed rounded-lg">
          <h4 v-html="t('blocks.solution.structuration.title')" class="font-semibold text-xl mb-2"></h4>
          <div v-html="t('blocks.solution.structuration.description')"></div>
        </div>
        <div class="basis-full p-4 border-2 border-primary/20 border-dashed rounded-lg">
          <h4 v-html="t('blocks.solution.tokenization.title')" class="font-semibold text-xl mb-2"></h4>
          <div v-html="t('blocks.solution.tokenization.description')"></div>
        </div>
        <div class="basis-full p-4 border-2 border-primary/20 border-dashed rounded-lg">
          <h4 v-html="t('blocks.solution.distribution.title')" class="font-semibold text-xl mb-2"></h4>
          <div v-html="t('blocks.solution.distribution.description')"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="h-0 border-t-2 border-primary/20 border-dashed"></div>

  <div class="max-w-7xl mx-auto my-8 sm:my-16 px-4 lg:px-8">
    <div>
      <h3 v-html="t('blocks.why.title')" class="font-semibold text-3xl mb-4"></h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="basis-full p-4 border-2 border-primary/20 border-dashed rounded-lg">
          <h4 v-html="t('blocks.why.regulation.title')" class="font-semibold text-xl mb-2"></h4>
          <div v-html="t('blocks.why.regulation.description')"></div>
        </div>
        <div class="basis-full p-4 border-2 border-primary/20 border-dashed rounded-lg">
          <h4 v-html="t('blocks.why.yield.title')" class="font-semibold text-xl mb-2"></h4>
          <div v-html="t('blocks.why.yield.description')"></div>
        </div>
        <div class="basis-full p-4 border-2 border-primary/20 border-dashed rounded-lg">
          <h4 v-html="t('blocks.why.impact.title')" class="font-semibold text-xl mb-2"></h4>
          <div v-html="t('blocks.why.impact.description')"></div>
        </div>
        <div class="basis-full p-4 border-2 border-primary/20 border-dashed rounded-lg">
          <h4 v-html="t('blocks.why.innovation.title')" class="font-semibold text-xl mb-2"></h4>
          <div v-html="t('blocks.why.innovation.description')"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped></style>
