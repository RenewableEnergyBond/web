<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue';
</script>

<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>