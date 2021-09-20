import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

import { InterceptorExampleComponent } from './interceptor-example.component';
import { AuthInterceptorService } from './auth-interceptor.service';
import { CacheInterceptorService } from './cache-interceptor.service';

@NgModule({
  declarations: [InterceptorExampleComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forChild([  
      { path: '', component: InterceptorExampleComponent }
    ]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptorService, multi: true },
  ]
})
export class InterceptorExampleModule { }
