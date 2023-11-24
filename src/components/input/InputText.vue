<template>
  <div class="flex flex-column align-items-start gap-2">
    <label :for="props.name">{{ props.label }}</label>
    <InputText
      type="text"
      v-model="value"
      :class="{ 'p-invalid': errorMessage }"
      :name="props.name"
      :value="value"
      @input="handleChange"
      v-bind="$attrs"
      class="w-full"
    />
    <small class="p-error">{{ errorMessage || "&nbsp;" }}</small>
  </div>
</template>
<script lang="ts" setup>
import InputText, { InputTextProps } from "primevue/inputtext";
import { useField } from "vee-validate";

interface Props extends /* @vue-ignore */ InputTextProps {
  label: string;
  name: string;
}

const props = defineProps<Props>();

const { value, errorMessage, handleChange } = useField(props.name);
</script>
