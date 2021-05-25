import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
  ],
  providers: [],
  bootstrap: [CustomValidatorsComponent]
})
export class CustomValidatorsModule { }
