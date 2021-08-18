import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet-example',
  template: `
    <li *ngFor="let item of songList; index as i">
      <!-- Define a default template -->
      <ng-template #defaultTemplate let-item>{{ item | json }}</ng-template>
    
      <ng-container
        [ngTemplateOutlet]="customTemplate || defaultTemplate"
        [ngTemplateOutletContext]="{ $implicit: item, index: i }"
      ></ng-container>

      <!-- Alternative syntax -->
      <!-- <ng-container *ngTemplateOutlet="optionTemplate; context:{ $implicit: option, idx: i }"></ng-container> -->
    </li>
  `,
})
export class NgTemplateOutletExample implements OnInit {
  @Input() songList = []
  @Input() customTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
