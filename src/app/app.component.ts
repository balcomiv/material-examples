import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'material-examples';

  constructor() {
    //  this.test(3);
    this.testFunc();
  }

  testFunc(): void {
    console.log('yep');
  }
}
