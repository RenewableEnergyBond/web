<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="container lg:max-w-5xl m-auto py-8 sm:py-16 flex flex-col">
    <div class="flex flex-col sm:flex-row gap-6 sm:gap-2">
      <div class="flex-1 flex flex-col gap-2 text-center">
        <div class="text-xl font-semibold">{{ t('components.targets.producer.title') }}</div>
        <div>{{ t('components.targets.producer.description') }}</div>
        <button type="button" class="text-white bg-primary hover:brightness-[120%] active:brightness-[120%] font-medium rounded-lg  
        px-4 py-2 self-center">{{ t('components.targets.producer.cta') }}</button>
      </div>
      <div class="sm:hidden h-0 border-t-2 border-primary/20 border-dashed"></div>
      <div class="flex-1 flex flex-col gap-2 text-center">
        <div class="text-xl font-semibold">{{ t('components.targets.investor.title') }}</div>
        <div>{{ t('components.targets.investor.description') }}</div>
        <button type="button" class="text-white bg-primary hover:brightness-[120%] active:brightness-[120%] font-medium rounded-lg  
        px-4 py-2 self-center">{{ t('components.targets.investor.cta') }}</button>
      </div>
    </div>
  </div>
</template>