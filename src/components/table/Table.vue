<template>
  <DataTable v-bind="props" v-model:selection="selectedProduct">
    <template #header>
      <div
        class="flex flex-wrap gap-2 align-items-center justify-content-between"
      >
        <h4 class="m-0">Manage Products</h4>
      </div>
    </template>

    <Column
      v-for="col of columns"
      :key="col.field"
      :field="col.field"
      :header="col.header"
    >
      <template #body="{ data, field }">
        <template v-if="field === 'image'">
          <img
            :src="getImage(data[field])"
            :alt="data[field]"
            class="shadow-2 border-round"
            style="width: 84px"
          />
        </template>
        <template v-else-if="field === 'status'">
          <Tag
            :value="getValueStatusTag(data.status)"
            :severity="getStatusLabel(data.status)"
          />
        </template>
        <template v-else>
          {{
            field === "price"
              ? formatCurrency(data[field])
              : field === "created_at"
              ? formatDateToString(data[field])
              : data[field]
          }}
        </template>
      </template></Column
    >
    <Column :exportable="false" style="width: 8rem">
      <template #body="slotProps">
        <div class="flex gap-2">
          <Button
            icon="pi pi-pencil"
            @click="() => router.push(`/product/${slotProps.data._id}`)"
          />
          <Button
            icon="pi pi-trash"
            outlined
            rounded
            severity="danger"
            @click="$emit('onDelete', slotProps.data._id)"
          />
        </div>
      </template>
    </Column>
  </DataTable>
</template>

<script lang="ts" setup>
import "primevue/resources/themes/lara-light-green/theme.css";
import "/node_modules/primeflex/primeflex.css";

import { ref, watch } from "vue";
import DataTable, { DataTableProps } from "primevue/datatable";
import Column from "primevue/column";
import Tag from "primevue/tag";
import Button from "primevue/button";

import { ColumnType } from "@/ts/types";
import { formatDateToString, getValueStatusTag, getImage } from "../../utils";
import "primeicons/primeicons.css";
import { EnumStatus } from "@/features/product";
import router from "@/router";

interface Props extends DataTableProps {
  columns: ColumnType[];
}

const props = defineProps<Props>();

const formatCurrency = (value: string | number) => {
  if (value)
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  return;
};

const getStatusLabel = (status: number) => {
  switch (status) {
    case EnumStatus["OUTOFSTOCK"]:
      return "danger";

    case EnumStatus["INSTOCK"]:
      return "success";

    case EnumStatus["LOWSTOCK"]:
      return "warning";

    default:
      return undefined;
  }
};

const selectedProduct = ref();
const metaKey = ref(true);

watch(selectedProduct, (newSelectedProduct, _oldSelectedProduct) => {
  router.push(`/product/${newSelectedProduct._id}`);
});
</script>
