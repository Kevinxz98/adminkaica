import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import {
  FormsModule,
  FormBuilder,
  FormArray,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Servicios } from '../../../shared/services/servicios.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { QuillModule } from 'ngx-quill';
import Quill from 'quill'; // Import Quill

@Component({
  selector: 'app-new-service',
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    QuillModule,
  ],
  providers: [{ provide: ToastrService, useClass: ToastrService }],
  templateUrl: './new-service.html',
  styleUrls: ['./new-service.scss'],
})
export class NewService {
  serviceForm: FormGroup;
  selectedFile: File | null = null;

  editor: any;

  modules = {
    //formula: true,
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }],

      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],

      ['clean'],

      ['link', 'image', 'video'],
    ],
    resizeByg: {  
      displaySize: true
    }
  };

  constructor(
    private fb: FormBuilder,
    private serviciosService: Servicios,
    private toastr: ToastrService
  ) {
    this.serviceForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      lead: ['', Validators.required],
      image: [''],
      price_monthly: ['', Validators.required],
      features: this.fb.array([this.fb.control('')]),
    });

  }

  get features() {
    return this.serviceForm.get('features') as FormArray;
  }

  onEditorCreated(editor: any) {
    this.editor = editor;
  }

  addFeature() {
    this.features.push(this.fb.control(''));
  }

  removeFeature(i: number) {
    this.features.removeAt(i);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  saveService() {
    if (this.serviceForm.invalid) {
      const invalidFields = Object.keys(this.serviceForm.controls)
        .filter((key) => this.serviceForm.get(key)?.invalid)
        .map((key) => {
          switch (key) {
            case 'name':
              return 'Nombre del servicio';
            case 'description':
              return 'Descripción';
            case 'lead':
              return 'Lead';
            case 'price_monthly':
              return 'Precio mensual';
            case 'features':
              return 'Características';
            default:
              return key;
          }
        });

      alert(
        `Por favor completa los siguientes campos:\n- ${invalidFields.join(
          '\n- '
        )}`
      );
      return;
    }

    // Prepara el objeto con los valores del formulario
    const formData = new FormData();
    formData.append('name', this.serviceForm.value.name);
    formData.append('description', this.serviceForm.value.description);
    formData.append('lead', this.serviceForm.value.lead);
    formData.append('price_monthly', this.serviceForm.value.price_monthly);

    // Si tienes un array de features
    if (
      this.serviceForm.value.features &&
      this.serviceForm.value.features.length
    ) {
      this.serviceForm.value.features.forEach(
        (feature: string, index: number) => {
          formData.append(`features[${index}]`, feature);
        }
      );
    }

    // Imagen real (no base64)
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.enviarData(formData);
  }

  enviarData(data: any) {
    this.serviciosService.createService(data).subscribe({
      next: (res) => {
        console.log('✅ Servicio creado correctamente'),
          this.serviceForm.reset();
        this.features.clear();
        this.addFeature();
        this.toastr.success('Servicio creado correctamente', 'Éxito', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      },

      error: (err) => {
        console.log('❌ Error al crear el servicio');
        this.toastr.error('Error al crear el servicio', 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      },
    });
  }
}
