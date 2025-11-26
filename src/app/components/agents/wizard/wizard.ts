import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { ChatbotConfig } from './wizard.model';
import { ChatbotService } from '../../../shared/services/chatbot-service.service';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import * as prismCodeData from '../../../shared/prismData/forms/file_uploads'
import * as FilePond from 'filepond';


@Component({
  selector: 'app-wizard',
  imports: [SharedModule, CommonModule, ReactiveFormsModule, FilePondModule],
  templateUrl: './wizard.html',
  styleUrl: './wizard.scss',
})

export class Wizard implements OnInit {

  prismCode = prismCodeData;
  @ViewChild("myPond") myPond!: FilePondComponent;

  

  currentStep = 1;
  totalSteps = 7;
  wizardForm!: FormGroup;

  categorias = ['Ventas', 'Soporte', 'Reservas', 'Educación', 'Servicios profesionales', 'Otro'];
  estilos = ['Formal', 'Casual', 'Divertido', 'Profesional', 'Educativo'];
  usoEmojisOptions = ['Sí', 'No', 'Que los decida según contexto'];
  canales = ['Página web', 'WhatsApp Business', 'Facebook Messenger', 'Instagram DM', 'API'];
  objetivos = ['Generar ventas', 'Atender clientes', 'Reservas / agendamiento', 'Información rápida', 'FAQ', 'Todos los anteriores'];
  datosCapturarOptions = ['Nombre', 'Teléfono', 'Email', 'Otro campo'];
  estadosActivacion = ['Activar', 'Solo guardar', 'Guardar como borrador'];

  constructor(private fb: FormBuilder, private chatbotService: ChatbotService) {
    this.wizardForm = this.createForm();
    FilePond.registerPlugin(FilePondPluginImagePreview);
  }

  ngOnInit(): void {
    this.loadExistingData();
  }
  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: "Drop files here to Upload...",
  };
  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    stylePanelLayout: 'compact circle',
    labelIdle: "Drop files here to Upload...",
  };

  pondFiles: FilePond.FilePondOptions["files"] = [

  ];

  pondHandleInit() {
  }

  pondHandleAddFile(event: any) {
    console.log('File added:', event);
    
  }

  pondHandleActivateFile(event: any) {
  }

  
   createForm(): FormGroup {
    return this.fb.group({
      // Step 1
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      idioma: ['es', Validators.required],
      avatar: [null],
      
      // Step 2
      estilo: ['', Validators.required],
      nivelTecnico: [50],
      usoEmojis: ['', Validators.required],
      
      // Step 3
      mensajeBienvenida: ['', Validators.required],
      mensajeNoDisponible: ['', Validators.required],
      mensajeAusencia: ['', Validators.required],
      respuestasRapidas: this.fb.array([]),
      
      // Step 4
      canales: this.fb.array([], Validators.required),
      whatsappBusiness: [''],
      
      // Step 5
      objetivoPrincipal: ['', Validators.required],
      preguntasFrecuentes: [''],
      temasExcluidos: [''],
      datosCapturar: this.fb.array([]),
      
      // Step 7
      estadoActivacion: ['', Validators.required]
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
      const index = canalesArray.controls.findIndex(x => x.value === canal);
      canalesArray.removeAt(index);
    }
  }

  onDatoCapturarChange(dato: string, isChecked: boolean): void {
    const datosArray = this.datosCapturarArray;
    if (isChecked) {
      datosArray.push(this.fb.control(dato));
    } else {
      const index = datosArray.controls.findIndex(x => x.value === dato);
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
        return !!this.wizardForm.get('nombre')?.valid && 
               !!this.wizardForm.get('categoria')?.valid;
      case 2:
        return !!this.wizardForm.get('estilo')?.valid && 
               !!this.wizardForm.get('usoEmojis')?.valid;
      case 3:
        return !!this.wizardForm.get('mensajeBienvenida')?.valid;
      case 4:
        return !!this.wizardForm.get('canales')?.valid;
      case 5:
        return !!this.wizardForm.get('objetivoPrincipal')?.valid;
      case 7:
        return !!this.wizardForm.get('estadoActivacion')?.valid;
      default:
        return true;
    }
  }
}
