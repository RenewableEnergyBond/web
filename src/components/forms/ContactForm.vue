<script setup lang="ts">
import { ref, computed, reactive, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import ModalComponent from '../ui/ModalComponent.vue'

/**
 * Déclarations TypeScript pour Turnstile
 */
declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement | string, options: {
        sitekey: string
        callback?: (token: string) => void
        'expired-callback'?: () => void
        'error-callback'?: () => void
        theme?: 'light' | 'dark' | 'auto'
        size?: 'normal' | 'compact'
      }) => string
      reset: (widgetId?: string) => void
      remove: (widgetId: string) => void
    }
  }
}

/**
 * Interface définissant la structure des données du formulaire de contact
 */
interface ContactFormData {
  name: string
  email: string
  company: string
  subject: string
  message: string
  turnstileToken: string
}

/**
 * Interface définissant les erreurs de validation
 */
interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
  turnstile?: string
}

/**
 * État réactif du formulaire
 */
interface FormState {
  isSubmitting: boolean
  showSuccess: boolean
  showError: boolean
  errorMessage: string
  errors: FormErrors
}

const { t } = useI18n()

// Configuration Turnstile
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"
console.log('TURNSTILE_SITE_KEY', TURNSTILE_SITE_KEY)
const turnstileWidgetId = ref<string | null>(null)

// État réactif du formulaire
const formData = reactive<ContactFormData>({
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
  turnstileToken: ''
})

const formState = reactive<FormState>({
  isSubmitting: false,
  showSuccess: false,
  showError: false,
  errorMessage: '',
  errors: {}
})

// État des modales
const showSuccessModal = ref(false)
const showErrorModal = ref(false)

/**
 * Messages d'erreur réactifs aux changements de langue
 */
const errorMessages = computed(() => ({
  nameRequired: t('contactForm.errors.nameRequired'),
  emailRequired: t('contactForm.errors.emailRequired'),
  emailInvalid: t('contactForm.errors.emailInvalid'),
  subjectRequired: t('contactForm.errors.subjectRequired'),
  messageRequired: t('contactForm.errors.messageRequired'),
  messageMinLength: t('contactForm.errors.messageMinLength'),
  turnstileRequired: t('contactForm.errors.turnstileRequired'),
  submissionFailed: t('contactForm.errors.submissionFailed')
}))

/**
 * Validation des données du formulaire
 * @returns Object contenant les erreurs de validation
 */
const validateForm = (): FormErrors => {
  const errors: FormErrors = {}

  // Validation du nom
  if (!formData.name.trim()) {
    errors.name = errorMessages.value.nameRequired
  }

  // Validation de l'email
  if (!formData.email.trim()) {
    errors.email = errorMessages.value.emailRequired
  } else if (!validateEmail(formData.email.trim())) {
    errors.email = errorMessages.value.emailInvalid
  }

  // Validation du sujet
  if (!formData.subject.trim()) {
    errors.subject = errorMessages.value.subjectRequired
  }

  // Validation du message
  if (!formData.message.trim()) {
    errors.message = errorMessages.value.messageRequired
  } else if (formData.message.trim().length < 10) {
    errors.message = errorMessages.value.messageMinLength
  }

  // Validation Turnstile
  if (!formData.turnstileToken.trim()) {
    errors.turnstile = errorMessages.value.turnstileRequired
  }

  return errors
}

/**
 * Validation du format email
 * @param email - Email à valider
 * @returns true si l'email est valide
 */
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Réinitialise les messages d'état
 */
const resetMessages = (): void => {
  formState.showError = false
  formState.showSuccess = false
  formState.errorMessage = ''
  formState.errors = {}
}

/**
 * Réinitialise le formulaire
 */
const resetForm = (): void => {
  Object.keys(formData).forEach(key => {
    formData[key as keyof ContactFormData] = ''
  })
  if (turnstileWidgetId.value && window.turnstile) {
    window.turnstile.reset(turnstileWidgetId.value)
  }
}

/**
 * Charge le script Turnstile de Cloudflare
 */
const loadTurnstileScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Vérifier si déjà chargé
    if (window.turnstile) {
      resolve()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
    script.async = true
    script.defer = true
    
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Échec du chargement de Turnstile'))
    
    document.head.appendChild(script)
  })
}

/**
 * Callback appelé quand Turnstile est résolu avec succès
 */
const onTurnstileSuccess = (token: string): void => {
  formData.turnstileToken = token
  clearFieldError('turnstile')
}

/**
 * Callback appelé quand Turnstile expire
 */
const onTurnstileExpire = (): void => {
  formData.turnstileToken = ''
}

/**
 * Callback appelé en cas d'erreur Turnstile
 */
const onTurnstileError = (): void => {
  formData.turnstileToken = ''
}

/**
 * Initialise le widget Turnstile
 */
const initializeTurnstile = (): void => {
  if (!window.turnstile) {
    console.warn('Turnstile non disponible')
    return
  }

  const container = document.getElementById('turnstile-widget')
  if (!container) {
    console.warn('Container Turnstile non trouvé')
    return
  }

  // Render le widget
  turnstileWidgetId.value = window.turnstile.render(container, {
    sitekey: TURNSTILE_SITE_KEY,
    callback: onTurnstileSuccess,
    'expired-callback': onTurnstileExpire,
    'error-callback': onTurnstileError,
    theme: 'light',
    size: 'normal'
  })
}

/**
 * Envoie le formulaire vers l'API Paperboy
 */
const submitForm = async (): Promise<void> => {
  resetMessages()

  // Validation côté client
  const validationErrors = validateForm()
  if (Object.keys(validationErrors).length > 0) {
    formState.errors = validationErrors
    return
  }

  formState.isSubmitting = true

  try {
    // Préparation des données pour l'API
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim() || undefined, // Optionnel
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      turnstileToken: formData.turnstileToken.trim()
    }

    // Appel à l'API Paperboy
    const response = await fetch('/api/paperboy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()

    if (result.success) {
      // Succès de l'envoi
      formState.showSuccess = true
      showSuccessModal.value = true
      resetForm()
    } else {
      // Erreur retournée par l'API
      throw new Error(result.message || errorMessages.value.submissionFailed)
    }

  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error)
    formState.showError = true
    formState.errorMessage = error instanceof Error 
      ? error.message 
      : errorMessages.value.submissionFailed
    showErrorModal.value = true
  } finally {
    formState.isSubmitting = false
  }
}

/**
 * Efface l'erreur d'un champ spécifique lors de la saisie
 * @param fieldName - Nom du champ
 */
const clearFieldError = (fieldName: keyof FormErrors): void => {
  if (formState.errors[fieldName]) {
    delete formState.errors[fieldName]
  }
}

/**
 * Ferme la modale de succès
 */
const closeSuccessModal = (): void => {
  showSuccessModal.value = false
  formState.showSuccess = false
}

/**
 * Ferme la modale d'erreur
 */
const closeErrorModal = (): void => {
  showErrorModal.value = false
  formState.showError = false
  formState.errorMessage = ''
}

// Hooks de cycle de vie
onMounted(async () => {
  try {
    await loadTurnstileScript()
    // Attendre un peu pour s'assurer que le DOM est prêt
    setTimeout(initializeTurnstile, 100)
  } catch (error) {
    console.error('Erreur lors de l\'initialisation de Turnstile:', error)
  }
})

onUnmounted(() => {
  // Nettoyer le widget Turnstile si nécessaire
  if (turnstileWidgetId.value && window.turnstile) {
    try {
      window.turnstile.remove(turnstileWidgetId.value)
    } catch (error) {
      console.warn('Erreur lors du nettoyage de Turnstile:', error)
    }
  }
})
</script>

<template>
  <div class="contact-form max-w-2xl mx-auto">
    <!-- En-tête du formulaire -->
    <header class="text-center mb-8">
      <h2 class="text-2xl lg:text-3xl font-semibold text-primary mb-2">
        {{ t('contactForm.title') }}
      </h2>
      <p class="text-gray-600 lg:text-lg">
        {{ t('contactForm.description') }}
      </p>
    </header>



    <!-- Formulaire de contact -->
    <form @submit.prevent="submitForm" class="space-y-6" novalidate>
      
      <!-- Nom complet -->
      <div>
        <label 
          for="contact-name" 
          class="block text-sm font-semibold text-gray-700 mb-2"
        >
          {{ t('contactForm.form.nameLabel') }}
          <span class="text-red-500" aria-label="required">*</span>
        </label>
        <input
          id="contact-name"
          v-model="formData.name"
          type="text"
          :placeholder="t('contactForm.form.namePlaceholder')"
          required
          autocomplete="name"
          :disabled="formState.isSubmitting"
          :aria-invalid="formState.errors.name ? 'true' : 'false'"
          :aria-describedby="formState.errors.name ? 'name-error' : 'name-help'"
          @input="clearFieldError('name')"
          class="w-full px-4 py-3 border border-primary/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          :class="{ 'border-red-800': formState.errors.name }"
        />
        <p 
          v-if="!formState.errors.name" 
          id="name-help" 
          class="mt-1 text-xs text-gray-500"
        >
          {{ t('contactForm.form.nameHelp') }}
        </p>
        <p 
          v-if="formState.errors.name" 
          id="name-error" 
          class="mt-1 text-xs text-red-800" 
          role="alert"
        >
          {{ formState.errors.name }}
        </p>
      </div>

      <!-- Email -->
      <div>
        <label 
          for="contact-email" 
          class="block text-sm font-semibold text-gray-700 mb-2"
        >
          {{ t('contactForm.form.emailLabel') }}
          <span class="text-red-500" aria-label="required">*</span>
        </label>
        <input
          id="contact-email"
          v-model="formData.email"
          type="email"
          :placeholder="t('contactForm.form.emailPlaceholder')"
          required
          autocomplete="email"
          :disabled="formState.isSubmitting"
          :aria-invalid="formState.errors.email ? 'true' : 'false'"
          :aria-describedby="formState.errors.email ? 'email-error' : 'email-help'"
          @input="clearFieldError('email')"
          class="w-full px-4 py-3 border border-primary/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          :class="{ 'border-red-800': formState.errors.email }"
        />
        <p 
          v-if="!formState.errors.email" 
          id="email-help" 
          class="mt-1 text-xs text-gray-500"
        >
          {{ t('contactForm.form.emailHelp') }}
        </p>
        <p 
          v-if="formState.errors.email" 
          id="email-error" 
          class="mt-1 text-xs text-red-800" 
          role="alert"
        >
          {{ formState.errors.email }}
        </p>
      </div>

      <!-- Société (optionnel) -->
      <div>
        <label 
          for="contact-company" 
          class="block text-sm font-semibold text-gray-700 mb-2"
        >
          {{ t('contactForm.form.companyLabel') }}
        </label>
        <input
          id="contact-company"
          v-model="formData.company"
          type="text"
          :placeholder="t('contactForm.form.companyPlaceholder')"
          autocomplete="organization"
          :disabled="formState.isSubmitting"
          aria-describedby="company-help"
          class="w-full px-4 py-3 border border-primary/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <p id="company-help" class="mt-1 text-xs text-gray-500">
          {{ t('contactForm.form.companyHelp') }}
        </p>
      </div>

      <!-- Sujet -->
      <div>
        <label 
          for="contact-subject" 
          class="block text-sm font-semibold text-gray-700 mb-2"
        >
          {{ t('contactForm.form.subjectLabel') }}
          <span class="text-red-500" aria-label="required">*</span>
        </label>
        <input
          id="contact-subject"
          v-model="formData.subject"
          type="text"
          :placeholder="t('contactForm.form.subjectPlaceholder')"
          required
          :disabled="formState.isSubmitting"
          :aria-invalid="formState.errors.subject ? 'true' : 'false'"
          :aria-describedby="formState.errors.subject ? 'subject-error' : 'subject-help'"
          @input="clearFieldError('subject')"
          class="w-full px-4 py-3 border border-primary/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          :class="{ 'border-red-800': formState.errors.subject }"
        />
        <p 
          v-if="!formState.errors.subject" 
          id="subject-help" 
          class="mt-1 text-xs text-gray-500"
        >
          {{ t('contactForm.form.subjectHelp') }}
        </p>
        <p 
          v-if="formState.errors.subject" 
          id="subject-error" 
          class="mt-1 text-xs text-red-800" 
          role="alert"
        >
          {{ formState.errors.subject }}
        </p>
      </div>

      <!-- Message -->
      <div>
        <label 
          for="contact-message" 
          class="block text-sm font-semibold text-gray-700 mb-2"
        >
          {{ t('contactForm.form.messageLabel') }}
          <span class="text-red-500" aria-label="required">*</span>
        </label>
        <textarea
          id="contact-message"
          v-model="formData.message"
          :placeholder="t('contactForm.form.messagePlaceholder')"
          required
          rows="6"
          :disabled="formState.isSubmitting"
          :aria-invalid="formState.errors.message ? 'true' : 'false'"
          :aria-describedby="formState.errors.message ? 'message-error' : 'message-help'"
          @input="clearFieldError('message')"
          class="w-full px-4 py-3 border border-primary/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed resize-y min-h-[120px]"
          :class="{ 'border-red-800': formState.errors.message }"
        ></textarea>
        <p 
          v-if="!formState.errors.message" 
          id="message-help" 
          class="mt-1 text-xs text-gray-500"
        >
          {{ t('contactForm.form.messageHelp') }}
        </p>
        <p 
          v-if="formState.errors.message" 
          id="message-error" 
          class="mt-1 text-xs text-red-800" 
          role="alert"
        >
          {{ formState.errors.message }}
        </p>
      </div>

      <!-- Widget Turnstile -->
      <div>
        <div id="turnstile-widget" class="flex justify-center"></div>
        <p 
          v-if="formState.errors.turnstile" 
          class="mt-2 text-xs text-red-800 text-center" 
          role="alert"
        >
          {{ formState.errors.turnstile }}
        </p>
      </div>

      <!-- Bouton de soumission -->
      <div class="pt-4">
        <button
          type="submit"
          :disabled="formState.isSubmitting"
          class="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold hover:brightness-[120%] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
        >
          <Icon 
            v-if="formState.isSubmitting" 
            icon="mdi:loading" 
            class="text-lg animate-spin" 
          />
          <Icon 
            v-else 
            icon="mdi:send" 
            class="text-lg" 
          />
          <span>
            {{ formState.isSubmitting 
              ? t('contactForm.form.submitting') 
              : t('contactForm.form.submit') 
            }}
          </span>
        </button>
      </div>

    </form>

    <!-- Modale de succès -->
    <ModalComponent v-model="showSuccessModal" @update:model-value="closeSuccessModal">
      <div class="p-8 text-center">
        <div class="mb-4">
          <Icon icon="mdi:check-circle" class="w-16 h-16 text-green-600 mx-auto" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          {{ t('contactForm.messages.successTitle') }}
        </h3>
        <p class="text-gray-600 mb-6">
          {{ t('contactForm.messages.success') }}
        </p>
        <button
          @click="closeSuccessModal"
          class="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:brightness-[120%] cursor-pointer"
        >
          {{ t('contactForm.messages.close') }}
        </button>
      </div>
    </ModalComponent>

    <!-- Modale d'erreur -->
    <ModalComponent v-model="showErrorModal" @update:model-value="closeErrorModal">
      <div class="p-8 text-center">
        <div class="mb-4">
          <Icon icon="mdi:alert-circle" class="w-16 h-16 text-red-800 mx-auto" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          {{ t('contactForm.messages.errorTitle') }}
        </h3>
        <p class="text-gray-600 mb-6">
          {{ formState.errorMessage }}
        </p>
        <button
          @click="closeErrorModal"
          class="bg-red-800 text-white px-6 py-3 rounded-lg font-semibold hover:brightness-[120%] cursor-pointer"
        >
          {{ t('contactForm.messages.close') }}
        </button>
      </div>
    </ModalComponent>
  </div>
</template>

