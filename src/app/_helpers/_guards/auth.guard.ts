import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../../_services/_authentications/authentication.service';
import { inject } from '@angular/core';

export function authGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  const router = inject(Router);
  const authService = inject(AuthenticationService);
  const user = authService.userValue;
  if (user) {
      // authorised so return true
      return true;
  }

  // not logged in so redirect to login page with the return url
  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
}
