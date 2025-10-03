<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

interface Props {
  showOptIn?: boolean
}

interface FormState {
  email: string
  optInAccepted: boolean
  isSubmitting: boolean
  showSuccess: boolean
  showError: boolean
  errorMessage: string
}

const props = withDefaults(defineProps<Props>(), {
  showOptIn: false
})

const { t } = useI18n()

// Form state
const email = ref('')
const optInAccepted = ref(false)
const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const errorMessage = ref('')

// Computed error messages (reactive to locale changes)
const errorMessages = computed(() => ({
  invalidEmail: t('newsletter.errors.invalidEmail'),
  required: t('newsletter.errors.required'),
  optinRequired: t('newsletter.errors.optinRequired'),
  submissionFailed: t('newsletter.errors.submissionFailed')
}))

const validateEmail = (emailValue: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(emailValue)
}

const resetMessages = (): void => {
  showError.value = false
  showSuccess.value = false
  errorMessage.value = ''
}

const submitForm = async (): Promise<void> => {
  resetMessages()

  // Basic validation
  if (!email.value.trim()) {
    showError.value = true
    errorMessage.value = errorMessages.value.required
    return
  }

  if (!validateEmail(email.value.trim())) {
    showError.value = true
    errorMessage.value = errorMessages.value.invalidEmail
    return
  }

  // Validation opt-in if enabled
  if (props.showOptIn && !optInAccepted.value) {
    showError.value = true
    errorMessage.value = errorMessages.value.optinRequired
    return
  }

  isSubmitting.value = true

  try {
    const formData = new FormData()
    formData.append('EMAIL', email.value.trim())
    formData.append('email_address_check', '')
    formData.append('locale', 'fr')

    // Configuration de l'endpoint Brevo
    const BREVO_ENDPOINT = 'https://3ca1a954.sibforms.com/serve/MUIFAC0-hoQSG3J3R76t13NQf2BrgrMrfXzb9q2yLguNo4R5cUgrb1cltDUAKKY7QevgUqYJQTikbg5Qlihsy-io2dSlAa5dsgVIe_dSpuZfkCv92eH7wBRIjJ1L8FhRvfQUBkCFXGNu--v95kN4eTsPDESY6TybZw5ihIraWaoPvB8YqL6ElApUqvJX7yxrccnMd18XrqoncVY9'

    await fetch(BREVO_ENDPOINT, {
      method: 'POST',
      body: formData,
      mode: 'no-cors' // Required for external domains
    })

    // With no-cors, we can't check the response, so we assume success
    showSuccess.value = true
    resetForm()

  } catch (error) {
    console.error('Newsletter submission error:', error)
    showError.value = true
    errorMessage.value = errorMessages.value.submissionFailed
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = (): void => {
  email.value = ''
  optInAccepted.value = false
}
</script>

<template>
  <div class="max-w-lg mx-auto">
    <!-- Newsletter Form -->
    <form @submit.prevent="submitForm" class="p-4 space-y-6" novalidate aria-label="Newsletter subscription form">
      <!-- Header -->
      <header>
        <h3 class="text-2xl font-medium text-primary mb-2">{{ t('newsletter.title') }}</h3>
        <p class="text-gray-600">{{ t('newsletter.description') }}</p>
      </header>

      <!-- Messages -->
      <Transition enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 scale-95 -translate-y-2" enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-95 -translate-y-2">
        <!-- Error message -->
        <div v-if="showError" class="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3" role="alert"
          aria-live="polite">
          <svg viewBox="0 0 512 512" class="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true">
            <path fill="currentColor"
              d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
          </svg>
          <span class="text-red-800 text-sm">{{ errorMessage }}</span>
        </div>

        <!-- Success message -->
        <div v-else-if="showSuccess" class="p-3 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
          role="alert" aria-live="polite">
          <svg viewBox="0 0 512 512" class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true">
            <path fill="currentColor"
              d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
          </svg>
          <span class="text-green-800 text-sm">{{ t('newsletter.messages.success') }}</span>
        </div>
      </Transition>

      <!-- Email field -->
      <div class="space-y-2">
        <label for="newsletter-email" class="block text-sm font-semibold text-gray-700">
          {{ t('newsletter.form.emailLabel') }}
          <span class="text-red-500" aria-label="required">*</span>
        </label>
        <input id="newsletter-email" v-model="email" type="email" :placeholder="t('newsletter.form.emailPlaceholder')"
          required autocomplete="email" :disabled="isSubmitting" :aria-invalid="showError && !email ? 'true' : 'false'"
          :aria-describedby="showError && !email ? 'email-error' : 'email-help'"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          :class="{ 'border-red-300 focus:ring-red-500': showError && !email }" />
        <p id="email-help" class="text-xs text-gray-500">
          {{ t('newsletter.form.emailHelp') }}
        </p>
        <p v-if="showError && !email" id="email-error" class="text-xs text-red-600" role="alert">
          {{ errorMessages.required }}
        </p>
      </div>

      <!-- Opt-in -->
      <div v-if="showOptIn" class="flex items-start space-x-3">
        <input id="newsletter-optin" v-model="optInAccepted" type="checkbox" required :disabled="isSubmitting"
          :aria-invalid="showError && props.showOptIn && !optInAccepted ? 'true' : 'false'"
          :aria-describedby="showError && props.showOptIn && !optInAccepted ? 'optin-error' : undefined"
          class="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed" />
        <div class="flex-1 space-y-1">
          <label for="newsletter-optin" class="text-sm text-gray-700 leading-5 cursor-pointer">
            {{ t('newsletter.form.optinText') }}
            <span class="text-red-500" aria-label="required">*</span>
          </label>
          <p v-if="showError && props.showOptIn && !optInAccepted" id="optin-error" class="text-xs text-red-600"
            role="alert">
            {{ errorMessages.optinRequired }}
          </p>
        </div>
      </div>

      <!-- Submit button -->
      <button type="submit" :disabled="isSubmitting" :aria-describedby="isSubmitting ? 'submit-status' : undefined"
        class="cursor-pointer w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200">
        <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
          <Icon icon="mdi:loading" class="text-base animate-spin" />
          <span id="submit-status">{{ t('newsletter.form.submitting') }}</span>
        </span>
        <span v-else class="flex items-center justify-center gap-2">
          <Icon icon="mdi:mail" class="text-base" />
          {{ t('newsletter.form.submit') }}
        </span>
      </button>
    </form>
  </div>
</template>