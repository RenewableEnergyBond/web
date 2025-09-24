<script setup lang="ts">
import FinanceIcon from '@/components/icons/FinanceIcon.vue';
import CogIcon from '@/components/icons/CogIcon.vue';
import BankTransferIcon from '@/components/icons/BankTransferIcon.vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="container lg:max-w-5xl m-auto py-8 sm:py-16 flex flex-col">
    <div class="text-primary font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center mb-8">
      {{ t('components.whatWeDo.title') }}
    </div>
    <div class="flex flex-col sm:flex-row gap-6 sm:gap-2">
      <div class="flex-1 flex flex-col text-center">
        <FinanceIcon class="w-16 md:w-24 self-center" />
        <div class="md:text-xl font-semibold">{{ t('components.whatWeDo.services.bonds') }}</div>
        <div></div>
      </div>
      <div class="sm:hidden h-0 border-t-2 border-primary/20 border-dashed"></div>
      <div class="flex-1 flex flex-col text-center">
        <CogIcon class="w-16 md:w-24 self-center" />
        <div class="md:text-xl font-semibold">{{ t('components.whatWeDo.services.tokenization') }}</div>
        <div></div>
      </div>
      <div class="sm:hidden h-0 border-t-2 border-primary/20 border-dashed"></div>
      <div class="flex-1 flex flex-col text-center">
        <BankTransferIcon class="w-16 md:w-24 self-center" />
        <div class="md:text-xl font-semibold">{{ t('components.whatWeDo.services.distribution') }}</div>
        <div></div>
      </div>
    </div>
  </div>
</template>