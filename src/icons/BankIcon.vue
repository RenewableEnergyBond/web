<template>
  <svg :class fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z" /></svg>
</template>
<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
    required: false
  }
})
</script>