import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { SpkEmployeeCard } from '../../../@spk/reusable-widgets/spk-employee-card/spk-employee-card';
import { SpkEmployeeCardSkeleton } from '../../../@spk/reusable-widgets/spk-employee-card-skeleton/spk-employee-card-skeleton';
import {
  ClientsService,
  User,
  UserStatistics,
  PaginationInfo,
} from '../../../shared/services/clients-service.service';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
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
  selector: 'app-view-clients',
  imports: [SpkEmployeeCardSkeleton, FormsModule],
  templateUrl: './view-clients.html',
  styleUrl: './view-clients.scss',
})
export class ViewClients implements OnInit, OnDestroy {
  isLoading = true;
  isLoadingStats = true;
  clientsData: any[] = [];
  clientsInformation: User[] = [];
  statistics: UserStatistics['data'] | null = null;

  isRefreshing = false;
  
  allUsers: User[] = [];
  displayedUsers: User[] = [];

  // Filtros
  searchTerm = '';
  selectedRole: string = '';
  verificationFilter: string = 'all'; // 'all', 'verified', 'unverified'
  sortBy: string = 'created_at';
  sortOrder: 'asc' | 'desc' = 'desc';

  pagination: PaginationInfo = {
    currentPage: 1,
    pageSize: 10,
    totalItems: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPrevPage: false,
    startIndex: 0,
    endIndex: 0,
  };

  // Roles únicos para filtro
  availableRoles: string[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private clientsService: ClientsService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadStatistics();
    this.loadAllUsers();

    this.clientsService.paginatedUsers$
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.displayedUsers = result.users;
        this.pagination = result.pagination;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadStatistics(): void {
    this.isLoadingStats = true;
    this.clientsService
      .getStatistics()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.statistics = response.data;
            this.prepareClientsData();
          }
          this.isLoadingStats = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Error loading statistics:', error);
          this.isLoadingStats = false;
          this.cdr.detectChanges();
        },
      });
  }

  prepareClientsData(): void {
    if (!this.statistics) return;

    this.clientsData = [
      {
        id: 1,
        name: 'Usuarios Totales',
        value: this.statistics.total.toString(),
        percentage: '100%',
        icon: 'users',
        color: 'primary',
        trend: 'up',
        description: 'Usuarios registrados',
      },
      {
        id: 2,
        name: 'Usuarios Verificados',
        value: this.statistics.verified.toString(),
        percentage: `${Math.round(
          (this.statistics.verified / this.statistics.total) * 100
        )}%`,
        icon: 'user-check',
        color: 'success',
        trend: 'up',
        description: 'Usuarios con email verificado',
      },
      {
        id: 3,
        name: 'Administradores',
        value: this.statistics.admins.toString(),
        percentage: `${Math.round(
          (this.statistics.admins / this.statistics.total) * 100
        )}%`,
        icon: 'user-minus',
        color: 'warning',
        trend: 'stable',
        description: 'Usuarios con rol de administrador',
      },
      {
        id: 4,
        name: 'Nuevos Hoy',
        value: this.statistics.today.toString(),
        percentage: '',
        icon: 'user-plus',
        color: 'info',
        trend: 'up',
        description: 'Usuarios registrados hoy',
      },
    ];
  }

  loadAllUsers(): void {
    this.isLoading = true;
    this.clientsService
      .loadAllUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (users) => {
          this.allUsers = users;
          this.extractUniqueRoles();
          this.applyFilters();
          this.isLoading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Error loading users:', error);
          this.isLoading = false;
          this.cdr.detectChanges();
        },
      });
  }

  viewDetails(client: User): void {
    this.router.navigate(['/clients/view-single-client', client.id]);
  }
  extractUniqueRoles(): void {
    const rolesSet = new Set<string>();
    this.allUsers.forEach((user) => {
      user.roles.forEach((role) => {
        rolesSet.add(role.name);
      });
    });
    this.availableRoles = Array.from(rolesSet).sort();
  }

  applyFilters(): void {
    const filters: any = {
      searchTerm: this.searchTerm,
      sortBy: this.sortBy,
      sortOrder: this.sortOrder
    };

    if (this.selectedRole) {
      filters.roles = [this.selectedRole];
    }

    if (this.verificationFilter !== 'all') {
      filters.verified = this.verificationFilter === 'verified';
    }

    this.clientsService.filterUsers(filters);
  }

   onSearchInput(): void {
    // Aplicar filtros inmediatamente (sin debounce ya que es local)
    this.pagination.currentPage = 1;
    this.applyFilters();
  }

  onSortChange(field: string): void {
    if (this.sortBy === field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = field;
      this.sortOrder = 'desc';
    }
    this.applyFilters();
  }


   onPageChange(page: number): void {
    this.clientsService.applyPagination(
      this.allUsers, // O usa los usuarios filtrados si guardas esa referencia
      page,
      this.pagination.pageSize
    );
  }

   onPageSizeChange(size: number): void {
    this.pagination.pageSize = size;
    this.pagination.currentPage = 1;
    this.clientsService.applyPagination(
      this.allUsers,
      1,
      size
    );
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedRole = '';
    this.verificationFilter = 'all';
    this.sortBy = 'created_at';
    this.sortOrder = 'desc';
    this.applyFilters();
  }

  refreshData(): void {
    this.isRefreshing = true;
    this.clientsService.refreshUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (users) => {
          this.allUsers = users;
          this.extractUniqueRoles();
          this.applyFilters();
          this.isRefreshing = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Error refreshing users:', error);
          this.isRefreshing = false;
        }
      });
  }

  getRoleBadgeClass(roles: any[]): string {
    if (!roles || roles.length === 0) return 'bg-secondary-transparent';

    const roleNames = roles.map((role) => role.name);

    if (roleNames.includes('admin')) return 'bg-danger-transparent';
    if (roleNames.includes('manager')) return 'bg-warning-transparent';
    if (roleNames.includes('editor')) return 'bg-info-transparent';

    return 'bg-primary-transparent';
  }

  getRoleDisplayName(roles: any[]): string {
    if (!roles || roles.length === 0) return 'Usuario';

    const roleNames = roles.map((role) => role.name);

    if (roleNames.includes('admin')) return 'Administrador';
    if (roleNames.includes('manager')) return 'Manager';
    if (roleNames.includes('editor')) return 'Editor';

    return 'Usuario';
  }

  getAvatarUrl(user: User): string {
    // Intentar obtener imagen de profile_image
    if (user.profile?.profile_image) {
      const img = user.profile.profile_image;
      return this.normalizeImagePath(img);
    }

    // Avatar por defecto
    return './assets/images/media/icons/user-icon.png';
  }

  private normalizeImagePath(imagePath: string): string {
    // Si ya es una URL completa o ruta de assets
    if (
      imagePath.startsWith('http://') ||
      imagePath.startsWith('https://') ||
      imagePath.startsWith('./assets/') ||
      imagePath.startsWith('/assets/')
    ) {
      return imagePath;
    }

    // Si comienza con storage/
    if (imagePath.startsWith('storage/')) {
      return 'http://localhost:8000/' + imagePath;
    }

    // Asumir que es una ruta de almacenamiento de Laravel
    return 'http://localhost:8000/storage/' + imagePath;
  }

  getPhoneNumber(user: User): string {
    return user.profile?.phone_number || 'No registrado';
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }
}
