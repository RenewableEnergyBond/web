<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import CloseIcon from '@/icons/CloseIcon.vue'

defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const closeModal = () => {
  emit('update:modelValue', false)
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
        @click.self="closeModal"
      >
        <div class="relative bg-white rounded-lg shadow-xl max-w-2xl max-h-[90vh] overflow-hidden">
          <button
            @click="closeModal"
            class="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Fermer"
          >
            <CloseIcon class="w-5 h-5" />
          </button>
          
          <div>
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>