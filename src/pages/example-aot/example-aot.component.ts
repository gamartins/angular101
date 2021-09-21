import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExampleAotService } from './example-aot.service';

@Component({
  selector: 'app-example-aot',
  templateUrl: 'example-aot.component.html',
})
export class ExampleAotComponent implements OnInit {

  message: string = `Back to the future, again!`;

  // Common Mistake #2: bound properties must be public
  // private count: number = 123;
  // private items: string = `chickens`;
  count: number = 123;
  items: string = `chickens`;

  answer: Observable<string>;

  constructor(
    private service: ExampleAotService
  ) { }

  ngOnInit() {
  }

  // Common Mistake #3: call signatures for event bindings must match
  onAdd(event: unknown) {
    this.count += 1;
  }

  onSubmit(value: string) {
    this.answer = this.service.ask(value);
  }

}
