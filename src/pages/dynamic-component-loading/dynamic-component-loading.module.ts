import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DynamicComponentLoadingComponent } from "./dynamic-component-loading.component";
import { DynamicAComponent } from "./dynamic-a.component";
import { DynamicBComponent } from "./dynamic-b.component";
import { DynamicCComponent } from "./dynamic-c.component";

@NgModule({
  declarations: [
    DynamicComponentLoadingComponent,
    DynamicAComponent,
    DynamicBComponent,
    DynamicCComponent,
  ],
  exports: [
    DynamicComponentLoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DynamicComponentLoadingComponent }
    ]),
  ],
  bootstrap: [DynamicComponentLoadingComponent]
})
export class DynamicComponentLoadingModule { }
