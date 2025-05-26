// auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
debugger;
  if (authService.isLoggedIn()) {
    return true;
  }

  authService.setReturnUrl(state.url);
  return router.parseUrl('/login');
};