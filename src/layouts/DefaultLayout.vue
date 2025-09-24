<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import FooterComponent from '@/components/ui/FooterComponent.vue'
import BurgerIcon from '@/components/icons/BurgerIcon.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher.vue'
import { useLocalization } from '@/composables/useLocalization'
import { useMobileMenu } from '@/composables/useMobileMenu'

const { t } = useI18n()
const { getRouteFor } = useLocalization()
const { showMobileMenu, openMenu, closeMenu } = useMobileMenu()
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- HEADER -->
    <div class="fixed top-0 w-full shadow-xs bg-white z-50">
      <div class="flex py-3 justify-between items-center max-w-7xl mx-auto px-4 lg:px-8">
        <div class="flex gap-2 items-center">
          <img alt="Logo rebond" src="/assets/logo-rebond.svg" class="h-[26px] lg:h-[32px]" />
          <RouterLink :to="getRouteFor('Home')" class="flex font-semibold leading-none text-[36px] lg:text-[48px]">
            <span class="text-secondary">re</span>
            <span class="text-primary">bond</span>
          </RouterLink>
        </div>
        <div class="hidden text-neutral-900">
          <button @click="openMenu" :class="{ 'block': !showMobileMenu, 'hidden': showMobileMenu }"
            class="text-primary cursor-pointer">
            <span class="sr-only">Open menu</span>
            <BurgerIcon class="w-6 h-6" />
          </button>
          <button @click="closeMenu" :class="{ 'block': showMobileMenu, 'hidden': !showMobileMenu }"
            class="text-primary cursor-pointer">
            <span class="sr-only">Close menu</span>
            <CloseIcon class="w-8 h-8" />
          </button>
        </div>
        <LanguageSwitcher />
      </div>
    </div>
    <!-- CONTENT -->
    <main class="flex-1 text-primary pt-[60px] lg:pt-[72px]">
      <slot />
    </main>
    <!-- FOOTER -->
    <FooterComponent />
  </div>
</template>

<style>
.menu>a {
  transition: color 0.3s ease-out;
}

.menu>a.router-link-active:not(.btn-contact) {
  text-decoration: underline;
  text-underline-offset: 0.5rem;
  text-decoration-thickness: 2px;
}
</style>
