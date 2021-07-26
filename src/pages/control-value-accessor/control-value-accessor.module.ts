import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ControlValueAccessorComponent } from "./control-value-accessor.component";
import { SliderInputComponent } from "./slider-input.component";

@NgModule({
  declarations: [
    ControlValueAccessorComponent,
    SliderInputComponent,
  ],
  exports: [
    ControlValueAccessorComponent,
    SliderInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: ControlValueAccessorComponent }
    ]),
  ],
})
export class ControlValueAccessorModule { }
