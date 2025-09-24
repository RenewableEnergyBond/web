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
    
  </div>
</template>

<style scoped></style>
