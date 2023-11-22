<template>
  <DataTable
    v-model:selection="selectedProduct"
    :value="value"
    :selectionMode="selectionMode"
    v-bind="props"
    :metaKeySelection="metaKey"
  >
    <Column
      v-for="col of columns"
      :key="col.field"
      :field="col.field"
      :header="col.header"
    ></Column>
  </DataTable>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import DataTable, { DataTableProps } from "primevue/datatable";
import Column from "primevue/column";
import "primevue/resources/themes/lara-light-green/theme.css";
import "/node_modules/primeflex/primeflex.css";

const {
  columns,
  value,
  selectionMode = "single",
  selection,
  ...props
} = withDefaults(
  defineProps<
    {
      columns: { field: string; header: string }[];
    } & DataTableProps
  >(),
  {}
);

const selectedProduct = ref();
const metaKey = ref(true);

watch(selectedProduct, (newSelectedProduct, _oldSelectedProduct) => {
  console.log(newSelectedProduct.code);
});
</script>
