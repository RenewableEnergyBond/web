<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SocialLinks from '@/components/ui/SocialLinks.vue'
import ModalComponent from '@/components/ui/ModalComponent.vue'
import BrevoNewsletterForm from '@/components/forms/BrevoNewsletterForm.vue'
import { useLocalization } from '@/composables/useLocalization'
import MailIcon from '../icons/MailIcon.vue'
import { useRoute } from 'vue-router'

interface Props {
  class?: string
}

defineProps<Props>()

const { t } = useI18n()
const { getRouteFor } = useLocalization()

const route = useRoute();
const fullUrl = computed(() => {
  return new URL(route.fullPath, window.location.origin + window.location.pathname).href
});

const isModalOpen = ref(false)

const openModalNewsletter = (): void => {
  isModalOpen.value = true
}
</script>

<template>
  <footer>
    <div :class class="bg-primary/20">
      <div class="max-w-7xl py-12 px-4 lg:px-8 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">

        <div class="hidden sm:flex">
          <RouterLink :to="getRouteFor('Home')">
            <img alt="Logo rebond" src="/assets/logo-rebond.svg" class="h-[88px]" />
          </RouterLink>
        </div>

        <!-- Social / Newsletter -->
        <div class="text-primary text-right flex flex-col items-start sm:items-end">
          <SocialLinks />
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <button type="button" @click="openModalNewsletter"
              class="text-white bg-primary hover:brightness-[120%] active:brightness-[120%] font-medium rounded-lg cursor-pointer px-4 py-2 self-center text-nowrap transition-all duration-200 flex items-center gap-2">
              <MailIcon class="w-5 h-5"></MailIcon>
              {{ t('footer.newsletter.subscribe') }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primary text-white text-sm">
      <div class="max-w-7xl py-4 px-4 lg:px-8 mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>{{ t('footer.copyright') }}</p>
        <nav aria-label="Legal links">
          <ul class="flex space-x-4 text-center items-center">
            <li>
              <RouterLink :to="getRouteFor('Legals')" class="hover:underline transition-colors">
                {{ t('footer.legal.terms') }}
              </RouterLink>
            </li>
            <li>
              <a :href="`https://bff.ecoindex.fr/redirect/?url=${fullUrl}`" target="_blank">
                <img :src="`https://bff.ecoindex.fr/badge/?theme=light&url=${fullUrl}`" alt="Ecoindex Badge" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <ModalComponent v-model="isModalOpen">
      <BrevoNewsletterForm :show-opt-in="true" />
    </ModalComponent>

  </footer>

</template>
