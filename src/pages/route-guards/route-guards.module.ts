import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouteGuardsComponent } from './route-guards.component';
import { RouteGuard } from './route-guard.guard';

@NgModule({
  declarations: [
    RouteGuardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        canActivate: [ RouteGuard ],
        canDeactivate: [ RouteGuard ],
        resolve: { names: RouteGuard },
        component: RouteGuardsComponent,
      }
    ]),
  ],
  providers: [
    RouteGuard,
  ]
})
export class RouteGuardsModule { }
