import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AgentService } from '../../../shared/services/agent-service.service';
import { SpkTitleCard } from '../../../@spk/reusable-ui-elements/spk-cards/spk-title-card/spk-title-card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-agents',
  imports: [NgbModule, SharedModule],
  templateUrl: './agents.html',
  styleUrl: './agents.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Agents implements OnInit {
  agentCards: any[] = [];
  loading = true;

  constructor(
    private agentService: AgentService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadAgents();
  }

  loadAgents(): void {
    this.loading = true;
    this.agentService.getAgents().subscribe({
      next: (agents) => {
        this.agentCards = agents.map((a: any) => ({
          imageUrl: a.image
            ? `http://localhost:8000/storage/${a.image}`
            : 'assets/default-agent.png',
          title: a.name,
          lead: a.lead,
          slug: a.slug,
        }));
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching agents:', error);
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }

  goToCreateAgent() {
    this.router.navigate(['/agentes/crear']);
  }

  goToAgentDetail(slug: string) {
    if (!slug) {
      console.warn('Agente sin slug, no puedo navegar.');
      return;
    }
    this.router.navigate(['/agents/detalle', slug]);
  }
}
