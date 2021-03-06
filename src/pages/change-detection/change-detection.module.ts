import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChangeDetectionChildComponent } from "./change-detection.child.component";
import { ChangeDetectionComponent } from "./change-detection.component";

@NgModule({
  declarations: [
    ChangeDetectionComponent,
    ChangeDetectionChildComponent,
  ],
  exports: [
    ChangeDetectionComponent,
    ChangeDetectionChildComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: ChangeDetectionComponent }
    ]),
  ],
})
export class ChangeDetectionModule { }
