export interface ChatbotConfig {
  // Step 1 - Información General
  nombre: string;
  categoria: string;
  idioma: string;
  avatar: File | null;
  
  // Step 2 - Tono y Personalidad
  estilo: string;
  nivelTecnico: number;
  usoEmojis: string;

  nombreEmpresa: string;
  sitioWeb: string;
  descripcionEmpresa: string;
  horarioAtencion: string;
  informacionAdicional: string;
  
  // Step 3 - Mensajes Automáticos
  mensajeBienvenida: string;
  mensajeNoDisponible: string;
  mensajeAusencia: string;
  respuestasRapidas: string[];
  
  // Step 4 - Canales de comunicación
  canales: string[];
  color: string
  posicion: string
  mostrarAvatar: boolean;
  sonidoNotificacion: boolean;
  tamanoWidget: string;
  whatsappBusiness: string;
  
  // Step 5 - Inteligencia / Configuración Smart
  objetivoPrincipal: string;
  preguntasFrecuentes: string;
  temasExcluidos: string;
  datosCapturar: string[];
  
  // Step 7 - Confirmación
  estadoActivacion: string;
}