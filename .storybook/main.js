module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],

  refs: {
    thinkster_angular_challenges: {
      title: "100 Angular Challenges",
      url: "https://balcomiv.github.io/gothinkster-angular-challenges",
    },
  },
};
