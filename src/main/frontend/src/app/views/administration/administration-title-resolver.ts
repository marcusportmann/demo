import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import { Injectable } from "@angular/core";

/**
 * The AdministrationTitleResolver class provides the route data resolver that resolves the
 * title for the "Administration" route in the navigation hierarchy.
 */
@Injectable()
export class AdministrationTitleResolver implements Resolve<string> {

  /**
   * Constructs a new AdministrationTitleResolver.
   */
  constructor() {
  }

  /**
   * Resolve the title.
   *
   * @param activatedRouteSnapshot The activate route snapshot.
   * @param routerStateSnapshot    The router state snapshot.
   */
  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot,
          routerStateSnapshot: RouterStateSnapshot): Observable<string> {
    return of('Administration');
  }
}
