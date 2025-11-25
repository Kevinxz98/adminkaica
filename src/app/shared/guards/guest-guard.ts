import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})

export class guestGuard implements CanActivate {
  constructor(private authService: Auth, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboards/sales']);
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
};
