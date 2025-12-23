import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

interface AuthResponse {
  message: string;
  token: string;
  user: any;
  roles: string[];
}

@Injectable({
  providedIn: 'root',
})
export class AgentService {
  private apiUrl = 'http://localhost:8000/api/agents';
  private tokenKey = 'auth_token';
  private currentUserSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  private handleAuthResponse(response: AuthResponse) {
    localStorage.setItem(this.tokenKey, response.token);
    this.currentUserSubject.next(response.user);
  }

  getAgents(): Observable<any[]> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });

    return this.http.get<any[]>(this.apiUrl, { headers });
  }

  getAgentBySlug(slug: string): Observable<any> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });
    return this.http.get<any>(`${this.apiUrl}/${slug}`, { headers });
  }

  
}
