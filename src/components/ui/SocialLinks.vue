<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n()

// Configuration des liens sociaux
const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/rebond-eco',
    icon: 'mdi:linkedin',
    ariaLabel: 'Follow us on LinkedIn'
  }
] as const
</script>

<template>
  <div class="flex gap-2 mb-4 items-center">
    <p class="font-medium">{{ t('footer.followUs') }}:</p>
    <nav class="flex gap-1" aria-label="Social media links">
      <a
        v-for="link in socialLinks"
        :key="link.name"
        :href="link.url"
        :aria-label="link.ariaLabel"
        class="inline-flex items-center justify-center p-1 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon 
          :icon="link.icon" 
          class="w-8 h-8 text-primary hover:text-primary/90 transition-colors" 
        />
      </a>
    </nav>
  </div>
</template>