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
import { Servicios } from '../../../shared/services/servicios.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import Swal from 'sweetalert2';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-view-service',
  imports: [TableModule, FormsModule, SpkDropdowns, RouterModule, AsyncPipe],
  templateUrl: './view-service.html',
  styleUrl: './view-service.scss',
})
export class ViewService {
  constructor(
    private serviciosService: Servicios,
    private cdr: ChangeDetectorRef,
    private router: Router 
  ) {}

  public configuration!: Config;
  public columns!: Columns[];
  public data: any[] = [];
  public selected = new Set();
  public servicios$!: Observable<any[]>;

  allSelected = false;
  ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.checkboxes = true;
    this.columns = [
      { key: 'Id', title: 'ID', width: '30px' },
      { key: 'productName', title: 'Nombre del Servicio' },
      { key: 'price', title: 'Precio Mensual' },
      { key: 'Status', title: 'Estado' },
      { key: 'Actions', title: 'Acciones' },
    ];
    this.loadServices();
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

  loadServices() {
    this.servicios$ = this.serviciosService.getServices().pipe(
      map((servicios: any[]) =>
        servicios.map((item) => ({
          Id: item.id,
          productName: item.name,
          Image: `http://localhost:8000/storage/${item.image}`,
          price: `$${item.price_monthly}`,
          Status: item.status == 'active' ? 'Publicado' : 'No Publicado',
          Date: item.created_at,
        }))
      )
    );
  }

  deleteService(id: number) {
    Swal.fire({
      title: 'Estas seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, bórralo!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviciosService.deleteService(id).subscribe({
          next: (result) => {
            Swal.fire('Éxito', result.message, 'success');
            this.loadServices();
            this.cdr.detectChanges();
          },
          error: (error) => {
            console.error('Error eliminando el servicio:', error);
          },
        });
      }
    });
  }

  toggleServiceStatus(id: number, currentStatus: string) {
    const newStatus = currentStatus === 'Publicado' ? 'inactive' : 'active';
    const actionText = newStatus === 'active' ? 'activar' : 'desactivar';
    Swal.fire({
      title: `¿Estás seguro de que deseas ${actionText} este servicio?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Sí, ${actionText}lo`,
    }).then((result) => {
      if (result.isConfirmed) {
        const formData = new FormData();
        formData.append('status', newStatus);
        this.serviciosService
          .updateService(id, formData)
          .subscribe({
            next: (res) => {
              Swal.fire(
                'Éxito',
                `El servicio ha sido ${newStatus === 'active' ? 'activado' : 'desactivado'}.`,
                'success'
              );
              this.loadServices();
              this.cdr.detectChanges();
            },
            error: (err) => {
              console.error('Error al actualizar el estado del servicio:', err);
            },
          }); 
      }
    });
  }
}
