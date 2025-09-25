<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const currentUrl = computed(() => {
  if (import.meta.env.SSR) return ''
  return new URL(route.fullPath, window.location.origin).href
})

const redirectUrl = computed(() => 
  `https://bff.ecoindex.fr/redirect/?url=${currentUrl.value}`
)

const badgeUrl = computed(() => 
  `https://bff.ecoindex.fr/badge/?theme=light&url=${currentUrl.value}`
)
</script>

<template>
  <ClientOnly>
    <a 
      :href="redirectUrl" 
      target="_blank"
      rel="noopener noreferrer"
    >
      <img :src="badgeUrl" alt="Ecoindex Badge" />
    </a>
  </ClientOnly>
</template>