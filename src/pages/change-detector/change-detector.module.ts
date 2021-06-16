import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
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
  imports: [CommonModule],
})
export class ChangeDetectorModule { }
