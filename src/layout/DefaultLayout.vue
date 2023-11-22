<script setup lang="ts">
import Header from "@/components/header/Header.vue";
</script>

<template>
  <Header :user="{ name: 'son' }" />
  <main>
    <slot />
  </main>
</template>
