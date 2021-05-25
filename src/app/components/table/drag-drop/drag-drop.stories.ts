import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { DragDropComponent } from './drag-drop.component';

export default {
  title: 'Angular Material/Tables',
  component: DragDropComponent,
  decorators: [
    moduleMetadata({
      declarations: [DragDropComponent],
      imports: [MatTableModule, DragDropModule, MatIconModule],
    }),
  ],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

export const dragDrop: Story<DragDropComponent> = () => ({
  template: `
    <app-drag-drop></app-drag-drop>
 `,
});

export const iconTest: Story = () => ({
  template: `
        <mat-icon aria-hidden="false" aria-label="Example home icon">home</mat-icon>
        <mat-icon>reorder</mat-icon>
    `,
});
