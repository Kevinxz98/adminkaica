import { Component, OnInit, ViewChild } from '@angular/core';
import {
  API,
  APIDefinition,
  Columns,
  Config,
  DefaultConfig,
  TableModule
} from 'ngx-easy-table';

import { FormsModule } from '@angular/forms';

import { SpkDropdowns } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
import { RouterModule } from '@angular/router';
import { ChatbotService } from '../../../shared/services/chatbot-service.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import Swal from 'sweetalert2';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-agents',
  imports: [
    TableModule,
    FormsModule,
    SpkDropdowns,
    RouterModule,
    AsyncPipe,
    CommonModule,
  ],
  templateUrl: './my-agents.html',
  styleUrl: './my-agents.scss',
})
export class MyAgents {
  constructor(
    private chatbotServices: ChatbotService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  public configuration!: Config;
  public columns!: Columns[];
  public data: any[] = [];
  public selected = new Set();
  public agentes$!: Observable<any[]>;

  allSelected = false;
  ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.checkboxes = true;
    this.columns = [
      { key: 'nombre', title: 'Nombre del Agente' },
      { key: 'nombreEmpresa', title: 'Empresa' },
      { key: 'Status', title: 'Estado' },
      { key: 'Actions', title: 'Acciones' },
    ];
    this.loadMyAgents();
    console.log(this.router.url);
  }

  rowSelected(): void {
    this.allSelected = this.data.every((row) => !!row.selected);
  }

  @ViewChild('table') table!: APIDefinition;

  onTableWithSearchChange(event: Event): void {
    this.table.apiEvent({
      type: API.onGlobalSearch,
      value: (event.target as HTMLInputElement).value,
    });
  }

  tableEventEmitted(event: { event: string; value: any }): void {
    if (event.event === 'onSelectAll') {
      this.data.forEach((row: any) => (row.selected = event.value));
    }
  }


  loadMyAgents() {
    this.agentes$ = this.chatbotServices.loadMyAgents().pipe(
      map((agentes: any[]) =>
        agentes.map((item) => ({
          ...item,
          nombre: item.nombre,
          avatar: item.avatar
            ? `http://localhost:8000/storage/${item.avatar}`
            : null,
          nombreEmpresa: item.nombreEmpresa,
          Status: item.estadoActivacion,
          Date: item.created_at,
        }))
      )
    );
  }

  textColor(hexColor: string): string {
    if (!hexColor) return '#000'; // Default: negro
    hexColor = hexColor.replace('#', '');
    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);
    const luminancia = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminancia > 150 ? '#000' : '#fff';
  }

  statusLabel(status: string): { text: string, color: string } {
    switch (status) {
      case 'Activar':
        return { text: 'Activo', color: 'text-success' };
      case 'Solo guardar':
        return { text: 'Guardado', color: 'text-warning' };
      case 'Guardar como borrador':
        return { text: 'Borrador', color: 'text-warning' };
      default:
        return { text: 'Inactivo', color: 'text-danger' };
    }
}

}
