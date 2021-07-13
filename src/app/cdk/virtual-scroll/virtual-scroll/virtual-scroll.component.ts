import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss'],
})
export class VirtualScrollComponent {
  @Input() wonky = false;

  @Input() fixedStrategy = true;

  @Input() set itemSize(value: number) {
    if (!value) {
      this._itemSize = 0;
    } else {
      this._itemSize = value;
    }
  }

  get itemSize(): number {
    return this._itemSize;
  }

  private _itemSize = 0;

  items = Array(100000)
    .fill(0)
    .map((_, i) => `Item # ${i}`);
}
