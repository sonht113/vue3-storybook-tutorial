import type { Meta, StoryObj } from "@storybook/vue3";
import { DataTableProps } from "primevue/datatable";

import Table from "../components/table/Table.vue";

const columns = [
  { field: "code", header: "Code" },
  { field: "name", header: "Name" },
  { field: "quantity", header: "Quantity" },
];

const products = [
  {
    id: "1000",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1001",
    code: "nvklal433",
    name: "Black Watch",
    description: "Product Description",
    image: "black-watch.jpg",
    price: 72,
    category: "Accessories",
    quantity: 61,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
];

const meta: Meta<DataTableProps & { columns: any[] }> = {
  title: "Example/Table",
  component: Table,
  tags: ["autodocs"],
  render: (args: DataTableProps & { columns: any[] }) => ({
    components: { Table },
    setup() {
      return { args };
    },
    template:
      '<Table :value="args.value" :columns="args.columns" :size="args.size" />',
  }),
  argTypes: {
    size: { control: "select", options: ["small", "normal", "large"] },
  },
};

export default meta;

type Story = StoryObj<DataTableProps & { columns: any[] }>;

export const Small: Story = {
  args: {
    size: "small",
    columns: columns,
    value: products,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    columns: columns,
    value: products,
  },
};
