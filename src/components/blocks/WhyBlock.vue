<script setup lang="ts">
import CheckIcon from '@/components/icons/CheckIcon.vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="bg-primary/20">
    <div class="container m-auto lg:max-w-5xl flex flex-col md:flex-row justify-center px-4 py-8 gap-2">
      <div class="flex flex-1">
        <div class="md:text-3xl text-xl font-semibold">{{ t('components.why.title') }}</div>
      </div>
      <div class="flex-1">
        <div class="md:text-xl text-lg flex gap-1">
          <CheckIcon class="w-6 fill-secondary" />
          <div>{{ t('components.why.reasons.expertise') }}</div>
        </div>
        <div class="md:text-xl text-lg flex gap-1">
          <CheckIcon class="w-6 fill-secondary" />
          <div>{{ t('components.why.reasons.compliance') }}</div>
        </div>
        <div class="md:text-xl text-lg flex gap-1">
          <CheckIcon class="w-6 fill-secondary" />
          <div>{{ t('components.why.reasons.quality') }}</div>
        </div>
        <div class="md:text-xl text-lg flex gap-1">
          <CheckIcon class="w-6 fill-secondary" />
          <div>{{ t('components.why.reasons.tech') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>