import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirectivesComponent } from './custom-directives.component';
import { CustomDirective } from './custom.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CustomDirectivesComponent,
    CustomDirective
  ],
})
export class CustomDirectivesModule { }
