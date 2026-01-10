import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'clients/view-clients',
        loadComponent: () => import('./view-clients/view-clients').then((m) => m.ViewClients),
      },
      {
        path: 'clients/view-single-client/:id',
        loadComponent: () => import('./view-single-client/view-single-client').then((m) => m.ViewSingleClient),
      },
      {
        path: 'clients/agents/view-agent/:public_key/statistics',
        loadComponent: () => import('./agents/view-agent/view-agent').then((m) => m.ViewAgent),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class clientsRoutingModule {
  static routes = routes;
}
