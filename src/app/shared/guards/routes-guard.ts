import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth.service';
import { catchError, map, of } from 'rxjs';

export const routesGuard: CanActivateFn = (route, state) => {
 const authService = inject(Auth);
  const router = inject(Router);

  return authService.checkSession().pipe(
    map(() => true), // sesión válida
    catchError(() => {
      localStorage.removeItem('auth_token');
      router.navigate(['/auth/login']);
      return of(false);
    })
  );
};
