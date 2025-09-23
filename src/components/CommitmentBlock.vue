<script setup lang="ts">
import CheckIcon from '@/icons/CheckIcon.vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="container m-auto lg:max-w-5xl flex flex-col lg:flex-row gap-3 py-8 sm:py-16 px-4">
    <div class="flex-1">
      <div class="text-primary font-semibold lg:text-4xl md:text-3xl sm:text-2xl text-xl">
        {{ t('components.commitment.title') }}
      </div>
    </div>
    <div class="flex-1">
      <div class="md:text-xl text-lg flex gap-1">
        <CheckIcon class="w-6 fill-secondary" />
        <div>{{ t('components.commitment.reasons.environmental') }}</div>
      </div>
      <div class="md:text-xl text-lg flex gap-1">
        <CheckIcon class="w-6 fill-secondary" />
        <div>{{ t('components.commitment.reasons.compliance') }}</div>
      </div>
      <div class="md:text-xl text-lg flex gap-1">
        <CheckIcon class="w-6 fill-secondary" />
        <div>{{ t('components.commitment.reasons.transparency') }}</div>
      </div>
      <div class="md:text-xl text-lg flex gap-1">
        <CheckIcon class="w-6 fill-secondary" />
        <div>{{ t('components.commitment.reasons.accessibility') }}</div>
      </div>
    </div>
  </div>
</template>