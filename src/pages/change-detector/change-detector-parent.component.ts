import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detector-parent',
  template: `<app-change-detector [value]="value"></app-change-detector>`,
})
export class ChangeDetectorParentComponent implements OnInit {
  value = 25;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.value = this.createRandomValue(), 100);
  }

  createRandomValue(): number {
    return Math.ceil(Math.random() * 100);
  }

}
