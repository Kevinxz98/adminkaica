import { Component, OnInit, signal } from '@angular/core';
import { StatisticsService } from '../../../shared/services/statistics-service.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SharedModule } from '../../../shared/shared.module';
import { SpkEmployeeCard } from '../../../@spk/reusable-widgets/spk-employee-card/spk-employee-card';
import { SpkEmployeeCardSkeleton } from '../../../@spk/reusable-widgets/spk-employee-card-skeleton/spk-employee-card-skeleton';
import { ChangeDetectorRef } from '@angular/core';
import { SpkCoursesCard } from '../../../@spk/reusable-dashboards/spk-courses-card/spk-courses-card';
import { SpkCoursesCardSkeleton } from '../../../@spk/reusable-dashboards/spk-courses-card-skeleton/spk-courses-card-skeleton';
import { SpkCustomCard } from '../../../@spk/reusable-ui-elements/spk-cards/spk-custom-card/spk-custom-card';
import { SpkAgentDetailsCard } from '../../../@spk/reusable-ui-elements/spk-agent-details-card/spk-agent-details-card';
import { SpkAgentDetailsCardSkeleton } from '../../../@spk/reusable-ui-elements/spk-agent-details-card-skeleton/spk-agent-details-card-skeleton';
import { SpkApexChart } from '../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';
import { ChartAgent } from '../chart-agent/chart-agent';
import { ShowcodeCard } from '../../../shared/components/showcode-card/showcode-card';
import { Auth } from '../../../shared/services/auth.service';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs';

interface WidgetData {
  title: string;
  value: string;
  badgeText: string;
  iconClass: string;
  color: string;
  percentChange: string;
  percentageColorClass: string;
  badge?: boolean;
  cardColor: string;
  flexClass: string;
}

interface Chatbot {
  user_id: number;
  public_key?: string;
  nombre: string;
  categoria: string;
  nombreEmpresa: string;
  sitioWeb: string | null;
  apiKey: string;
  openaiModel: string;
  avatar: string | null;
  color: string;

  estadoActivacion: string;
  estadoClass?: string; // 👈 clase visual del estado
  openai_model: string;
  status: string;
  statusClass?: string; // 👈 clase visual del estado

  created_at: string; // ISO date string

  total_messages?: number;
  total_tokens?: number;
  last_activity?: string | null;
}

@Component({
  selector: 'app-view-agent-statistics',
  imports: [
    SharedModule,
    SpkEmployeeCard,
    SpkEmployeeCardSkeleton,
    SpkAgentDetailsCard,
    SpkAgentDetailsCardSkeleton,
    ChartAgent,
    ShowcodeCard,
  ],
  templateUrl: './view-agent-statistics.html',
  styleUrl: './view-agent-statistics.scss',
})
export class ViewAgentStatistics implements OnInit {

  userState$!: Observable<{
    isLoggedIn: boolean;
    user: any;
    isLoading: boolean;
  }>;

  statisticData: any;
  detailsAgentData: any;
  dateData: any;
  Agentdata: WidgetData[] = [];
  AgentDetails: Chatbot[] = [];
  AgentDateData: any = {
    series: [],
    categories: [],
  };

  currentUser$!: Observable<any>;
  chatbotStats: any;
  chartOptions: any = {};
  userName = '';
  isLoading = true;

  constructor(
    private statisticsService: StatisticsService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
    private authService: Auth
  ) {}

  ngOnInit(): void {
    const publicKey = this.route.snapshot.paramMap.get('public_key')!;
    this.loadBasicStats(publicKey);
    this.loadSevenDaysStats(publicKey);
    this.loadAgentStatistics(publicKey);

    //get value of current user
    this.userState$ = combineLatest([
      this.authService.currentUser$,
      this.authService.loading$
    ]).pipe(
      map(([user, isLoading]) => ({
        isLoggedIn: this.authService.isLoggedIn(),
        user,
        isLoading
      }))
    );
    
    // Si hay token pero no usuario, forzar carga
    if (this.authService.isLoggedIn() && !this.authService.getCurrentUser()) {
      this.authService.loadUser();
    }
  }

  loadBasicStats(publicKey: string): void {
    this.statisticsService.getBasicStats(publicKey).subscribe((data) => {
      this.isLoading = true;
      this.statisticData = data;
      this.Agentdata = [
        {
          title: 'Mensajes totales',
          value:
            this.statisticData?.total_messages !== undefined &&
            this.statisticData?.total_messages !== null
              ? this.statisticData.total_messages.toLocaleString('es-ES')
              : 'Sin datos disponibles',
          badgeText: 'Ultimo Mes',
          iconClass: 'ri-message-3-fill',
          color: 'primary',
          cardColor: 'primary',
          percentChange: '',
          percentageColorClass: '',
          badge: true,
          flexClass: 'flex-wrap',
        },
        {
          title: 'Token totales usados',
          value:
            this.statisticData?.tokens_used !== undefined &&
            this.statisticData?.tokens_used !== null
              ? this.statisticData.tokens_used.toLocaleString()
              : 'Sin datos disponibles',
          badgeText: 'Ultimo Mes',
          iconClass: 'ri-token-swap-line',
          color: 'secondary',
          cardColor: 'secondary',
          percentChange: '',
          percentageColorClass: '',
          badge: true,
          flexClass: 'flex-wrap',
        },
        {
          title: 'Ultima actividad de mensajes',
          value: this.statisticData.last_activity,
          badgeText: 'Ultimo Mes',
          iconClass: 'ri-calendar-event-line',
          color: 'success',
          cardColor: 'success',
          percentChange: '',
          percentageColorClass: '',
          badge: true,
          flexClass: 'flex-wrap',
        },
      ];

      this.AgentDetails = [
        {
          public_key: this.route.snapshot.paramMap.get('public_key')!,
          user_id: this.statisticData?.stats.user_id ?? 0,
          avatar: `http://localhost:8000/chatbots/avatar/${this.statisticData?.stats.avatar}`,
          nombre: this.statisticData?.stats.nombre ?? '',
          estadoActivacion: this.statisticData?.stats.estadoActivacion ?? '',
          estadoClass: this.getEstadoClass(
            this.statisticData?.stats.estadoActivacion
          ),
          categoria: this.statisticData?.stats.categoria ?? '',
          nombreEmpresa: this.statisticData?.stats.nombreEmpresa ?? '',
          sitioWeb: this.statisticData?.stats.sitioWeb ?? '',
          openaiModel: this.statisticData?.stats.openai_model ?? '',
          openai_model: this.statisticData?.stats.openai_model ?? '',
          color: this.statisticData?.stats.color ?? '',
          created_at: this.statisticData?.stats.created_at ?? '',
          status: this.statisticData?.stats.status ?? '',
          statusClass: this.getStatusClass(this.statisticData?.stats.status),
          apiKey: this.statisticData?.stats.public_key ?? '',
        },
      ];

      this.isLoading = false;
      this.cdr.detectChanges();
      console.log('Basic Stats:', data);
    });
  }

  getEstadoClass(estado?: string): string {
    switch (estado) {
      case 'Activar':
        return 'badge bg-success';
      case 'Activo':
        return 'badge bg-success';
      case 'Solo Guardar':
        return 'badge bg-warning';
      case 'Guardado':
        return 'badge bg-warning';
      case 'Guardar como borrador':
        return 'badge bg-secondary';
      case 'Borrador':
        return 'badge bg-secondary';
      default:
        return 'badge bg-light text-dark';
    }
  }

  editBot(public_key: string) {
    console.log('Editar bot con key:', public_key);
  }

  testBot(public_key: string) {
    console.log('Probar bot con key:', public_key);
  }

  disableBot(public_key: string) {
    console.log('Desactivar bot con key:', public_key);
  }

  getStatusClass(status?: number): string {
    return status === 1 ? 'badge bg-success' : 'badge bg-danger';
  }

  loadAgentStatistics(publicKey: string): void {
    this.statisticsService
      .getStatisticsForAgent(publicKey)
      .subscribe((data) => {
        console.log('Statistics for agent:', data);
      });
  }

  loadSevenDaysStats(publicKey: string): void {
    this.statisticsService.getSevenDaysStats(publicKey).subscribe({
      next: (data) => {
        this.chatbotStats = data;
        this.isLoading = false;
        // Forzar detección de cambios después de asignar los datos
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error:', error);
        this.isLoading = false;
        this.cdr.detectChanges();
      },
    });
  }

  get agentCode(): string {
    const publicKey = this.route.snapshot.paramMap.get('public_key');
    return `<!-- Código de integración del Chatbot -->
<script 
  src="https://chatbotv2-auerf7dbcpdudjfs.mexicocentral-01.azurewebsites.net/widget/embed.js"
  data-client="${publicKey}">
</script>`;
  }
}
