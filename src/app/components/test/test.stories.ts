import { Component } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { TestComponent } from './test.component';
import { TestService } from './test.service';

const testService = {
  test(): void {
    alert('New service');
  },
} as TestService;

@Component({
  selector: 'app-test-wrapper',
  template: ` <app-test></app-test> `,
  styles: [],
})
class TestWrapperComponent extends TestComponent {
  constructor() {
    super(testService);
  }
}

export default {
  title: 'Test Story',
  component: TestComponent,
  decorators: [
    moduleMetadata({
      declarations: [TestWrapperComponent, TestComponent],
      imports: [],
    }),
  ],
} as Meta;

const Template: Story<TestComponent> = (args: TestComponent) => ({
  component: TestComponent,
  //  template: `<app-test [label]="label" [loading]="loading"></app-test>`,
  template: `<app-test-wrapper></app-test-wrapper>`,
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

// const listValues = convertEnumToList(TestValues);
// WithTemplate.argTypes = {
//   label: {
//     control: { type: 'select', options: listValues },
//   },
// };
// WithTemplate.args = {
//   loading: false,
//   label: 'Button',
// };
