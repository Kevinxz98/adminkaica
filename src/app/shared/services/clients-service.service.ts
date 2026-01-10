import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

interface AuthResponse {
  message: string;
  token: string;
  user: any;
  roles: string[];
}
export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  profile: UserProfile | null;
  roles: Role[];
  permissions: Permission[];
  chatbots_count: number;
  created_at: string;
  updated_at: string;
}

export interface UserProfile {
  language: string;
  timezone: string;
  email_notifications: boolean;
  id: number;
  phone_number: string;
  is_two_factor_enabled: boolean;
  profile_image: string;
  bio: string;
  created_at: string;
  updated_at: string;
}

export interface Role {
  id: number;
  name: string;
  guard_name: string;
}

export interface Permission {
  id: number;
  name: string;
  guard_name: string;
}

export interface UsersResponse {
  success: boolean;
  data: User[];
  meta: {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    last_page: number;
    from: number;
    to: number;
  };
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
}

export interface UserStatistics {
  success: boolean;
  data: {
    total: number;
    verified: number;
    admins: number;
    today: number;
    this_week: number;
    this_month: number;
  };
}

export interface MinimalUser {
  id: number;
  name: string;
  email: string;
  display_name: string;
}

export interface UserDetails extends User {
  chatbots?: Chatbot[];
  last_login?: string;
  last_login_ip?: string;
  activity_logs?: any[];
}

export interface Chatbot {
  id: number;
  user_id: number;
  nombre: string;
  nombreEmpresa?: string;
  objetivoPrincipal?: string;
  avatar?: string;
  color?: string;
  public_key: string;
  Status: string;
  created_at: string;
  updated_at: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private apiUrl = 'http://localhost:8000/api/admin';
  private tokenKey = 'auth_token';

  // Almacenar todos los usuarios en memoria
  private allUsers: User[] = [];
  private usersLoaded = false;

  // Subjects para comunicación reactiva
  private filteredUsersSubject = new BehaviorSubject<User[]>([]);
  private paginatedUsersSubject = new BehaviorSubject<{
    users: User[];
    pagination: PaginationInfo;
  }>({ users: [], pagination: this.getDefaultPagination() });

  // Observables públicos
  filteredUsers$ = this.filteredUsersSubject.asObservable();
  paginatedUsers$ = this.paginatedUsersSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Cargar TODOS los usuarios una sola vez
  loadAllUsers(forceRefresh = false): Observable<User[]> {
    if (this.usersLoaded && !forceRefresh && this.allUsers.length > 0) {
      return of(this.allUsers);
    }

    return this.http
      .get<UsersResponse>(`${this.apiUrl}/clients`, {
        params: { per_page: -1, with: 'profile,roles,permissions,chatbots' },
      })
      .pipe(
        map((response) => {
          if (response.success) {
            this.allUsers = response.data;
            this.usersLoaded = true;
            this.filteredUsersSubject.next(this.allUsers);
            this.applyPagination(this.allUsers, 1, 10);
            return this.allUsers;
          }
          throw new Error('Error al cargar usuarios');
        })
      );
  }

  // Filtrar usuarios en frontend
  filterUsers(
    filters: {
      searchTerm?: string;
      roles?: string[];
      verified?: boolean | null;
      sortBy?: string;
      sortOrder?: 'asc' | 'desc';
    } = {}
  ): void {
    let filtered = [...this.allUsers];

    // Búsqueda por texto
    if (filters.searchTerm && filters.searchTerm.trim() !== '') {
      const searchLower = filters.searchTerm.toLowerCase().trim();
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(searchLower) ||
          user.email.toLowerCase().includes(searchLower) ||
          (user.profile?.phone_number?.toLowerCase() || '').includes(
            searchLower
          ) ||
          this.userHasRole(user, searchLower) ||
          this.userHasPermission(user, searchLower)
      );
    }

    // Filtrar por roles
    if (filters.roles && filters.roles.length > 0) {
      filtered = filtered.filter((user) =>
        user.roles.some((role) => filters.roles!.includes(role.name))
      );
    }

    // Filtrar por verificación
    if (filters.verified !== null && filters.verified !== undefined) {
      filtered = filtered.filter((user) =>
        filters.verified
          ? user.email_verified_at !== null
          : user.email_verified_at === null
      );
    }

    // Ordenar
    if (filters.sortBy) {
      filtered = this.sortUsers(
        filtered,
        filters.sortBy,
        filters.sortOrder || 'asc'
      );
    }

    this.filteredUsersSubject.next(filtered);
    this.applyPagination(filtered, 1, 10); // Resetear a página 1
  }

  // Aplicar paginación
  applyPagination(users: User[], page: number, pageSize: number): void {
    const total = users.length;
    const pages = Math.ceil(total / pageSize);

    // Validar página
    const validPage = Math.max(1, Math.min(page, pages));

    // Calcular índices
    const startIndex = (validPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, total);

    // Obtener usuarios paginados
    const paginatedUsers = users.slice(startIndex, endIndex);

    const paginationInfo: PaginationInfo = {
      currentPage: validPage,
      pageSize: pageSize,
      totalItems: total,
      totalPages: pages,
      hasNextPage: validPage < pages,
      hasPrevPage: validPage > 1,
      startIndex: startIndex + 1,
      endIndex: endIndex,
    };

    this.paginatedUsersSubject.next({
      users: paginatedUsers,
      pagination: paginationInfo,
    });
  }

  // Métodos auxiliares
  private userHasRole(user: User, searchTerm: string): boolean {
    return user.roles.some((role) =>
      role.name.toLowerCase().includes(searchTerm)
    );
  }

  private userHasPermission(user: User, searchTerm: string): boolean {
    return user.permissions.some((permission) =>
      permission.name.toLowerCase().includes(searchTerm)
    );
  }

  private sortUsers(
    users: User[],
    sortBy: string,
    sortOrder: 'asc' | 'desc'
  ): User[] {
    return [...users].sort((a, b) => {
      let valueA: any;
      let valueB: any;

      switch (sortBy) {
        case 'name':
          valueA = a.name.toLowerCase();
          valueB = b.name.toLowerCase();
          break;
        case 'email':
          valueA = a.email.toLowerCase();
          valueB = b.email.toLowerCase();
          break;
        case 'created_at':
          valueA = new Date(a.created_at).getTime();
          valueB = new Date(b.created_at).getTime();
          break;
        case 'chatbots_count':
          valueA = a.chatbots_count;
          valueB = b.chatbots_count;
          break;
        case 'role':
          valueA = a.roles[0]?.name || '';
          valueB = b.roles[0]?.name || '';
          break;
        default:
          valueA = a[sortBy as keyof User];
          valueB = b[sortBy as keyof User];
      }

      if (sortOrder === 'asc') {
        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
      } else {
        return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
      }
    });
  }

  private getDefaultPagination(): PaginationInfo {
    return {
      currentPage: 1,
      pageSize: 10,
      totalItems: 0,
      totalPages: 0,
      hasNextPage: false,
      hasPrevPage: false,
      startIndex: 0,
      endIndex: 0,
    };
  }

  // Obtener usuario por ID (rápido desde memoria)
  getUserById(id: number): User | undefined {
    return this.allUsers.find((user) => user.id === id);
  }

  // Obtener estadísticas (mantén igual)
  getStatistics(): Observable<UserStatistics> {
    return this.http.get<UserStatistics>(`${this.apiUrl}/statistics`);
  }

  getBasicStats(public_key: string): Observable<any> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });
    return this.http.get<any>(`${this.apiUrl}/agent/statistics/${public_key}/basic-stats`, { headers });
  }

  getStatisticsData(): Observable<any> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });
    return this.http.get<any>(`${this.apiUrl}/agent/statistics`, { headers });
  }

  getSevenDaysStats(public_key: string): Observable<any> {
      const headers = new HttpHeaders({
        Accept: 'application/json',
      });
      return this.http.get<any>(`${this.apiUrl}/agent/statistics/${public_key}/seven-days`, { headers });
    }

  // Refrescar datos desde backend
  refreshUsers(): Observable<User[]> {
    return this.loadAllUsers(true);
  }

  getUserDetails(id: number): Observable<UserDetails> {
    return this.http
      .get<any>(`${this.apiUrl}/clients/${id}`, {
        params: { with: 'profile,roles,permissions,chatbots' },
      })
      .pipe(
        map((response) => {
          if (response.success) {
            return response.data;
          }
          throw new Error('Error al obtener usuario');
        })
      );
  }
}

// Nueva interfaz para paginación en frontend
export interface PaginationInfo {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  startIndex: number;
  endIndex: number;
}
