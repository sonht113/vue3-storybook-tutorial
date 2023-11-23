import type { Meta, StoryObj } from "@storybook/vue3";

import { ButtonCustom } from "@/components";
import { ButtonProps } from "primevue/button";

const variants = {
  add: {
    label: "New",
    icon: "pi pi-plus",
  },
  none: {
    icon: "",
  },
};

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<ButtonProps & { action: keyof typeof variants }> = {
  title: "Example/Button",
  component: ButtonCustom,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    label: String,
    size: { control: "select", options: ["small", "medium", "large"] },
    action: { control: "select", options: ["none", "add"] },
  },
  args: {
    label: "Button",
    action: "none",
  }, // default value
};

export default meta;
type Story = StoryObj<ButtonProps & { action: keyof typeof variants }>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    label: "Button",
    size: "large",
  },
};

export const Small: Story = {
  args: {
    label: "Button",
    size: "small",
  },
};

export const Action: Story = {
  args: {
    label: "New",
    action: "add",
  },
};
