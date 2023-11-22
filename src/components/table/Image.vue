<template>
  <img
    :src="`https://primefaces.org/cdn/primevue/images/product/${image}`"
    :alt="image"
    class="shadow-2 border-round"
    style="width: 64px"
  />
</template>

<script lang="ts" setup>
const { image } = withDefaults(defineProps<{ image: string }>(), {});
</script>
