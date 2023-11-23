<template>
  <DefaultLayout>
    <Toolbar class="mt-5">
      <template #end>
        <ButtonCustom
          action="add"
          size="small"
          @click="() => router.push('/product/create')"
        />
      </template>
    </Toolbar>
    <p v-if="loading">Loading...</p>
    <p v-if="error">Opps...!</p>
    <template v-if="!loading && !error">
      <Table
        :value="products"
        :size="'small'"
        :columns="columns"
        :show-gridlines="true"
      />
    </template>
  </DefaultLayout>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted, ref } from "vue";
import Toolbar from "primevue/toolbar";

import DefaultLayout from "@/layout/DefaultLayout.vue";
import { Table } from "@/components";
import { ColumnType } from "../ts/types";
import { ProductData, getAllProduct } from "@/features/product";
import { ButtonCustom } from "@/components";
import router from "@/router";

const columns: ColumnType[] = [
  { field: "name", header: "Name", style: "min-width: 12rem" },
  { field: "description", header: "Description", style: "min-width: 16rem" },
  {
    field: "image",
    header: "Image",
  },
  {
    field: "status",
    header: "Status",
  },
  {
    field: "price",
    header: "Price",
  },
  {
    field: "created_at",
    header: "Created At",
  },
];

const products = ref<ProductData[]>([]);
const loading = ref(false);
const error = ref(null);

defineComponent({
  name: "HomeView",
  components: {
    DefaultLayout,
    Table,
  },
});

onMounted(() => {
  loading.value = true;
  getAllProduct()
    .then((res) => {
      products.value = res;
      loading.value = false;
    })
    .catch((err) => {
      loading.value = false;
      error.value = err;
    });
});
</script>
