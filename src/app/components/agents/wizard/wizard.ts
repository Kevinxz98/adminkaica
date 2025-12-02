import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { ChatbotConfig } from './wizard.model';
import { ChatbotService } from '../../../shared/services/chatbot-service.service';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import * as prismCodeData from '../../../shared/prismData/forms/file_uploads';
import * as FilePond from 'filepond';
import { AgentService } from '../../../shared/services/agent-service.service';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-wizard',
  imports: [SharedModule, CommonModule, ReactiveFormsModule, FilePondModule],
  templateUrl: './wizard.html',
  styleUrl: './wizard.scss',
})
export class Wizard implements OnInit {
  prismCode = prismCodeData;
  @ViewChild('myPond') myPond!: FilePondComponent;

  slug: string | null = null;
  agentName: string = '';
  currentStep = 1;
  totalSteps = 8;
  wizardForm!: FormGroup;
  public companyLogo: any = null;
  avatarUrl: string | null = null;

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
    { value: 'top-right', label: 'Esquina superior derecha', icon: '⬈' },
    { value: 'top-left', label: 'Esquina superior izquierda', icon: '⬉' },
  ];

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

  ngOnInit(): void {
    this.loadExistingData();
    this.getNameAgent();
  }

  getNameAgent() {
    if (this.slug) {
      this.agentService.getAgentBySlug(this.slug).subscribe((agent) => {
        this.agentName = agent.name;
        this.cdr.detectChanges();
      });
    }
  }

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

  pondHandleInit() {}

  pondHandleAddFile(event: any) {
    const file = event.file;

    // si subes al backend al instante
    this.companyLogo = file.getFileEncodeBase64String
      ? file.getFileEncodeBase64String()
      : file.file;

    if (file.getFileEncodeBase64String) {
      this.avatarUrl = 'data:image/png;base64,' + this.companyLogo;
    } else {

      this.avatarUrl = URL.createObjectURL(this.companyLogo);
    }
  }

  pondHandleActivateFile(event: any) {}

  createForm(): FormGroup {
    return this.fb.group({
      // Step 1
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      idioma: ['es', Validators.required],
      avatar: [null],

      //step 3
      nombreEmpresa: ['', Validators.required],
      sitioWeb: [''],
      descripcionEmpresa: [''],
      horarioAtencion: [''],
      informacionAdicional: [''],

      // Step 2
      estilo: ['', Validators.required],
      nivelTecnico: [50],
      usoEmojis: ['', Validators.required],

      // Step 4
      mensajeBienvenida: ['', Validators.required],
      mensajeNoDisponible: ['', Validators.required],
      mensajeAusencia: ['', Validators.required],
      respuestasRapidas: this.fb.array([]),

      // Step 5
      canales: this.fb.array([], Validators.required),
      color: ['#2196F3'],
      posicion: ['bottom-right'],
      mostrarAvatar: [false],
      sonidoNotificacion: [false],
      tamanoWidget: [''],
      whatsappBusiness: [''],

      // Step 6
      objetivoPrincipal: ['', Validators.required],
      preguntasFrecuentes: [''],
      temasExcluidos: [''],
      datosCapturar: this.fb.array([]),

      // Step 8
      estadoActivacion: ['', Validators.required],
    });
  }

  loadExistingData(): void {
    const existingData = this.chatbotService.getConfig();
    this.wizardForm.patchValue(existingData);
  }
  get respuestasRapidas(): FormArray {
    return this.wizardForm.get('respuestasRapidas') as FormArray;
  }

  get canalesArray(): FormArray {
    return this.wizardForm.get('canales') as FormArray;
  }

  get datosCapturarArray(): FormArray {
    return this.wizardForm.get('datosCapturar') as FormArray;
  }

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
      'top-right': 'Esquina superior derecha',
      'top-left': 'Esquina superior izquierda',
    };
    return posiciones[posicion] || posicion;
  }

  getAvatarUrl(): string {
    const avatar = this.wizardForm.get('avatar')?.value;
    if (avatar && typeof avatar !== 'string') {
      return URL.createObjectURL(avatar);
    }
    return avatar || '';
  }

  trackByIndex(index: number): number {
    return index;
  }

  probarChatbotDemo(): void {
    // Abre una ventana de demo interactiva
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

  generateWelcomeMessage(): void {
    const nombre = this.wizardForm.get('nombre')?.value || 'Chatbot';
    const nombreEmpresa =
      this.wizardForm.get('nombreEmpresa')?.value || 'con nosotros';
    const mensaje = `¡Hola! Soy ${nombre}, tu asistente virtual. ¿En qué puedo ayudarte hoy? 😊`;
    const mensajeNoDisponible = `¡Hola! Gracias por contactarnos. En este momento estamos fuera de la oficina. Te responderemos lo antes posible durante nuestro próximo horario de atención`;
    const mensajeAusencia = `¿Todavía estás disponible para continuar la conversación? Si necesitas más ayuda, no dudes en escribirme nuevamente. ¡Estoy aquí para ayudarte cuando lo necesites!`;
    this.wizardForm.patchValue({ mensajeBienvenida: mensaje });
    this.wizardForm.patchValue({ mensajeNoDisponible: mensajeNoDisponible });
    this.wizardForm.patchValue({ mensajeAusencia: mensajeAusencia });
  }

  addRespuestaRapida(): void {
    this.respuestasRapidas.push(this.fb.control(''));
  }

  removeRespuestaRapida(index: number): void {
    this.respuestasRapidas.removeAt(index);
  }

  onCanalChange(canal: string, isChecked: boolean): void {
    const canalesArray = this.canalesArray;
    if (isChecked) {
      canalesArray.push(this.fb.control(canal));
    } else {
      const index = canalesArray.controls.findIndex((x) => x.value === canal);
      canalesArray.removeAt(index);
    }
  }

  onDatoCapturarChange(dato: string, isChecked: boolean): void {
    const datosArray = this.datosCapturarArray;
    if (isChecked) {
      datosArray.push(this.fb.control(dato));
    } else {
      const index = datosArray.controls.findIndex((x) => x.value === dato);
      datosArray.removeAt(index);
    }
  }

  // Navegación
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

  onSubmit(): void {
    if (this.wizardForm.valid) {
      this.chatbotService.updateConfig(this.wizardForm.value);
      this.chatbotService.saveConfig();
      alert('Chatbot configurado exitosamente!');
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.wizardForm.patchValue({ avatar: file });
    }
  }

  // Getters para validación
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
        !!this.wizardForm.get('color')?.setValue('#2196F3');
        return true;
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
}
