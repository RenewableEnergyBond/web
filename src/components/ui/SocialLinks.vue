<script setup lang="ts">
import LinkedInIcon from '@/components/icons/LinkedInIcon.vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="flex gap-2 mb-4 items-center">
    <div class="font-medium">{{ t('footer.followUs') }}:</div>
    <div class="flex gap-1">
      <a href="#" aria-label="LinkedIn">
        <LinkedInIcon class="w-8 h-8 fill-primary hover:fill-primary/90 transition" />
      </a>
    </div>
  </div>
</template>