import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

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
  imports: [CommonModule],
  providers: [],
  bootstrap: [DynamicComponentLoadingComponent]
})
export class DynamicComponentLoadingModule { }
