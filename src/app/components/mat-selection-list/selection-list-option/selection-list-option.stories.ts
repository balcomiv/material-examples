import { MatListModule } from '@angular/material/list';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { SelectionListOptionComponent } from './selection-list-option.component';

export default {
  title: 'Angular Material/Selection List',
  component: SelectionListOptionComponent,
  decorators: [
    moduleMetadata({
      declarations: [SelectionListOptionComponent],
      imports: [MatListModule],
    }),
  ],
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
} as Meta;

const template: Story<SelectionListOptionComponent> = (
  args: SelectionListOptionComponent
) => ({
  template: `
   <app-selection-list-option></app-selection-list-option>
`,
  props: {
    ...args,
  },
});

export const basic: Story<SelectionListOptionComponent> = template.bind({});
basic.args = {};
