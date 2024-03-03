import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const studentGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  return authService.authUser?.role === 'ADMIN' || authService.authUser?.role === 'USER' ? true : router.createUrlTree(['dashboard', 'home']);
};
