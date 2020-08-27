import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';

/**
 * The SystemTitleResolver class provides the route data resolver that resolves the
 * title for the "System" route in the navigation hierarchy.
 */
@Injectable()
export class SystemTitleResolver implements Resolve<string> {

  /**
   * Constructs a new SystemTitleResolver.
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
    return of('System');
  }
}
