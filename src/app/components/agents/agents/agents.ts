import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AgentService } from '../../../shared/services/agent-service.service';
import { SpkTitleCard } from '../../../@spk/reusable-ui-elements/spk-cards/spk-title-card/spk-title-card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { BugService } from '../../../shared/services/bug-service.service';
import { FormsModule } from '@angular/forms';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-agents',
  imports: [NgbModule, SharedModule, FormsModule, ReactiveFormsModule, ToastrModule],
  templateUrl: './agents.html',
  styleUrl: './agents.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Agents implements OnInit {
  agentCards: any[] = [];
  loading = true;
  formReport!: FormGroup;
  selectedChatbotIdForReport: number | null = null;

  constructor(
    private agentService: AgentService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private bugService: BugService,
    private toastr: ToastrService
  ) {
    this.formReport = new FormBuilder().group({
      issueDescription: ['', Validators.required],
      stepsToReproduce: [''],
    });
  }

  ngOnInit(): void {
    this.loadAgents();
  }

  loadAgents(): void {
    this.loading = true;
    this.agentService.getAgents().subscribe({
      next: (agents) => {
        this.agentCards = agents.map((a: any) => ({
          imageUrl: a.image
            ? `https://backend.kaica.co/public/storage/${a.image}`
            : 'assets/default-agent.png',
          title: a.name,
          lead: a.lead,
          slug: a.slug,
          chatbotId: a.id,
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

  goToCreateAgent(slug?: string) {
    if (!slug) {
      console.warn('Agente sin slug, no puedo navegar.');
      return;
    }
    this.router.navigate(['/agents/', slug, 'wizard']);
  }

  goToAgentDetail(slug: string) {
    if (!slug) {
      console.warn('Agente sin slug, no puedo navegar.');
      return;
    }
    this.router.navigate(['/agents/detalle', slug]);
  }

  openFailsForm(chatbotId: number)
  {
    this.selectedChatbotIdForReport = chatbotId;

    const form = document.getElementById("bugReportCard");
    if (form) {
      form.style.display = "block";
    }

    this.prepareBugReportData(chatbotId);

  }

  prepareBugReportData(chatbotId: number)
  {
    this.selectedChatbotIdForReport = chatbotId;
  }

  submitBugReport()
  {
    if(this.formReport.invalid) {
      console.warn('Formulario inválido, no se puede enviar el reporte.');
      return;
    }
    const formData = this.prepareFormData(this.selectedChatbotIdForReport!);

    this.bugService.createReport(formData).subscribe({
      next: (response) => {
        console.log('Report sent successfully:', response);
        this.toastr.success('Reporte enviado con éxito', 'Kaica', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.formReport.reset();
        const form = document.getElementById("bugReportCard");
      },
      error: (error) => {
        console.error('Error sending report:', error);
      }
    });
  }

  private prepareFormData(chatbotId: number): FormData {
    const formData = new FormData();
    formData.append('issueDescription', this.formReport.get('issueDescription')?.value);
    formData.append('stepsToReproduce', this.formReport.get('stepsToReproduce')?.value);
    formData.append('chatbot_id', chatbotId.toString());
    return formData;
  }

}