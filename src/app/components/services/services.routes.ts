import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {
    path: '',
    children: [
      {
        path: 'services/new-service',
        loadComponent: () =>
          import('./new-service/new-service').then((m) => m.NewService),
      },
      {
        path: 'services/view-service',
        loadComponent: () =>
          import('./view-service/view-service').then((m) => m.ViewService),
      },
      {
        path: 'services/edit-service/:id',
        loadComponent: () =>
          import('./edit-service/edit-service').then((m) => m.EditService),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class servicesRoutingModule {
  static routes = admin;
}
