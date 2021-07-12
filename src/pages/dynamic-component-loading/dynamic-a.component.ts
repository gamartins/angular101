import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-a',
  template: `<div class="p-4">{{ message }}</div>`,
  styles: [`
    div {
      padding: 24px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: #e67373;
    }
  `
  ]
})
export class DynamicAComponent {
  @Input() message = "I'm component A!";

  constructor() { }

  ngOnInit(): void {
  }

}
