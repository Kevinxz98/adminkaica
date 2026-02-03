import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil, switchMap } from 'rxjs';
import { ClientsService, User, UserDetails } from '../../../shared/services/clients-service.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-single-client',
  imports: [CommonModule, RouterLink],
  templateUrl: './view-single-client.html',
  styleUrl: './view-single-client.scss',
})
export class ViewSingleClient implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  user: UserDetails | null = null;
  userId!: number;

  isLoading = false;
  error: string | null = null;
  showAsCards = false;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientsService: ClientsService,
    private cdr: ChangeDetectorRef
  ) {}

   ngOnInit(): void {
    this.route.params.pipe(
      takeUntil(this.destroy$)
    ).subscribe(params => {
      this.userId = +params['id'];
      this.loadUser();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadUser(): void {
    this.isLoading = true;
    this.error = null;

    // Primero intenta obtener de memoria (instantáneo)
    const cachedUser = this.clientsService.getUserById(this.userId);
    
    if (cachedUser) {
      this.user = cachedUser;
      this.isLoading = false;
    } else {
      // Si no está en memoria, carga del backend
      this.clientsService.getUserDetails(this.userId)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (user) => {
            this.user = user;
            this.isLoading = false;
            this.cdr.detectChanges();
          },
          error: (err) => {
            this.error = err.message || 'No se pudo cargar la información del usuario';
            this.isLoading = false;
            this.cdr.detectChanges();
          }
        });
    }
  }

   goBack(): void {
    this.router.navigate(['/clients/view-clients']);
  }

  editUser(): void {
    this.router.navigate(['/admin/clients', this.userId, 'edit']);
  }

   getAvatarUrl(user: User): string {
    if (user.profile?.profile_image) {
      const img = user.profile.profile_image;
      if (img.startsWith('http') || img.startsWith('./assets/')) {
        return img;
      }
      return `https://backend.kaica.co/storage/${img}`;
    }
    return './assets/images/media/icons/user-icon.png';
  }

  deleteUser()
  {

  }

  getRoleBadgeClass(roles: any[]): string {
    if (!roles || roles.length === 0) return 'bg-secondary-transparent';
    const roleNames = roles.map(r => r.name);
    if (roleNames.includes('admin')) return 'bg-danger-transparent';
    if (roleNames.includes('manager')) return 'bg-warning-transparent';
    if (roleNames.includes('editor')) return 'bg-info-transparent';
    return 'bg-primary-transparent';
  }

  getRoleDisplayName(roles: any[]): string {
    if (!roles || roles.length === 0) return 'Usuario';
    const roleNames = roles.map(r => r.name);
    if (roleNames.includes('admin')) return 'Administrador';
    if (roleNames.includes('manager')) return 'Manager';
    if (roleNames.includes('editor')) return 'Editor';
    return 'Usuario';
  }

  getPhoneNumber(user: User): string {
    return user.profile?.phone_number || 'No registrado';
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Métodos de acción (simulados)
  sendVerificationEmail(): void {
    alert('Email de verificación enviado');
  }

  resetPassword(): void {
    alert('Instrucciones para resetear contraseña enviadas');
  }

  impersonateUser(): void {
    alert('Suplantación de usuario iniciada');
  }

   toggleChatbotView(): void {
    this.showAsCards = !this.showAsCards;
  }

  getChatbotAvatar(chatbot: any): string {
    if (chatbot.avatar) {
      if (chatbot.avatar.startsWith('http') || chatbot.avatar.startsWith('/')) {
        return chatbot.avatar;
      }
      return `https://backend.kaica.co/storage/${chatbot.avatar}`;
    }
    return './assets/images/faces/1.jpg';
  }

  getContrastColor(hexColor: string): string {
    // Convierte hex a RGB
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    
    // Calcula luminosidad
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    // Retorna blanco o negro según contraste
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
  }
  getChatbotStatusClass(status: string): string {
    switch (status?.toLowerCase()) {
      case 'activo':
        return 'badge bg-success-transparent';
      case 'inactivo':
        return 'badge bg-danger-transparent';
      case 'pendiente':
        return 'badge bg-warning-transparent';
      default:
        return 'badge bg-secondary-transparent';
    }
  }

  getChatbotStatusText(status: string): string {
    switch (status?.toLowerCase()) {
      case 'activo':
        return 'Activo';
      case 'guardado':
        return 'Inactivo';
      case 'borrador':
        return 'Pendiente';
      default:
        return 'Desconocido';
    }
  }
   toggleChatbotStatus(chatbot: any): void {
    const newStatus = chatbot.Status === 'Activo' ? 'Inactivo' : 'Activo';
    const action = chatbot.Status === 'Activo' ? 'desactivar' : 'activar';
    
    if (confirm(`¿Estás seguro de ${action} el agente "${chatbot.nombre}"?`)) {
      // Aquí implementarías la llamada al servicio
      console.log(`Cambiando estado del chatbot ${chatbot.id} a ${newStatus}`);
      
      // Actualizar localmente
      chatbot.Status = newStatus;
    }
  }

  deleteChatbot(chatbot: any)
  {

  }
}