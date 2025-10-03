<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import { Icon } from '@iconify/vue'

interface Props {
  modelValue: boolean
}

interface Emits {
  'update:modelValue': [value: boolean]
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const closeModal = () => {
  emit('update:modelValue', false)
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.modelValue) {
    closeModal()
  }
}

// Gestion du scroll du body
watch(
  () => props.modelValue,
  (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
)

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  // Nettoyer le style au démontage
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        @click.self="closeModal"
      >
        <!-- Modal Content -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-4"
        >
          <div 
            v-if="modelValue"
            class="relative bg-white rounded-lg shadow-xl max-w-2xl max-h-[90vh] overflow-hidden"
          >
            <!-- Close Button -->
            <button
              @click="closeModal"
              class="absolute top-4 right-4 z-10 p-2 rounded-full hover:brightness-[120%] cursor-pointer"
              aria-label="Close modal"
            >
              <Icon icon="mdi:close" class="text-xl text-primary" />
            </button>
            
            <!-- Modal Body -->
            <div class="overflow-y-auto max-h-[90vh]">
              <slot />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>