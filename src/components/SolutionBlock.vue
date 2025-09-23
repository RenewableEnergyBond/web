<script setup lang="ts">
import FinanceIcon from '@/icons/FinanceIcon.vue';
import CogIcon from '@/icons/CogIcon.vue';
import BankTransferIcon from '@/icons/BankTransferIcon.vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="bg-primary/20">
    <div class="container lg:max-w-5xl m-auto py-8 sm:py-16 flex flex-col">
      <div class="text-primary font-semibold lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center mb-8">
        {{ t('components.solution.title') }}
      </div>
      <div class="flex flex-col sm:flex-row gap-6 sm:gap-2">
        <div class="flex-1 flex flex-col text-center">
          <FinanceIcon class="w-16 md:w-24 self-center" />
          <div class="md:text-xl font-semibold">{{ t('components.solution.services.bonds') }}</div>
          <div></div>
        </div>
        <div class="sm:hidden h-0 border-t-2 border-primary/20 border-dashed"></div>
        <div class="flex-1 flex flex-col text-center">
          <CogIcon class="w-16 md:w-24 self-center" />
          <div class="md:text-xl font-semibold">{{ t('components.solution.services.tokenization') }}</div>
          <div></div>
        </div>
        <div class="sm:hidden h-0 border-t-2 border-primary/20 border-dashed"></div>
        <div class="flex-1 flex flex-col text-center">
          <BankTransferIcon class="w-16 md:w-24 self-center" />
          <div class="md:text-xl font-semibold">{{ t('components.solution.services.distribution') }}</div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>