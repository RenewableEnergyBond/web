<script setup lang="ts">
import LinkedInIcon from '@/icons/LinkedInIcon.vue';

const props = defineProps({
  class: {
    required: false
  }
})
</script>

<template>
  <footer>
    <div :class class="bg-primary/20 px-4 py-12">
      <div class="container lg:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Menu -->
        <div>
          <ul class="text-primary font-medium">
            <li>
              <RouterLink :to="{ name: 'Mission' }" class="hover:underline">
                Notre mission</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'Operation' }" class="hover:underline">
                Fonctionnement</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'Producer' }" class="hover:underline">
                Producteur EnR</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'Investor' }" class="hover:underline">
                Investisseur</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'Contact' }" class="hover:underline">
                Contact</RouterLink>
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
