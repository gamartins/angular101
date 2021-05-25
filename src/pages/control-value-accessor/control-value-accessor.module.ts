import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
  ],
})
export class ControlValueAccessorModule { }
