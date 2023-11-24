<script setup lang="ts">
import { formatDateToString } from "@/utils";
import Calendar, { type CalendarProps } from "primevue/calendar";
import { useField } from "vee-validate";
import { toRefs } from "vue";

export interface Props extends /* @vue-ignore */ CalendarProps {
  label: string;
  name: string;
}

const props = defineProps<Props>();

const { name, label } = toRefs(props);

const { value, errorMessage, handleBlur, handleChange, setValue } =
  useField(name);

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <div class="flex flex-column align-items-start gap-2">
    <label :for="name">{{ label }}</label>
    <Calendar
      :class="{ 'p-invalid': errorMessage }"
      showIcon
      :inputId="name"
      :modelValue="value as string"
      @input="handleChange"
      @date-select="(val: any) => setValue(formatDateToString(val))"
      @blur="handleBlur($event.originalEvent)"
      v-bind="$attrs"
    />
    <small class="p-error">{{ errorMessage || "&nbsp;" }}</small>
  </div>
</template>
