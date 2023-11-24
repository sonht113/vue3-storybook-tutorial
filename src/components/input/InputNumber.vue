<template>
  <div class="flex flex-column align-items-start gap-1">
    <label :for="props.name">{{ props.label }}</label>
    <InputNumber
      v-model="value"
      :class="{ 'p-invalid': errorMessage }"
      :name="props.name"
      :modelValue="value ? +value : null"
      :value="value"
      v-bind="$attrs"
      @input="setValue(+$event.value)"
      class="w-full"
    />
    <small class="p-error">{{ errorMessage || "&nbsp;" }}</small>
  </div>
</template>
<script lang="ts" setup>
import { toRefs } from "vue";
import InputNumber, { InputNumberProps } from "primevue/inputnumber";
import { useField } from "vee-validate";

interface Props extends /* @vue-ignore */ InputNumberProps {
  label: string;
  name: string;
}

const props = defineProps<Props>();

const { value, errorMessage, setValue } = useField(props.name, undefined);
</script>
