import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { of } from 'rxjs';

interface RegisterData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface AuthResponse {
  message: string;
  token: string;
  user: any;
  roles: string[];
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private sessionChecked = false;
  private apiUrl = 'http://localhost:8000/api/auth'; // Replace with your API URL
  private tokenKey = 'auth_token';
  private currentUserSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) {
    const savedToken = localStorage.getItem(this.tokenKey);
    if (savedToken) {
      this.loadUser();
    }
    
  }

  loadUser(): void {
    if (!this.isLoggedIn()) {
      this.currentUserSubject.next(null);
      return;
    }
    
    // Si ya tenemos usuario, no hacemos nada
    if (this.getCurrentUser()) {
      return;
    }
    
    this.loadingSubject.next(true);
    this.fetchUser().subscribe({
      next: (user) => {
        this.currentUserSubject.next(user);
        this.loadingSubject.next(false);
      },
      error: (error) => {
        console.error('Error cargando usuario:', error);
        // Si hay error (token inválido), limpiamos
        if (error.status === 401) {
          this.logout(); // Esto limpiará el localStorage
        }
        this.loadingSubject.next(false);
      }
    });
  }

  register(data: RegisterData): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/register`, data)
      .pipe(tap((response) => this.handleAuthResponse(response)));
  }

  login(data: LoginData): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/login`, data)
      .pipe(tap((response) => this.handleAuthResponse(response)));
  }

  logout(): Observable<any> {
    this.sessionChecked = false;
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/logout`, {}, { headers }).pipe(
      tap(() => {
        localStorage.removeItem(this.tokenKey);
        this.currentUserSubject.next(null);
      })
    );
  }

  fetchUser(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http
      .get<any>(`${this.apiUrl}/me`, { headers })
      .pipe(tap((user) => this.currentUserSubject.next(user)));
  }

  getCurrentUser() {
    return this.currentUserSubject.getValue();
  }

  getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem(this.tokenKey);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  private handleAuthResponse(response: AuthResponse) {
    localStorage.setItem(this.tokenKey, response.token);
    this.currentUserSubject.next(response.user);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('auth_token');
    return !!token; // true si hay token, false si no
  }

  checkSession() {
    const headers = this.getAuthHeaders();

    if (this.sessionChecked) {
      // Ya validamos, no molestamos al backend otra vez
      return of(true);
    }

    return this.http.get(`${this.apiUrl}/check`, { headers }).pipe(
      tap(() => this.sessionChecked = true)
    );
  }

  getUserState() {
    return {
      isLoggedIn: this.isLoggedIn(),
      user: this.getCurrentUser(),
      isLoading: this.loadingSubject.getValue()
    };
  }

}
