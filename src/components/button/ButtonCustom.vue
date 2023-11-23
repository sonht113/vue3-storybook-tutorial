<template>
  <Button
    v-bind="props"
    :icon="variants[props.action].icon"
    :label="action !== 'none' ? variants[action].label : props.label"
  />
</template>

<script lang="ts" setup>
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";
import Button, { ButtonProps } from "primevue/button";
interface Props extends /* @vue-ignore */ ButtonProps {
  action: keyof typeof variants;
}

const variants = {
  add: {
    label: "New",
    icon: "pi pi-plus",
  },
  none: {
    icon: "",
  },
};

const props = defineProps<Props>();
</script>
