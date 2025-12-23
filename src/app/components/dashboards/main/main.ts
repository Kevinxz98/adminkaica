import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SharedModule } from '../../../shared/shared.module';
import { SpkEmployeeCard } from '../../../@spk/reusable-widgets/spk-employee-card/spk-employee-card';
import { SpkEmployeeCardSkeleton } from '../../../@spk/reusable-widgets/spk-employee-card-skeleton/spk-employee-card-skeleton';
import { FlatpickrDefaults } from 'angularx-flatpickr';
import { SpkFlatpickr } from '../../../@spk/spk-reusable-plugins/spk-flatpickr/spk-flatpickr';
import { StatisticsService } from '../../../shared/services/statistics-service.service';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

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

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    SharedModule,
    SpkEmployeeCard,
    SpkFlatpickr,
    SpkEmployeeCardSkeleton,
  ],
  providers: [FlatpickrDefaults],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main implements OnInit {
  staticsData: any;
  Agentsdata: WidgetData[] = [];
  isLoading = true;

  constructor(
    private sanitizer: DomSanitizer,
    private statisticsService: StatisticsService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getStaticsData();
  }

  getStaticsData() {
    this.isLoading = true;
    this.statisticsService.getStatisticsData().subscribe((data) => {
      this.staticsData = data;
      this.Agentsdata = [
        {
          title: 'Mensajes totales',
          value:
            this.staticsData?.total_messages !== undefined &&
            this.staticsData?.total_messages !== null
              ? this.staticsData.total_messages.toLocaleString('es-ES')
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
            this.staticsData?.tokens_used !== undefined &&
            this.staticsData?.tokens_used !== null
              ? this.staticsData.tokens_used.toLocaleString()
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
          value: this.staticsData.last_activity,
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
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }

  getSanitizedSVG(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }

   goToCreateAgent(slug?: string) {
    if (!slug) {
      console.warn('Agente sin slug, no puedo navegar.');
      return;
    }
    this.router.navigate(['/agents/', slug, 'wizard']);
  }
}
