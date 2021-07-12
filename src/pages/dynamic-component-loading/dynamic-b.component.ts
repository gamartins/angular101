import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-b',
  template: `<div class="p-4">{{ message }}</div>`,
  styles: [`
    div {
      padding: 24px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: #7ecc7e;
    }
  `
  ]
})
export class DynamicBComponent {
  @Input() message = "I'm component B!";

  constructor() { }

  ngOnInit(): void {
  }

}
