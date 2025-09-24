<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocalization } from '@/composables/useLocalization'
import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue'

const { t } = useI18n()
const { currentLocale, getRouteFor } = useLocalization()
</script>

<template>
  <div class="max-w-7xl mx-auto flex flex-col gap-3 py-8 sm:py-16 px-4 lg:px-8 justify-center text-primary">
    
  </div>
</template>

<style scoped></style>
