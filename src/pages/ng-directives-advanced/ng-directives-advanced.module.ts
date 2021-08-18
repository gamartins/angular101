import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgDirectivesAdvancedComponent } from './ng-directives-advanced.component';
import { NgTemplateOutletExample } from './ng-directives-advanced-outlet.component';

@NgModule({
  declarations: [
    NgDirectivesAdvancedComponent,
    NgTemplateOutletExample,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: NgDirectivesAdvancedComponent }
    ]),
  ],
})
export class NgDirectivesAdvancedModule { }
