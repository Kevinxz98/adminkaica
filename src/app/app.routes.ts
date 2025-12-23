import { Routes } from '@angular/router';
import { FullLayout } from './shared/layouts/full-layout/full-layout';
import { Full_Content_Routes } from './shared/routes/content.routes';
import { Authentication_ROUTES } from './shared/routes/authentication.routes';
import { AuthenticationLayout } from './shared/layouts/authentication-layout/authentication-layout';
import { authGuard } from './shared/guards/auth-guard';

export const routes: Routes = [

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth/login',
    loadComponent: () =>
      import('../app/authentication/login-page/login-page').then((m) => m.LoginPage),
  },
  {
    path: 'auth/register',
    loadComponent: () =>
      import('../app/authentication/register-page/register-page').then((m) => m.RegisterPage),
  },
  { path: '', component: FullLayout, children: Full_Content_Routes, canActivate: [authGuard] },
  { path: '', component: AuthenticationLayout, children: Authentication_ROUTES },
  {
    path: 'agents/test-agent/:public_key',
    loadComponent: () => import('../app/components/agents/test-agent/test-agent').then((m) => m.TestAgent),
  },
  
];
