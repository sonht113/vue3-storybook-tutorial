<script setup lang="ts">
import Header from "@/components/header/Header.vue";
import Toast from "primevue/toast";
</script>

<template>
  <Header :user="{ name: 'son' }" />
  <main>
    <Toast />
    <slot />
  </main>
</template>
