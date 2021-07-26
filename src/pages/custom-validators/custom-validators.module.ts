import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { DefaultEmailValidator } from "./custom-validators";
import { CustomValidatorsComponent } from "./custom-validators.component";

@NgModule({
  declarations: [
    CustomValidatorsComponent,
    DefaultEmailValidator
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: CustomValidatorsComponent }
    ]),
  ],
  bootstrap: [
    CustomValidatorsComponent,
  ]
})
export class CustomValidatorsModule { }
