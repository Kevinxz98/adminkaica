import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { ChatbotConfig } from './wizard.model';
import { ChatbotService } from '../../../shared/services/chatbot-service.service';
import { AgentService } from '../../../shared/services/agent-service.service';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import * as FilePond from 'filepond';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import * as prismCodeData from '../../../shared/prismData/forms/file_uploads';

@Component({
  selector: 'app-wizard',
  imports: [SharedModule, CommonModule, ReactiveFormsModule, FilePondModule],
  templateUrl: './wizard.html',
  styleUrl: './wizard.scss',
})
export class Wizard implements OnInit {
  // Propiedades del componente
  @ViewChild('myPond') myPond!: FilePondComponent;

  // Configuración y estado
  prismCode = prismCodeData;
  slug: string | null = null;
  agentName: string = '';
  currentStep = 1;
  totalSteps = 8;
  wizardForm!: FormGroup;
  companyLogo: any = null;
  avatarUrl: string | null = null;
  isChatOpen = true;
  isSubmitting = false;
  submitError = '';
  submitSuccess = false;
  chatbotId: number | null = null;

  // Opciones de formulario
  categorias = [
    'Ventas',
    'Soporte',
    'Reservas',
    'Educación',
    'Servicios profesionales',
    'Otro',
  ];
  estilos = ['Formal', 'Casual', 'Divertido', 'Profesional', 'Educativo'];
  usoEmojisOptions = ['Sí', 'No', 'Que los decida según contexto'];
  canales = [
    'Página web',
    'WhatsApp Business',
    'Facebook Messenger',
    'Instagram DM',
    'API',
  ];
  objetivos = [
    'Generar ventas',
    'Atender clientes',
    'Reservas / agendamiento',
    'Información rápida',
    'FAQ',
    'Todos los anteriores',
  ];
  datosCapturarOptions = ['Nombre', 'Teléfono', 'Email', 'Otro campo'];
  estadosActivacion = ['Activar', 'Solo guardar', 'Guardar como borrador'];
  posicionesWidget = [
    { value: 'bottom-right', label: 'Esquina inferior derecha', icon: '⬊' },
    { value: 'bottom-left', label: 'Esquina inferior izquierda', icon: '⬋' },
  ];

  // Configuración de FilePond
  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: 'Drop files here to Upload...',
  };
  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    stylePanelLayout: 'compact circle',
    labelIdle: 'Drop files here to Upload...',
  };
  pondFiles: FilePond.FilePondOptions['files'] = [];

  constructor(
    private fb: FormBuilder,
    private chatbotService: ChatbotService,
    private renderer: Renderer2,
    private agentService: AgentService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    this.wizardForm = this.createForm();
    FilePond.registerPlugin(FilePondPluginImagePreview);
    this.slug = this.route.snapshot.paramMap.get('slug');
  }

  // ==================== LIFECYCLE METHODS ====================
  ngOnInit(): void {
    this.loadExistingData();
    this.getNameAgent();
  }

  // ==================== INICIALIZACIÓN ====================
  getNameAgent(): void {
    if (!this.slug) return;

    this.agentService.getAgentBySlug(this.slug).subscribe({
      next: (agent) => {
        this.agentName = agent.name;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al obtener el agente:', error);
      },
    });
  }

  loadExistingData(): void {
    const existingData = this.chatbotService.getConfig();
    this.wizardForm.patchValue(existingData);
  }

  // ==================== CREACIÓN DE FORMULARIO ====================
  createForm(): FormGroup {
    return this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      idioma: ['es', Validators.required],
      avatar: [null],
      nombreEmpresa: ['', Validators.required],
      sitioWeb: [''],
      descripcionEmpresa: [''],
      horarioAtencion: [''],
      informacionAdicional: [''],
      estilo: ['', Validators.required],
      nivelTecnico: [50],
      usoEmojis: ['', Validators.required],
      mensajeBienvenida: ['', Validators.required],
      mensajeNoDisponible: ['', Validators.required],
      mensajeAusencia: ['', Validators.required],
      respuestasRapidas: this.fb.array([]),
      color: ['', Validators.required],
      posicion: ['bottom-right'],
      mostrarAvatar: [false],
      sonidoNotificacion: [false],
      tamanoWidget: [''],
      objetivoPrincipal: ['', Validators.required],
      preguntasFrecuentes: [''],
      temasExcluidos: [''],
      datosCapturar: this.fb.array([]),
      estadoActivacion: ['', Validators.required],
    });
  }

  // ==================== GETTERS DE FORMARRAY ====================
  get respuestasRapidas(): FormArray {
    return this.wizardForm.get('respuestasRapidas') as FormArray;
  }

  get canalesArray(): FormArray {
    return this.wizardForm.get('canales') as FormArray;
  }

  get datosCapturarArray(): FormArray {
    return this.wizardForm.get('datosCapturar') as FormArray;
  }

  // ==================== MANEJO DE ARCHIVOS ====================
  pondHandleInit(): void {
    // Inicialización de FilePond
  }

  pondHandleAddFile(event: any): void {
    const file = event.file;
    const fileObject = file.file;

    this.wizardForm.patchValue({ avatar: fileObject });

    this.companyLogo = file.getFileEncodeBase64String
      ? file.getFileEncodeBase64String()
      : file.file;

    if (file.getFileEncodeBase64String) {
      this.avatarUrl = 'data:image/png;base64,' + this.companyLogo;
    } else {
      this.avatarUrl = URL.createObjectURL(this.companyLogo);
    }
  }

  pondHandleActivateFile(event: any): void {
    // Activación de archivo
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.wizardForm.patchValue({ avatar: file });
    }
  }

  // ==================== MANEJO DE DATOS ====================
  getIdiomaNombre(codigo: string): string {
    const idiomas: { [key: string]: string } = {
      es: 'Español',
      en: 'Inglés',
      fr: 'Francés',
      de: 'Alemán',
      pt: 'Portugués',
      it: 'Italiano',
    };
    return idiomas[codigo] || codigo;
  }

  getColorNombre(hexColor: string): string {
    const colores: { [key: string]: string } = {
      '#2196F3': 'Azul',
      '#4CAF50': 'Verde',
      '#FF9800': 'Naranja',
      '#9C27B0': 'Púrpura',
      '#F44336': 'Rojo',
      '#607D8B': 'Gris',
    };
    return colores[hexColor] || 'Personalizado';
  }

  getPosicionNombre(posicion: string): string {
    const posiciones: { [key: string]: string } = {
      'bottom-right': 'Esquina inferior derecha',
      'bottom-left': 'Esquina inferior izquierda',
    };
    return posiciones[posicion] || posicion;
  }

  trackByIndex(index: number): number {
    return index;
  }

  // ==================== MANEJO DE RESPUESTAS RÁPIDAS ====================
  addRespuestaRapida(): void {
    this.respuestasRapidas.push(this.fb.control(''));
  }

  removeRespuestaRapida(index: number): void {
    this.respuestasRapidas.removeAt(index);
  }

  // ==================== MANEJO DE CHECKBOXES ====================
  onCanalChange(canal: string, isChecked: boolean): void {
    const canalesArray = this.canalesArray;
    if (isChecked) {
      canalesArray.push(this.fb.control(canal));
    } else {
      const index = canalesArray.controls.findIndex((x) => x.value === canal);
      if (index !== -1) {
        canalesArray.removeAt(index);
      }
    }
  }

  onDatoCapturarChange(dato: string, isChecked: boolean): void {
    const datosArray = this.datosCapturarArray;
    if (isChecked) {
      datosArray.push(this.fb.control(dato));
    } else {
      const index = datosArray.controls.findIndex((x) => x.value === dato);
      if (index !== -1) {
        datosArray.removeAt(index);
      }
    }
  }

  // ==================== GENERACIÓN DE MENSAJES ====================
  generateWelcomeMessage(): void {
    const nombre = this.wizardForm.get('nombre')?.value || 'Chatbot';
    const mensaje = `¡Hola! Soy ${nombre}, tu asistente virtual. ¿En qué puedo ayudarte hoy? 😊`;
    const mensajeNoDisponible = `¡Hola! Gracias por contactarnos. En este momento estamos fuera de la oficina. Te responderemos lo antes posible durante nuestro próximo horario de atención`;
    const mensajeAusencia = `¿Todavía estás disponible para continuar la conversación? Si necesitas más ayuda, no dudes en escribirme nuevamente. ¡Estoy aquí para ayudarte cuando lo necesites!`;

    this.wizardForm.patchValue({
      mensajeBienvenida: mensaje,
      mensajeNoDisponible: mensajeNoDisponible,
      mensajeAusencia: mensajeAusencia,
    });
  }

  // ==================== NAVEGACIÓN ====================
  nextStep(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
      this.saveProgress();
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  goToStep(step: number): void {
    if (step >= 1 && step <= this.totalSteps) {
      this.currentStep = step;
    }
  }

  saveProgress(): void {
    this.chatbotService.updateConfig(this.wizardForm.value);
  }

  // ==================== MANEJO DEL CHAT ====================
  closeChat(): void {
    this.isChatOpen = false;
    const widget = document.querySelector(
      '.chatbot-widget'
    ) as HTMLElement | null;

    if (widget) {
      widget.style.animation = 'widgetClose 0.3s ease-out forwards';
      setTimeout(() => {
        widget.style.display = 'none';
      }, 300);
    }
  }

  openChat(): void {
    this.isChatOpen = true;
    const widget = document.querySelector(
      '.chatbot-widget'
    ) as HTMLElement | null;

    if (widget) {
      widget.style.animation = 'widgetClose 0.3s ease-out forwards';
      setTimeout(() => {
        widget.style.display = 'flex';
      }, 300);
    }
  }

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;

    if (this.isChatOpen) {
      this.animarAperturaChat();
    } else {
      this.animarCierreChat();
    }
  }

  private animarCierreChat(): void {
    const widget = document.querySelector('.chatbot-widget') as HTMLElement;
    if (widget) {
      widget.style.transform = 'translateY(100%) scale(0.8)';
      widget.style.opacity = '0';
      widget.style.display = 'none';
    }
  }

  private animarAperturaChat(): void {
    const widget = document.querySelector(
      '.chatbot-widget'
    ) as HTMLElement | null;
    if (widget) {
      widget.style.display = 'flex';
      widget.style.transform = 'translateY(0) scale(1)';
      widget.style.opacity = '1';
    }
  }

  // ==================== SUBMIT Y PREPARACIÓN DE DATOS ====================
  onSubmit(): void {
    if (this.wizardForm.valid) {
      this.isSubmitting = true;
      this.submitError = '';

      const formData = this.prepareFormData();
      console.log(formData.get('color'));
      //this.chatbotService.updateConfig(this.wizardForm.value);
      //this.sendToBackend(formData);
    }
  }

  private prepareFormData(): FormData {
    const formData = new FormData();
    const formValue = this.wizardForm.value;

    // Información básica
    formData.append('nombre', formValue.nombre || '');
    formData.append('categoria', formValue.categoria || '');
    formData.append('idioma', formValue.idioma || 'es');

    // Avatar
    if (formValue.avatar instanceof File) {
      formData.append('avatar', formValue.avatar);
    } else if (typeof formValue.avatar === 'string') {
      formData.append('avatar_url', formValue.avatar);
    }

    // Configuración de estilo
    formData.append('estilo', formValue.estilo || '');
    formData.append('nivelTecnico', formValue.nivelTecnico?.toString() || '50');
    formData.append('usoEmojis', formValue.usoEmojis || '');

    // Información de la empresa
    formData.append('nombreEmpresa', formValue.nombreEmpresa || '');
    formData.append('sitioWeb', formValue.sitioWeb || '');
    formData.append('descripcionEmpresa', formValue.descripcionEmpresa || '');
    formData.append('horarioAtencion', formValue.horarioAtencion || '');
    formData.append(
      'informacionAdicional',
      formValue.informacionAdicional || ''
    );

    // Mensajes
    formData.append('mensajeBienvenida', formValue.mensajeBienvenida || '');
    formData.append('mensajeNoDisponible', formValue.mensajeNoDisponible || '');
    formData.append('mensajeAusencia', formValue.mensajeAusencia || '');
    formData.append('color', formValue.color || '#2196F3');

    // Respuestas rápidas
    if (
      formValue.respuestasRapidas &&
      Array.isArray(formValue.respuestasRapidas)
    ) {
      const respuestasFiltradas = (
        formValue.respuestasRapidas as string[]
      ).filter((r: string) => r);
      formData.append('respuestasRapidas', JSON.stringify(respuestasFiltradas));
    }

    formData.append('posicion', formValue.posicion || 'bottom-right');
    formData.append('mostrarAvatar', formValue.mostrarAvatar ? '1' : '0');
    formData.append(
      'sonidoNotificacion',
      formValue.sonidoNotificacion ? '1' : '0'
    );
    formData.append('tamanoWidget', formValue.tamanoWidget || 'mediano');

    // Configuración avanzada
    formData.append('objetivoPrincipal', formValue.objetivoPrincipal || '');
    formData.append('preguntasFrecuentes', formValue.preguntasFrecuentes || '');
    formData.append('temasExcluidos', formValue.temasExcluidos || '');

    // Datos a capturar
    if (formValue.datosCapturar && formValue.datosCapturar.length) {
      formValue.datosCapturar.forEach((dato: string, index: number) => {
        formData.append(`datosCapturar[${index}]`, dato);
      });
    }

    formData.append('estadoActivacion', formValue.estadoActivacion || '');

    return formData;
  }

  sendToBackend(formData: FormData): void {
    this.chatbotService.saveChatbot(formData).subscribe({
      next: (response) => {
        this.handleSuccess(response);
        this.chatbotId = response.data?.id || null;
      },
      error: (error) => {
        this.handleError(error);
      },
    });
  }

  private handleSuccess(response: any): void {
    this.isSubmitting = false;
    this.submitSuccess = true;
    alert('Chatbot creado correctamente');
  }

  private handleError(error: any): void {
    this.isSubmitting = false;
    this.submitError = 'Error al guardar el chatbot';
    console.error('Error al guardar el chatbot:', error);
  }

  // ==================== VALIDACIONES ====================
  getCamposFaltantes(): string {
    const camposFaltantes: string[] = [];

    // Step 1
    if (!this.wizardForm.get('nombre')?.valid)
      camposFaltantes.push('Nombre del chatbot');
    if (!this.wizardForm.get('categoria')?.valid)
      camposFaltantes.push('Categoría');

    // Step 2
    if (!this.wizardForm.get('estilo')?.valid)
      camposFaltantes.push('Estilo de comunicación');
    if (!this.wizardForm.get('usoEmojis')?.valid)
      camposFaltantes.push('Uso de emojis');

    // Step 3
    if (!this.wizardForm.get('nombreEmpresa')?.valid)
      camposFaltantes.push('Nombre de la empresa');
    if (!this.wizardForm.get('descripcionEmpresa')?.valid)
      camposFaltantes.push('Descripción de la empresa');

    // Step 5
    if (!this.wizardForm.get('mensajeBienvenida')?.valid)
      camposFaltantes.push('Mensaje de bienvenida');

    // Step 6
    if (!this.wizardForm.get('objetivoPrincipal')?.valid)
      camposFaltantes.push('Objetivo principal');

    // Step 8
    if (!this.wizardForm.get('estadoActivacion')?.valid)
      camposFaltantes.push('Estado de activación');

    if (camposFaltantes.length === 0) {
      return 'Todos los campos están completos ✅';
    }

    return `Campos requeridos faltantes:\n${camposFaltantes.join('\n')}`;
  }

  isStepValid(step: number): boolean {
    switch (step) {
      case 1:
        return (
          !!this.wizardForm.get('nombre')?.valid &&
          !!this.wizardForm.get('categoria')?.valid
        );
      case 2:
        return !!this.wizardForm.get('nombreEmpresa')?.valid;
      case 3:
        return !!this.wizardForm.get('estilo')?.valid;
      case 4:
        return !!this.wizardForm.get('mensajeBienvenida')?.valid;
      case 5:
        return !!this.wizardForm.get('color')?.valid;
      case 6:
        return !!this.wizardForm.get('objetivoPrincipal')?.valid;
      case 7:
        return true;
      case 8:
        return !!this.wizardForm.get('estadoActivacion')?.valid;
      default:
        return true;
    }
  }

  // ==================== UTILIDADES ====================
  probarChatbotDemo(): void {
    alert(
      '🚀 Demo interactiva del chatbot (en una implementación real, esto abriría una ventana de prueba)'
    );
  }

  descargarConfiguracion(): void {
    const config = this.wizardForm.value;
    const configStr = JSON.stringify(config, null, 2);
    const blob = new Blob([configStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `config-chatbot-${config.nombre || 'mi-chatbot'}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }
}
