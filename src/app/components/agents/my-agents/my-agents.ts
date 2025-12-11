import { Component, OnInit, ViewChild } from '@angular/core';
import {
  API,
  APIDefinition,
  Columns,
  Config,
  DefaultConfig,
  TableModule,
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
import { Router } from '@angular/router'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-agents',
  imports: [TableModule, FormsModule, SpkDropdowns, RouterModule, AsyncPipe, CommonModule],
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
      { key: 'avatar', title: 'Avatar' },
      { key: 'nombreEmpresa', title: 'Empresa' },
      { key: 'objetivoPrincipal', title: 'Objetivo' },
      { key: 'estadoActivacion', title: 'Estado' },
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
          avatar: item.avatar ? `http://localhost:8000/storage/${item.avatar}` : null,
          nombreEmpresa: item.nombreEmpresa,
          estadoActivacion: item.estadoActivacion,
          Date: item.created_at,
        }))
      )
    );
  }

  
}
