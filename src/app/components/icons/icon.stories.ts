import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';

export default {
  title: 'Angular Material/Icons',
  decorators: [
    moduleMetadata({
      imports: [MatIconModule],
    }),
  ],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

// const template = () => ({
//   template: `
//     <mat-icon aria-hidden="false" aria-label="Example home icon">home</mat-icon>
//     <mat-icon>reorder</mat-icon>
// `,
// });

export const home: Story = () => ({
  template: `
        <mat-icon>
            home
        </mat-icon>
    `,
});

export const reorder: Story = () => ({
  template: `
        <mat-icon aria-hidden="false" aria-label="Example home icon">
            reorder
        </mat-icon>
    `,
});
