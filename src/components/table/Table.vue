<template>
  <DataTable
    v-model:selection="selectedProduct"
    :value="value"
    :selectionMode="selectionMode"
    v-bind="props"
    :metaKeySelection="metaKey"
  >
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
        {{
          field === "image" && col.element
            ? col.element(data[field])
            : data[field]
        }}
      </template></Column
    >

    <!-- <Column
      selectionMode="multiple"
      style="width: 3rem"
      :exportable="false"
    ></Column> -->
    <!-- <Column field="code" header="Code" style="min-width: 12rem"></Column>
    <Column field="name" header="Name" style="min-width: 16rem"></Column>
    <Column header="Image" slot="<img />"> </Column> -->
    <!-- <Column field="price" header="Price" style="min-width: 8rem">
      <template #body="slotProps">
        {{ formatCurrency(slotProps.data.price) }}
      </template>
    </Column>
    <Column
      field="category"
      header="Category"
      style="min-width: 10rem"
    ></Column>
    <Column field="rating" header="Reviews" style="min-width: 12rem">
      <template #body="slotProps">
        <Rating
          :modelValue="slotProps.data.rating"
          :readonly="true"
          :cancel="false"
        />
      </template>
    </Column>
    <Column field="inventoryStatus" header="Status" style="min-width: 12rem">
      <template #body="slotProps">
        <Tag
          :value="slotProps.data.inventoryStatus"
          :severity="getStatusLabel(slotProps.data.inventoryStatus)"
        />
      </template>
    </Column>
    <Column :exportable="false" style="min-width: 8rem">
      <template #body="slotProps">
        <div class="flex gap-2">
          <Button icon="pi pi-pencil" aria-label="Submit" />
          <Button icon="pi pi-trash" outlined rounded severity="danger" />
        </div>
      </template>
    </Column> -->
  </DataTable>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import DataTable, { DataTableProps } from "primevue/datatable";
import Column from "primevue/column";
import Rating from "primevue/rating";
import Tag from "primevue/tag";
import Button from "primevue/button";
import { ColumnType } from "@/ts/types";

import "primevue/resources/themes/lara-light-green/theme.css";
import "/node_modules/primeflex/primeflex.css";

const {
  value,
  columns,
  selectionMode = "single",
  selection,
  ...props
} = withDefaults(defineProps<DataTableProps & { columns: ColumnType[] }>(), {});

const formatCurrency = (value: string | number) => {
  if (value)
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  return;
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warning";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return undefined;
  }
};

const selectedProduct = ref();
const metaKey = ref(true);

watch(selectedProduct, (newSelectedProduct, _oldSelectedProduct) => {
  console.log(newSelectedProduct.code);
});
</script>
