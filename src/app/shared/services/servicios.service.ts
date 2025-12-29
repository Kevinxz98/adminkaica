import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

interface AuthResponse {
  message: string;
  token: string;
  user: any;
  roles: string[];
}

export interface Service {
  id?: number;
  name: string;
  description: string;
  lead: string;
  image?: string;
  price: number;
  features?: string[];
  price_monthly: number;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class Servicios {
  private apiUrl = 'https://backend.kaica.co/public/api/services';
  private tokenKey = 'auth_token';
  private currentUserSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  private handleAuthResponse(response: AuthResponse) {
    localStorage.setItem(this.tokenKey, response.token);
    this.currentUserSubject.next(response.user);
  }

  getServices(): Observable<Service[]> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });

    return this.http.get<Service[]>(this.apiUrl, { headers });
  }

  getServiceById(id: number): Observable<Service> {
    return this.http.get<Service>(`${this.apiUrl}/${id}`);
  }

  createService(data: FormData): Observable<any> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });

    return this.http.post<any>(this.apiUrl, data, { headers });
  }

  updateService(id: number, data: FormData): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/update/${id}?_method=PUT`, data)
      .pipe(
        tap({
          next: (res) => console.log('Respuesta del servidor:', res),
          error: (err) => console.error('Error del servidor:', err),
        })
      );
  }

  deleteService(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


}
