import { Component } from '@angular/core';

@Component({
  selector: 'app-another-test',
  templateUrl: './another-test.component.html',
  styleUrls: ['./another-test.component.scss'],
})
export class AnotherTestComponent {
  constructor() {
    this.test(3);
  }

  private test(val: string): void {
    //
  }
}
