<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  showOptIn?: boolean
}>()

const { t } = useI18n()

const email = ref('')
const optInAccepted = ref(false)
const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const errorMessage = ref('')

// Error messages
const EMAIL_INVALID_MESSAGE = t('newsletter.errors.invalidEmail')
const REQUIRED_ERROR_MESSAGE = t('newsletter.errors.required')

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const resetMessages = () => {
  showError.value = false
  showSuccess.value = false
  errorMessage.value = ''
}

const submitForm = async () => {
  resetMessages()

  // Basic validation
  if (!email.value) {
    showError.value = true
    errorMessage.value = REQUIRED_ERROR_MESSAGE
    return
  }

  if (!validateEmail(email.value)) {
    showError.value = true
    errorMessage.value = EMAIL_INVALID_MESSAGE
    return
  }

  // Validation opt-in if enabled
  if (props.showOptIn && !optInAccepted.value) {
    showError.value = true
    errorMessage.value = t('newsletter.errors.optinRequired')
    return
  }

  isSubmitting.value = true

  try {
    const formData = new FormData()
    formData.append('EMAIL', email.value)
    formData.append('email_address_check', '')
    formData.append('locale', 'fr')

    const response = await fetch('https://3ca1a954.sibforms.com/serve/MUIFAC0-hoQSG3J3R76t13NQf2BrgrMrfXzb9q2yLguNo4R5cUgrb1cltDUAKKY7QevgUqYJQTikbg5Qlihsy-io2dSlAa5dsgVIe_dSpuZfkCv92eH7wBRIjJ1L8FhRvfQUBkCFXGNu--v95kN4eTsPDESY6TybZw5ihIraWaoPvB8YqL6ElApUqvJX7yxrccnMd18XrqoncVY9', {
      method: 'POST',
      body: formData,
      mode: 'no-cors' // Required for external domains
    })

    // With no-cors, we can't check the response, so we assume success
    showSuccess.value = true  
    email.value = ''
    optInAccepted.value = false

  } catch (error) {
    showError.value = true
    errorMessage.value = t('newsletter.errors.submissionFailed')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="max-w-lg mx-auto">
    <!-- Form -->
    <form @submit.prevent="submitForm" class="p-4 space-y-6">
      <!-- Title -->
      <div class="">
        <h3 class="text-2xl font-medium text-primary mb-2">{{ t('newsletter.title') }}</h3>
        <p class="text-gray-600">{{ t('newsletter.description') }}</p>
      </div>

      <!-- Error message -->
      <div v-if="showError" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
        <svg viewBox="0 0 512 512" class="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5">
          <path fill="currentColor"
            d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
        </svg>
        <span class="text-red-800 text-sm">{{ errorMessage }}</span>
      </div>

      <!-- Success message -->
      <div v-if="showSuccess" class="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
        <svg viewBox="0 0 512 512" class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5">
          <path fill="currentColor"
            d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
        </svg>
        <span class="text-green-800 text-sm">{{ t('newsletter.messages.success') }}</span>
      </div>

      <!-- Email field -->
      <div>
        <label for="newsletter-email" class="block text-sm font-semibold text-gray-700 mb-2">
          {{ t('newsletter.form.emailLabel') }}
        </label>
        <input id="newsletter-email" v-model="email" type="email" :placeholder="t('newsletter.form.emailPlaceholder')"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          :class="{ 'border-red-300': showError && !email }" />
        <p class="mt-1 text-xs text-gray-500">
          {{ t('newsletter.form.emailHelp') }}
        </p>
      </div>

      <!-- Opt-in -->
      <div v-if="showOptIn" class="flex items-start space-x-3">
        <input id="newsletter-optin" v-model="optInAccepted" type="checkbox"
          class="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" required/>
        <label for="newsletter-optin" class="text-sm text-gray-700 leading-5">
          {{ t('newsletter.form.optinText') }}
        </label>
      </div>

      <!-- Submit button -->
      <button type="submit" :disabled="isSubmitting"
        class="w-full bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
        <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
          <svg class="animate-spin w-4 h-4" viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
          </svg>
          {{ t('newsletter.form.submitting') }}
        </span>
        <span v-else>{{ t('newsletter.form.submit') }}</span>
      </button>
    </form>
  </div>
</template>