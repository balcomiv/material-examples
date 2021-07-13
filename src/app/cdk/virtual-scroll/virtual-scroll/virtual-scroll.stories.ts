import { ScrollingModule as ExperimentalScrollingModule } from '@angular/cdk-experimental/scrolling';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { VirtualScrollComponent } from './virtual-scroll.component';

export default {
  title: 'Material CDK/Virtual Scroll',
  component: VirtualScrollComponent,
  decorators: [
    moduleMetadata({
      declarations: [VirtualScrollComponent],
      imports: [ScrollingModule, ExperimentalScrollingModule],
    }),
  ],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {
    // wonky is the property we want to remove from the UI
    wonky: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template: Story<VirtualScrollComponent> = (
  args: VirtualScrollComponent
) => ({
  template: `
   <app-virtual-scroll [fixedStrategy]="fixedStrategy" [itemSize]="itemSize"></app-virtual-scroll>
`,
  props: {
    ...args,
  },
});

export const basic: Story<VirtualScrollComponent> = template.bind({});
basic.args = {
  itemSize: 80,
  fixedStrategy: true,
  wonky: false,
};

export const fixedStrategyWithDynamicallySizedItems: Story<VirtualScrollComponent> = (
  args: VirtualScrollComponent
) => ({
  template: `
   <app-virtual-scroll [itemSize]="itemSize" [wonky]="true"></app-virtual-scroll>
`,
  props: {
    ...args,
  },
});
fixedStrategyWithDynamicallySizedItems.args = {
  itemSize: 80,
};
fixedStrategyWithDynamicallySizedItems.argTypes = {
  fixedStrategy: {
    table: {
      disable: true,
    },
  },
};
