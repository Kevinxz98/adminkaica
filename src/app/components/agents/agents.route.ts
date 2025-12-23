import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'agents/view-agents',
        loadComponent: () => import('./agents/agents').then((m) => m.Agents),
      },
      {
        path: 'agents/detalle/:slug',
        loadComponent: () => import('./view-agent/view-agent').then((m) => m.ViewAgent),
      },
      {
        path: 'agents/:slug/wizard',
        loadComponent: () => import('./wizard/wizard').then((m) => m.Wizard),
      },
      {
        path: 'agents/my-agents',
        loadComponent: () => import('./my-agents/my-agents').then((m) => m.MyAgents),
      },
      {
        path: 'agents/my-agents/:public_key/edit',
        loadComponent: () => import('./wizard/wizard').then((m) => m.Wizard),
      },
      {
        path: 'agents/my-agents/:public_key/statistics',
        loadComponent: () => import('./view-agent-statistics/view-agent-statistics').then((m) => m.ViewAgentStatistics),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class agentsRoutingModule {
  static routes = routes;
}
