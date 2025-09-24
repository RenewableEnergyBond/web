<script setup lang="ts">
import SocialLinks from '@/components/ui/SocialLinks.vue';
import ModalComponent from '@/components/ui/ModalComponent.vue';
import BrevoNewsletterForm from '@/components/forms/BrevoNewsletterForm.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { getLocaleFromRoute, getLocalizedRouteName } from '@/router';

const props = defineProps({
  class: {
    required: false
  }
})

const { t } = useI18n();
const route = useRoute();

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

// Langue actuelle basée sur la route
const currentLocale = computed(() => getLocaleFromRoute(route));

// Helper pour générer les routes localisées
const getRouteFor = (routeName: string) => {
  return { name: getLocalizedRouteName(routeName, currentLocale.value) };
};
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
            <button type="button" @click="openModal" class="text-white bg-primary hover:brightness-[120%] active:brightness-[120%] font-medium rounded-lg cursor-pointer 
                px-4 py-2 self-center text-nowrap">
              {{ t('footer.newsletter.subscribe') }}
            </button>
          </div>
        </div>

      </div>
    </div>
    <div class="bg-primary text-white text-sm">
      <div class="max-w-7xl py-4 px-4 lg:px-8 mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>{{ t('footer.copyright') }}</p>
        <ul class="flex space-x-4 text-center items-center">
          <li><a href="#" class="hover:underline">{{ t('footer.legal.terms') }}</a></li>
          <li><a href="#" class="hover:underline">{{ t('footer.legal.privacy') }}</a></li>
          <li><a href="#" class="hover:underline">{{ t('footer.legal.cookies') }}</a></li>
        </ul>
      </div>
    </div>

    <ModalComponent v-model="isModalOpen">
      <BrevoNewsletterForm :show-opt-in="true" />
    </ModalComponent>

  </footer>

</template>
