module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],

  refs: {
    design_system: {
      title: "Design System",
      url: "https://5ccbc373887ca40020446347-yldsqjoxzb.chromatic.com",
    },
  },
};
