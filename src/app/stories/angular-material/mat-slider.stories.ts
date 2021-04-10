import { MatSliderModule } from '@angular/material/slider';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';

export default {
  title: 'Angular Material/Mat Slider',
  //  component: ,
  decorators: [
    moduleMetadata({
      //   declarations: [],
      imports: [MatSliderModule],
    }),
  ],
} as Meta;

export const matSlider: Story = () => ({
  template: `
    <mat-slider min="1" max="100" step="1" value="1">
    </mat-slider>
  `,
});
