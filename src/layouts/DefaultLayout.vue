<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import FooterComponent from '@/components/ui/FooterComponent.vue'
import { Icon } from '@iconify/vue'
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
      <div class="flex py-3 justify-between items-center max-w-7xl mx-auto px-8">
        <RouterLink :to="getRouteFor('Home')" class="flex gap-2 items-center" @click.prevent="closeMenu">
          <img alt="Logo rebond" src="/assets/logo-rebond.svg" class="h-[32px]" />
          <span class="font-semibold leading-none text-[48px]">
            <span class="text-secondary">re</span>
            <span class="text-primary">bond</span>
          </span>
        </RouterLink>
        <div class="lg:hidden text-neutral-900">
          <button @click="openMenu" :class="{ 'block': !showMobileMenu, 'hidden': showMobileMenu }"
            class="text-primary cursor-pointer">
            <span class="sr-only">Open menu</span>
            <Icon icon="mdi:menu" class="text-4xl" />
          </button>
          <button @click="closeMenu" :class="{ 'block': showMobileMenu, 'hidden': !showMobileMenu }"
            class="text-primary cursor-pointer">
            <span class="sr-only">Close menu</span>
            <Icon icon="mdi:close" class="text-4xl" />
          </button>
        </div>
        <!-- MENU DESKTOP -->
        <div class="menu hidden lg:flex gap-6 justify-end items-center text-primary text-lg">
          <RouterLink :to="getRouteFor('Producers')" class="font-medium hover:brightness-[120%]">
            {{ t('menu.producers') }}</RouterLink>
          <RouterLink :to="getRouteFor('Investors')" class="font-medium hover:brightness-[120%]">
            {{ t('menu.investors') }}</RouterLink>
          <RouterLink :to="getRouteFor('Compliance')" class="font-medium hover:brightness-[120%]">
            {{ t('menu.compliance') }}</RouterLink>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
    <!-- CONTENT -->
    <main class="flex-1 text-primary pt-[60px] lg:pt-[72px]">
      <slot />
    </main>
    <!-- FOOTER -->
    <FooterComponent />
    <!-- MENU MOBILE -->
    <div :class="[
      'menu fixed top-0 bottom-0 left-0 right-0 bg-white z-40 px-4 flex flex-col gap-8 items-center justify-center text-primary pt-[60px] md:pt-[72px] h-[100vh] transition-transform duration-500 ease-in-out transform',
      showMobileMenu ? 'translate-x-0' : 'translate-x-full'
    ]">
      <RouterLink @click="showMobileMenu = false" :to="getRouteFor('Producers')"
        class="font-medium text-3xl hover:brightness-[120%]">
        {{ t('menu.producers') }}
      </RouterLink>
      <RouterLink @click="showMobileMenu = false" :to="getRouteFor('Investors')"
        class="font-medium text-3xl hover:brightness-[120%]">
        {{ t('menu.investors') }}
      </RouterLink>
      <RouterLink @click="showMobileMenu = false" :to="getRouteFor('Compliance')"
        class="font-medium text-3xl hover:brightness-[120%]">
        {{ t('menu.compliance') }}
      </RouterLink>
      <RouterLink @click="showMobileMenu = false" :to="getRouteFor('Contact')"
        class="btn-contact text-white bg-primary hover:brightness-[120%] active:brightness-[120%] font-medium rounded-lg text-lg px-5 py-2.5">
        {{ t('menu.contact') }}
      </RouterLink>
      <LanguageSwitcher />
    </div>
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
