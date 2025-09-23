<script setup lang="ts">
import LinkedInIcon from '@/icons/LinkedInIcon.vue';
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
              <RouterLink :to="getRouteFor('Mission')" class="hover:underline">
                {{ t('menu.mission') }}</RouterLink>
            </li>
            <li>
              <RouterLink :to="getRouteFor('Operation')" class="hover:underline">
                {{ t('menu.operation') }}</RouterLink>
            </li>
            <li>
              <RouterLink :to="getRouteFor('Producer')" class="hover:underline">
                {{ t('menu.producer') }}</RouterLink>
            </li>
            <li>
              <RouterLink :to="getRouteFor('Investor')" class="hover:underline">
                {{ t('menu.investor') }}</RouterLink>
            </li>
            <li>
              <RouterLink :to="getRouteFor('Contact')" class="hover:underline">
                {{ t('menu.contact') }}</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Social & Newsletter -->
        <div class="text-primary">
          <div class="flex gap-2 mb-4">
            <div class="font-medium">Suivez-nous</div>
            <div class="flex gap-1">
              <a href="#" aria-label="LinkedIn">
                <LinkedInIcon class="w-6 h-6 fill-primary hover:fill-primary/90 transition" />
              </a>
            </div>
          </div>

          <form class="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <input type="email" placeholder="Votre email"
              class="w-full px-3 py-2 bg-white border border-primary rounded focus:outline-none focus:ring-0 text-sm" />
            <button type="submit"
              class="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary/90 transition">
              S’abonner
            </button>
          </form>
        </div>

      </div>
    </div>
    <div class="bg-primary text-white text-sm py-4 px-6">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>&copy; 2025 rebond.eco – Tous droits réservés</p>
        <ul class="flex space-x-4">
          <li><a href="/mentions-legales" class="hover:underline">Mentions légales</a></li>
          <li><a href="/confidentialite" class="hover:underline">Politique de confidentialité</a></li>
          <li><a href="/cookies" class="hover:underline">Cookies</a></li>
        </ul>
      </div>
    </div>

  </footer>

</template>
