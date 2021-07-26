import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ChangeDetectorParentComponent } from "./change-detector-parent.component";
import { ChangeDetectorComponent } from "./change-detector.component";

@NgModule({
  declarations: [
    ChangeDetectorComponent,
    ChangeDetectorParentComponent,
  ],
  exports: [
    ChangeDetectorComponent,
    ChangeDetectorParentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ChangeDetectorParentComponent }
    ]),
  ],
})
export class ChangeDetectorModule { }
