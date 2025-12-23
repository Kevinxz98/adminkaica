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

export class ChatbotService {
  private apiUrl = 'http://localhost:8000/api';
  private tokenKey = 'auth_token';
  private currentUserSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  private handleAuthResponse(response: AuthResponse) {
    localStorage.setItem(this.tokenKey, response.token);
    this.currentUserSubject.next(response.user);
  }

  private config: ChatbotConfig = {
    nombre: '',
    categoria: '',
    idioma: 'es',
    avatar: null,
    estilo: '',
    nivelTecnico: 50,
    usoEmojis: '',
    nombreEmpresa: '',
    sitioWeb: '',
    descripcionEmpresa: '',
    horarioAtencion: '',
    informacionAdicional: '',
    mensajeBienvenida: '',
    mensajeNoDisponible: '',
    mensajeAusencia: '',
    respuestasRapidas: [],
    canales: [],
    color: '',
    posicion: '',
    mostrarAvatar: false,
    sonidoNotificacion: false,
    tamanoWidget: '',
    whatsappBusiness: '',
    objetivoPrincipal: '',
    preguntasFrecuentes: '',
    temasExcluidos: '',
    datosCapturar: [],
    estadoActivacion: '',
  };

  getConfig(): ChatbotConfig {
    return this.config;
  }

  updateConfig(updates: Partial<ChatbotConfig>): void {
    this.config = { ...this.config, ...updates };
  }

  saveChatbot(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });

    return this.http.post(`${this.apiUrl}/chatbot`, formData, {headers});
  }

  loadMyAgents(): Observable<any[]> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });
    return this.http.get<any[]>(`${this.apiUrl}/my-agents`, { headers });
  }

  deleteAgent(public_key: string): Observable<any> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });
    return this.http.post<any>(`${this.apiUrl}/my-agents/${public_key}`, { headers });
  }

  toggleAgentStatus(public_key: string, formData: FormData): Observable<any> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });
    return this.http.post<any>(`${this.apiUrl}/my-agents/toggle-status/${public_key}`,formData, { headers });
  }

  getChatbotByPublicKey(public_key: string): Observable<any> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });
    return this.http.get<any>(`${this.apiUrl}/chatbot/${public_key}`, { headers });
  }   

  updateChatbot(public_key: string, formData: FormData): Observable<any> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });
    return this.http.post<any>(`${this.apiUrl}/chatbot/update/${public_key}`, formData, { headers });
  }
}
