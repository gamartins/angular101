import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, CanLoad, Resolve, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RouteGuardsComponent } from './route-guards.component';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate, CanDeactivate<RouteGuardsComponent>, Resolve<string[]> {

  // I will make some verification to make sure you can enter
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const isAuthorized = route.queryParams['authorized']

      if (isAuthorized) { return true; }

      alert("You're not authorized. Go home!")

      return false;
  }

  // I will make some verification to make sure you can leave
  canDeactivate(
    component: RouteGuardsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const confirmation = window.confirm("Are u sure ?")

      return confirmation
  }

  // I can prefetch some data before loading the next page
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string[] | Observable<string[]> | Promise<string[]> {
    const data = [ 'Rick', 'Morty', 'Summer' ];

    return of(data);
  }

}
