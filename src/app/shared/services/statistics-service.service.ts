import { Injectable } from '@angular/core';
import { ChatbotConfig } from '../../components/agents/wizard/wizard.model';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface AuthResponse {
  message: string;
  token: string;
  user: any;
  roles: string[];
}

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
   private apiUrl = 'http://localhost:8000/api';
    private tokenKey = 'auth_token';
    private currentUserSubject = new BehaviorSubject<any>(null);
    currentUser$ = this.currentUserSubject.asObservable();
  
    constructor(private http: HttpClient) {}
  
    private handleAuthResponse(response: AuthResponse) {
      localStorage.setItem(this.tokenKey, response.token);
      this.currentUserSubject.next(response.user);
    }
  
    getStatisticsData(): Observable<any> {
      const headers = new HttpHeaders({
        Accept: 'application/json',
      });
      return this.http.get<any>(`${this.apiUrl}/statistics`, { headers });
    }

    getBasicStats(public_key: string): Observable<any> {
      const headers = new HttpHeaders({
        Accept: 'application/json',
      });
      return this.http.get<any>(`${this.apiUrl}/statistics/${public_key}/basic-stats`, { headers });
    }

    getStatsbyDates(startDate: string, endDate: string): Observable<any> {
      const headers = new HttpHeaders({
        Accept: 'application/json',
      });
      return this.http.get<any>(`${this.apiUrl}/statistics?start_date=${startDate}&end_date=${endDate}`, { headers });
    }

    getSevenDaysStats(public_key: string): Observable<any> {
      const headers = new HttpHeaders({
        Accept: 'application/json',
      });
      return this.http.get<any>(`${this.apiUrl}/statistics/${public_key}/seven-days`, { headers });
    }

    getStatisticsForAgent(public_key: string): Observable<any> {
      const headers = new HttpHeaders({
        Accept: 'application/json',
      });
      return this.http.get<any>(`${this.apiUrl}/statistics/${public_key}`, { headers });
    }
}
