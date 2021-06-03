import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { MaterialDashboardComponent } from './material-dashboard.component';

export default {
  title: 'Material Schematics/Dashboard',
  component: MaterialDashboardComponent,
  decorators: [
    moduleMetadata({
      declarations: [MaterialDashboardComponent],
      imports: [
        MatIconModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatButtonModule,
        LayoutModule,
      ],
    }),
  ],
} as Meta;

const template: Story<MaterialDashboardComponent> = (
  args: MaterialDashboardComponent
) => ({
  template: `
   <app-material-dashboard></app-material-dashboard>
`,
  props: {
    ...args,
  },
});

export const generalUsage: Story<MaterialDashboardComponent> = template.bind(
  {}
);
generalUsage.args = {};
