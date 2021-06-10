import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-change-detection-child',
  template: `
    <div>
      <div [ngStyle]="{ 'color': color }">This is the child component</div>
      <div>{{ user.name }} likes {{ user.like }}</div>
      {{ howMany() }}
    </div>
  `,
})
export class ChangeDetectionChildComponent {
  @Input() user = { name: 'John Doe', like: 'barbacue' };
  @Input() color = '#000000';

  howMany(): void {
    console.warn('child component rendered');
  }

}