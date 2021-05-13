// App.stories.ts

import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

export default {
  component: AppComponent,
  title: 'App',
  decorators: [
    moduleMetadata({
      declarations: [AppComponent],
    }),
  ],
} as Meta;

const Template: Story<AppComponent> = (args) => ({
  template: `<app-root></app-root>`,
  props: args,
});

export const Success = Template.bind({});
