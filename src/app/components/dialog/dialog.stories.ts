import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { DialogComponent } from './dialog.component';

export default {
  title: 'Angular Material/Dialog',
  component: DialogComponent,
  decorators: [
    moduleMetadata({
      declarations: [DialogComponent],
      imports: [CommonModule, FormsModule],
    }),
  ],
  //   argTypes: {
  //     // <- I added this 'argTypes' property to get rid of 'not configured for controls' message
  //     disabled: { control: { type: 'boolean' } },
  //   },
} as Meta;

//  https://storybook.js.org/docs/react/essentials/controls#hide-nocontrols-warning
const template: Story<DialogComponent> = (args: DialogComponent) => ({
  component: DialogComponent,
  props: args,
});

export const primary = template.bind({});
primary.parameters = {
  controls: { hideNoControlsWarning: true },
};

// export const WithTemplate: Story = () => ({
//   template: `
//    <div>Story Works!</div>
// `,
//   props: {},
// });
