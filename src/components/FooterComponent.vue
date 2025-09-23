<script setup lang="ts">
import NewsletterForm from '@/components/NewsletterForm.vue';
import SocialLinks from '@/components/SocialLinks.vue';
import { computed } from 'vue';
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

// Langue actuelle basée sur la route
const currentLocale = computed(() => getLocaleFromRoute(route));

// Helper pour générer les routes localisées
const getRouteFor = (routeName: string) => {
  return { name: getLocalizedRouteName(routeName, currentLocale.value) };
};
</script>

<template>
  <footer>
    <div :class class="bg-primary/20 px-4 py-12">
      <div class="container lg:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Menu -->
        <div>
          <ul class="text-primary font-medium">
            <li>
              <RouterLink :to="getRouteFor('Home')" class="font-semibold hover:brightness-[120%]">
                <span class="text-secondary">re</span>
                <span class="text-primary">bond</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="getRouteFor('Mission')" class="hover:brightness-[120%]">
                {{ t('menu.mission') }}</RouterLink>
            </li>
            <li>
              <RouterLink :to="getRouteFor('Operation')" class="hover:brightness-[120%]">
                {{ t('menu.operation') }}</RouterLink>
            </li>
            <!-- <li>
              <RouterLink :to="getRouteFor('Producer')" class="hover:underline">
                {{ t('menu.producer') }}</RouterLink>
            </li>
            <li>
              <RouterLink :to="getRouteFor('Investor')" class="hover:underline">
                {{ t('menu.investor') }}</RouterLink>
            </li> -->
            <li>
              <RouterLink :to="getRouteFor('Contact')" class="hover:brightness-[120%]">
                {{ t('menu.contact') }}</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Social / Newsletter -->
        <div class="text-primary text-right flex flex-col items-end">
          <SocialLinks />
          <NewsletterForm />
        </div>

      </div>
    </div>
    <div class="bg-primary text-white text-sm py-4 px-6">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>{{ t('footer.copyright') }}</p>
        <ul class="flex space-x-4 text-center items-center">
          <li><a href="#" class="hover:underline">{{ t('footer.legal.terms') }}</a></li>
          <li><a href="#" class="hover:underline">{{ t('footer.legal.privacy') }}</a></li>
          <li><a href="#" class="hover:underline">{{ t('footer.legal.cookies') }}</a></li>
        </ul>
      </div>
    </div>

  </footer>

</template>
