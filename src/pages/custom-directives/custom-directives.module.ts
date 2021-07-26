import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomDirectivesComponent } from './custom-directives.component';
import { CustomDirective } from './custom.directive';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CustomDirectivesComponent }
    ]),
  ],
  declarations: [
    CustomDirectivesComponent,
    CustomDirective
  ],
})
export class CustomDirectivesModule { }
