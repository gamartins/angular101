import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AnotherProviderService, APIURL } from "./another-provider.service";
import { BaseProviderService } from "./base-provider.service";
import { BetterProviderService } from "./better-provider.service";

import { DependencyInjectionExampleComponent } from "./dependency-injection-example.component";

@NgModule({
  declarations: [ DependencyInjectionExampleComponent ],
  exports: [ DependencyInjectionExampleComponent ],
  providers: [
    BaseProviderService,
    // { provide: BaseProviderService, useClass: BaseProviderService }, // the same that previous one
    // { provide: BaseProviderService, useClass: BetterProviderService },
    AnotherProviderService,
    { provide: APIURL, useValue: 'someCustomURL' },
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DependencyInjectionExampleComponent }
    ]),
  ]
})
export class DependencyInjectionExampleModule { }
