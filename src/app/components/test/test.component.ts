import { Component, Input, OnInit } from '@angular/core';
import { TestService } from './test.service';

export enum TestValues {
  Primary,
  Secondary,
}

@Component({
  selector: 'app-test',
  template: `
    <p>
      test works!
    </p>

    Label: {{ label }}
    <br />
    Loading: {{ loading }}
  `,
  styles: [],
  providers: [TestService],
})
export class TestComponent implements OnInit {
  @Input() label = 'This is a label';

  @Input() loading = true;

  @Input() testEnum: TestValues = TestValues.Primary;

  // constructor(private testService: TestService) {
  //   //  this.testService.test();
  //   //  this.test(3);
  // }

  ngOnInit(): void {
    //  throw new Error('Method not implemented.');
  }

  // private test(val: string): void {
  //   //
  // }
}
