import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartComponent } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexYAxis,
  ApexPlotOptions,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexGrid,
} from 'ng-apexcharts';
import { CommonModule } from '@angular/common';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  grid: ApexGrid;
  colors: string[];
};

@Component({
  selector: 'app-chart-agent',
  imports: [NgApexchartsModule, CommonModule],
  templateUrl: './chart-agent.html',
  styleUrl: './chart-agent.scss',
})
export class ChartAgent implements OnChanges {
  @ViewChild('chart') chart!: ChartComponent;
  @Input() chatbotStats: any;

  public chartOptions: Partial<ChartOptions> = {};

  constructor() {
    // Configuración inicial del gráfico (se actualizará con datos reales)
    this.chartOptions = {
      series: [],
      chart: {
        type: 'bar',
        height: 400,
        stacked: false,
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 5,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [],
        title: {
          text: 'Fecha',
        },
      },
      yaxis: [
        {
          title: {
            text: 'Tokens Usados',
          },
          min: 0,
        },
        {
          opposite: true,
          title: {
            text: 'Interacciones / Dominios',
          },
        },
      ],
      colors: ['#3B82F6', '#10B981', '#F59E0B'],
      grid: {
        borderColor: '#E5E7EB',
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val.toLocaleString();
          },
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center',
      },
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chatbotStats'] && this.chatbotStats?.data.daily_stats) {
      this.updateChart();
    }
  }

  private updateChart(): void {
    const dailyStats = this.chatbotStats.data.daily_stats;

    // Ordenar por fecha
    const sortedStats = [...dailyStats].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    // Formatear fechas para el eje X
    const categories = sortedStats.map((stat) => {
      const date = new Date(stat.date);
      return date.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
      });
    });

    // Preparar las series de datos
    const interactions = sortedStats.map((stat) => stat.interactions);
    const uniqueDomains = sortedStats.map((stat) => stat.unique_domains);
    const tokensUsed = sortedStats.map((stat) => stat.tokens_used);

    // Actualizar las opciones del gráfico
    this.chartOptions = {
      ...this.chartOptions,
      series: [
        {
          name: 'Tokens Usados',
          type: 'bar',
          data: tokensUsed,
        },
        {
          name: 'Interacciones',
          type: 'column',
          data: interactions,
        },
        {
          name: 'Dominios Únicos',
          type: 'column',
          data: uniqueDomains,
        }
        
      ] as ApexAxisChartSeries,
      xaxis: {
        ...this.chartOptions.xaxis,
        categories: categories,
      },
    };
  }

  // Métodos para calcular totales
  getTotalInteractions(): number {
    if (!this.chatbotStats?.data.daily_stats) return 0;
    return this.chatbotStats.data.daily_stats.reduce(
      (total: number, day: any) => total + day.interactions,
      0
    );
  }

  getTotalTokens(): number {
    if (!this.chatbotStats?.data.daily_stats) return 0;
    return this.chatbotStats.data.daily_stats.reduce(
      (total: number, day: any) => total + day.tokens_used,
      0
    );
  }

  getPeriodRange(): string {
    if (!this.chatbotStats?.data?.period) return '';
    const period = this.chatbotStats.data.period;
    const start = new Date(period.start_date);
    const end = new Date(period.end_date);

    return `${start.toLocaleDateString('es-ES')} - ${end.toLocaleDateString(
      'es-ES'
    )}`;
  }
}
