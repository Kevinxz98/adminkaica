import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentService } from '../../../shared/services/agent-service.service';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-agent',
  imports: [CommonModule, QuillModule],
  templateUrl: './view-agent.html',
  styleUrl: './view-agent.scss',
})
export class ViewAgent {

  agent: any = null;
  loading = true;
  agentCards: any[] = [];

  constructor(private route: ActivatedRoute, private agentService: AgentService, private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    console.log('Agent Slug:', slug);

    if (slug) {
      this.agentService.getAgentBySlug(slug).subscribe({
        next: (agent) => {
          this.agent = agent;
          //show title in console
          agent.image  = `http://localhost:8000/storage/${agent.image}`
          this.loading = false;
          console.log('Agent Data:', agent);
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Error fetching agent data:', error);
        },
      });
    } else {
      console.error('No slug provided in route parameters.');
    }

    this.loadAgents();
  }

  loadAgents(): void {
    this.loading = true;
    this.agentService.getAgents().subscribe({
      next: (agents) => {
        console.log('Agents fetched:', agents);
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

  back() {
    window.history.back();
  }

  goToAgentDetail(slug: string) {
    if (!slug) {
      console.warn('Agente sin slug, no puedo navegar.');
      return;
    }
    window.location.href = `/agents/detalle/${slug}`;
  }

  goToCreateAgent() {
    this.router.navigate(['/agentes/crear']);
  }

  
}
