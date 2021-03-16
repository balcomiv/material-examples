import { Component, Input, OnInit } from '@angular/core';

enum TestValues {
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
})
export class TestComponent implements OnInit {
  @Input() label = 'This is a label';

  @Input() loading = true;

  @Input() testEnum: TestValues = TestValues.Primary;

  constructor() {}

  ngOnInit(): void {}
}
