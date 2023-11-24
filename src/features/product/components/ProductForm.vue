<template>
  <div class="flex flex-column gap-3 align-items-start mx-auto mt-5">
    <InputText label="Name" name="name" />
    <InputNumber
      label="Price"
      name="price"
      inputId="currency-us"
      mode="currency"
      currency="USD"
      locale="en-US"
    />
    <InputText label="Description" name="description" />
    <InputDate label="Start sell date" name="start_sell_date" />
    <Upload />
  </div>
</template>

<script lang="ts" setup>
import { InputText, InputNumber, Upload, InputDate } from "@/components";
import { ProductData } from "../services/types";

interface Props {
  initialValue?: Partial<ProductData>;
}

const { initialValue } = defineProps<Props>();
</script>
