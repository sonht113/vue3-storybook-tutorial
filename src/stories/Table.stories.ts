import type { Meta, StoryObj } from "@storybook/vue3";
import { DataTableProps } from "primevue/datatable";

import Table from "../components/table/Table.vue";
import { products } from "../data";

const columns = [
  { field: "code", header: "Code" },
  { field: "name", header: "Name" },
  { field: "quantity", header: "Quantity" },
];

const meta: Meta<DataTableProps> = {
  title: "Example/Table",
  component: Table,
  tags: ["autodocs"],
  render: (args: DataTableProps) => ({
    components: { Table },
    setup() {
      return { args };
    },
    template: '<Table :value="args.value" :size="args.size" />',
  }),
  argTypes: {
    size: { control: "select", options: ["small", "normal", "large"] },
  },
};

export default meta;

type Story = StoryObj<DataTableProps>;

export const Small: Story = {
  args: {
    size: "small",
    value: products,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    value: products,
  },
};
