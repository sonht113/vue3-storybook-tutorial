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
        @on-delete="handleDelete"
      />
    </template>
  </DefaultLayout>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted, ref } from "vue";
import Toolbar from "primevue/toolbar";
import { useToast } from "primevue/usetoast";

import DefaultLayout from "@/layout/DefaultLayout.vue";
import { Table } from "@/components";
import { ColumnType } from "../ts/types";
import { ProductData, deleteProduct, getAllProduct } from "@/features/product";
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
    field: "price",
    header: "Price",
  },
  {
    field: "created_at",
    header: "Created At",
  },
];

const toast = useToast();

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

const getProducts = () =>
  getAllProduct()
    .then((res) => {
      products.value = res;
      loading.value = false;
    })
    .catch((err) => {
      loading.value = false;
      error.value = err;
    });

const handleDelete = (id: string) => {
  deleteProduct(id)
    .then(() => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Deleted successfully",
        life: 3000,
      });
      getProducts();
    })
    .catch(() =>
      toast.add({
        severity: "error",
        summary: "Error",
        detail: "Delete product failed",
        life: 3000,
      })
    );
};

onMounted(() => {
  loading.value = true;
  getProducts();
});
</script>
