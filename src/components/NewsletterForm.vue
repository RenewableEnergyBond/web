<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import ModalComponent from '@/components/ModalComponent.vue'
import BrevoNewsletterForm from '@/components/BrevoNewsletterForm.vue'

const { t } = useI18n()

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}
</script>

<template>
  <div class="flex flex-col sm:flex-row items-start sm:items-center gap-2">
    <button type="button" @click="openModal" class="text-white bg-primary hover:brightness-[120%] active:brightness-[120%] font-medium rounded-lg cursor-pointer 
        px-4 py-2 self-center">
      {{ t('footer.newsletter.subscribe') }}
    </button>

    <ModalComponent v-model="isModalOpen">
      <BrevoNewsletterForm :show-opt-in="true" :show-captcha="true" />
    </ModalComponent>
  </div>
</template>