import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { convertEnumToList } from '../../../../.storybook/utils';
import { TestComponent, TestValues } from './test.component';

export default {
  title: 'Test Story',
  component: TestComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    }),
  ],
} as Meta;

const Template: Story<TestComponent> = (args: TestComponent) => ({
  component: TestComponent,
  template: `<app-test [label]="label" [loading]="loading"></app-test>`,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  loading: false,
  label: 'Button',
};

export const WithTemplate: Story<TestComponent> = (args: TestComponent) => ({
  component: TestComponent,
  template: `
    <app-test [label]="label" [loading]="loading"></app-test>
`,
  props: args,
});

const listValues = convertEnumToList(TestValues);
WithTemplate.argTypes = {
  label: {
    control: { type: 'select', options: listValues },
  },
};
WithTemplate.args = {
  loading: false,
  label: 'Button',
};
