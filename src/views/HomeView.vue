<template>
  <DefaultLayout>
    <Table :value="products" :size="'small'" :columns="columns" />
  </DefaultLayout>
</template>

<script lang="ts" setup>
import { defineComponent, h } from "vue";
import DefaultLayout from "@/layout/DefaultLayout.vue";
import Table from "@/components/table/Table.vue";
import { products } from "@/data";
import { ColumnType } from "@/ts/types";
import Image from "@/components/table/Image.vue";

const columns: ColumnType[] = [
  { field: "code", header: "Code", style: "min-width: 12rem" },
  { field: "name", header: "Name", style: "min-width: 16rem" },
  {
    field: "image",
    header: "Image",
    element: (arg: string) => {
      const vnode = h(Image);
      vnode.props = { image: arg };

      return vnode;
    },
  },
];

defineComponent({
  name: "HomeView",
  components: {
    DefaultLayout,
    Table,
  },
});
</script>
