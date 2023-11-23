import path from "path";
import type { StorybookConfig } from "@storybook/vue3-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (cnf) => {
    let alias = cnf.resolve ? cnf.resolve.alias : {};
    alias = {
      ...alias,
      "@": path.resolve(__dirname, "../src/"),
    };
    return { ...cnf, resolve: { ...cnf.resolve, alias: alias } };
  },
};
export default config;
