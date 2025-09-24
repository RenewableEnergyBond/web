<script setup lang="ts">
import CommitmentBlock from '@/components/blocks/CommitmentBlock.vue';
import SolutionBlock from '@/components/blocks/SolutionBlock.vue';
import TargetsBlock from '@/components/blocks/TargetsBlock.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>

<template>
  <div class="container m-auto lg:max-w-5xl flex flex-col gap-3 py-8 sm:py-16 px-4 justify-center text-center">
    <div class="flex flex-col leading-normal">
      <div class="text-primary font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl" v-html="t('mission.hero.title')">
      </div>
    </div>
    <div class="text-primary text-lg md:text-xl" v-html="t('mission.hero.description')">
    </div>
  </div>
  
  <SolutionBlock/>

  <CommitmentBlock/>

  <div class="h-0 border-t-2 border-primary/20 border-dashed"></div>

  <TargetsBlock/>

</template>

<style scoped></style>
