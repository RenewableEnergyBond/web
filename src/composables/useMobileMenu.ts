import { ref, watch } from 'vue'

/**
 * Composable pour gérer l'état du menu mobile
 */
export function useMobileMenu() {
  const showMobileMenu = ref(false)

  // Gestion de l'overflow du body quand le menu est ouvert
  watch(showMobileMenu, (isOpen) => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  })

  const openMenu = () => {
    showMobileMenu.value = true
  }

  const closeMenu = () => {
    showMobileMenu.value = false
  }

  const toggleMenu = () => {
    showMobileMenu.value = !showMobileMenu.value
  }

  return {
    showMobileMenu,
    openMenu,
    closeMenu,
    toggleMenu
  }
}