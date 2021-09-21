import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ExampleAotComponent } from './example-aot.component';
import { ExampleAotService } from './example-aot.service';

export function myServiceFactory() {
  return new ExampleAotService();
}

@NgModule({
  declarations: [ExampleAotComponent],
  providers: [
    {
      provide: ExampleAotService,
      // useFactory: myServiceFactory
      // Common Mistake #1: Factory functions must be exported, named functions
      useFactory: () => new ExampleAotService()
    }
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([  
      { path: '', component: ExampleAotComponent }
    ]),
  ]
})
export class ExampleAotModule { }
