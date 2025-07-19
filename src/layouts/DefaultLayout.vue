<script lang="ts" setup>
import FooterComponent from '@/components/FooterComponent.vue';
import BurgerIcon from '@/icons/BurgerIcon.vue';
import CloseIcon from '@/icons/CloseIcon.vue';
import router from '@/router';
import { ref, watch } from 'vue';

const showMobileMenu = ref(false);

// watch(showMobileMenu, (value) => {
//   if (value) {
//     document.body.classList.add('overflow-hidden');
//   } else {
//     document.body.classList.remove('overflow-hidden');
//   }
// });
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- HEADER -->
    <div class="fixed top-0 w-full shadow-md bg-white z-50 px-4">
      <div class="flex py-3 justify-between items-center">
        <div class="flex gap-2 items-center">
          <img alt="Logo rebond" src="/assets/logo-rebond.svg" class="h-[26px] md:h-[32px]" />
          <RouterLink :to="{ name: 'Home' }" class="flex font-semibold leading-none text-[36px] md:text-[48px]">
            <span class="text-secondary">re</span>
            <span class="text-primary">bond</span>
          </RouterLink>
        </div>
        <div class="xl:hidden text-neutral-900">
          <button @click="showMobileMenu = true" :class="{ 'block': !showMobileMenu, 'hidden': showMobileMenu }"
            class="text-primary rounded-lg">
            <span class="sr-only">Open menu</span>
            <BurgerIcon class="w-6 h-6 md:w-8 md:h-8"></BurgerIcon>
          </button>
          <button @click="showMobileMenu = false" :class="{ 'block': showMobileMenu, 'hidden': !showMobileMenu }"
            class="text-primary rounded-lg">
            <span class="sr-only">Close menu</span>
            <CloseIcon class="w-6 h-6 md:w-8 md:h-8"></CloseIcon>
          </button>
        </div>
        <!-- MENU DESKTOP -->
        <div class="menu hidden xl:flex gap-8 justify-end items-center text-primary">
          <RouterLink :to="{ name: 'Mission' }" class="font-medium text-lg hover:text-secondary">
            Notre mission</RouterLink>
          <RouterLink :to="{ name: 'Operation' }" class="font-medium text-lg hover:text-secondary">
            Fonctionnement</RouterLink>
          <RouterLink :to="{ name: 'Producer' }" class="font-medium text-lg hover:text-secondary">
            Producteur EnR</RouterLink>
          <RouterLink :to="{ name: 'Investor' }" class="font-medium text-lg hover:text-secondary">
            Investisseur</RouterLink>
          <RouterLink :to="{ name: 'Contact' }" class="text-white bg-primary hover:brightness-[120%] active:brightness-[120%] font-medium rounded-lg text-lg
          px-5 py-2.5">Contact</RouterLink>
        </div>
      </div>
    </div>
    <!-- CONTENT -->
    <main class="flex-1 text-primary pt-[60px] md:pt-[72px]">
      <slot />
    </main>
    <!-- FOOTER -->
    <FooterComponent />
    <!-- MENU MOBILE -->
    <div
      v-show="true"
      :class="[
        'menu fixed top-0 bottom-0 left-0 right-0 bg-white z-40 px-4 flex flex-col gap-8 items-center justify-center text-primary pt-[60px] md:pt-[72px] h-[100vh] transition-transform duration-500 ease-in-out transform',
        showMobileMenu ? 'translate-x-0' : 'translate-x-full'
      ]"
    >
      <RouterLink @click="showMobileMenu = false" :to="{ name: 'Mission' }" class="font-medium text-3xl hover:text-secondary">
        Notre mission
      </RouterLink>
      <RouterLink @click="showMobileMenu = false" :to="{ name: 'Operation' }" class="font-medium text-3xl hover:text-secondary">
        Fonctionnement
      </RouterLink>
      <RouterLink @click="showMobileMenu = false" :to="{ name: 'Producer' }" class="font-medium text-3xl hover:text-secondary">
        Producteur EnR
      </RouterLink>
      <RouterLink @click="showMobileMenu = false" :to="{ name: 'Investor' }" class="font-medium text-3xl hover:text-secondary">
        Investisseur
      </RouterLink>
      <RouterLink
        @click="showMobileMenu = false"
        :to="{ name: 'Contact' }"
        class="text-white bg-primary hover:brightness-[120%] active:brightness-[120%] font-medium rounded-lg text-3xl px-5 py-2.5"
      >
        Contact
      </RouterLink>
    </div>
  </div>
</template>

<style>
.menu > a {
  transition: color 0.3s ease-out;
}

.menu > a.router-link-active {
  text-decoration: underline;
  text-underline-offset: 0.5rem;
  text-decoration-thickness: 2px;
}
</style>
