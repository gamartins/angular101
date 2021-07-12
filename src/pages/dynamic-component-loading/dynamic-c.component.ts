import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-c',
  template: `<div class="p-4">{{ message }}</div>`,
  styles: [`
    div {
      padding: 24px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: #6fa6f7;
    }
  `
  ]
})
export class DynamicCComponent {
  @Input() message = "I'm component C!";

  constructor() { }

  ngOnInit(): void {
  }

}
