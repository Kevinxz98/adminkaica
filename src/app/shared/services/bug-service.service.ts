import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

export interface BugReport {
  user_id: number;
  chatbot_id: number;
  name: string;
  email: string;
  issueDescription: string;
  stepsToReproduce: string;
}

@Injectable({
  providedIn: 'root',
})
export class BugService {
  private apiUrl = 'http://localhost:8000/api/report-bug';

  constructor(private http: HttpClient) {}

  createReport(data: FormData): Observable<BugReport> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });

    return this.http.post<BugReport>(this.apiUrl, data, { headers });
  }

}
