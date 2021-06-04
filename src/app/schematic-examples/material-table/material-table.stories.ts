import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { MaterialTableComponent } from './material-table.component';

export default {
  title: 'Material Schematics/Table',
  component: MaterialTableComponent,
  decorators: [
    moduleMetadata({
      declarations: [MaterialTableComponent],
      imports: [
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
      ],
    }),
  ],
} as Meta;

const template: Story<MaterialTableComponent> = (
  args: MaterialTableComponent
) => ({
  template: `
   <app-material-table></app-material-table>
`,
  props: {
    ...args,
  },
});

export const generalUsage: Story<MaterialTableComponent> = template.bind({});
generalUsage.args = {};
