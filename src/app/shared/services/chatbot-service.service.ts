import { Injectable } from '@angular/core';
import { ChatbotConfig } from '../../components/agents/wizard/wizard.model';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  private config: ChatbotConfig = {
    nombre: '',
    categoria: '',
    idioma: 'es',
    avatar: null,
    estilo: '',
    nivelTecnico: 50,
    usoEmojis: '',
    mensajeBienvenida: '',
    mensajeNoDisponible: '',
    mensajeAusencia: '',
    respuestasRapidas: [],
    canales: [],
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

  saveConfig(): void {
    // Aquí iría la lógica para guardar en backend
    console.log('Configuración guardada:', this.config);
  }
}
