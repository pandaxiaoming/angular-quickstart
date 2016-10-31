import { Component } from '@angular/core';
@Component({
  selector: 'test-angular',
  template: '<h1 class="text-primary">{{greeting}}</h1>'
})
export class AppComponent {
	greeting = "Hello, world!"
}