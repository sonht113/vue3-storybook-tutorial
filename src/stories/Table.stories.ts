import type { Meta, StoryObj } from "@storybook/vue3";
import { DataTableProps } from "primevue/datatable";

import { Table } from "@/components";
import { products } from "@/data";
import { ColumnType } from "@/ts/types";

const columns = [
  { field: "code", header: "Code", style: "min-width: 12rem" },
  { field: "name", header: "Name", style: "min-width: 16rem" },
  {
    field: "price",
    header: "Price",
  },
];

const meta: Meta<DataTableProps & { columns: ColumnType[] }> = {
  title: "Example/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["small", "normal", "large"] },
  },
  args: {
    columns: columns,
    value: products,
  },
};

export default meta;

type Story = StoryObj<DataTableProps & { columns: ColumnType[] }>;

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};
