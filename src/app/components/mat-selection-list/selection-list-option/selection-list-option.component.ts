import { Component } from '@angular/core';

@Component({
  selector: 'app-selection-list-option',
  template: `
    <mat-selection-list>
      <mat-list-option *ngFor="let item of items">
        Test #{{ item }}
      </mat-list-option>
    </mat-selection-list>
  `,
  styles: [
    `
      mat-selection-list {
        max-height: 400px;
        overflow: auto;
      }
    `,
  ],
})
export class SelectionListOptionComponent {
  items = Array(100)
    .fill(0)
    .map((x, i) => (x + 1) * i);
}
