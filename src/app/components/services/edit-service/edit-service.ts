import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import {
  FormsModule,
  FormBuilder,
  FormArray,
  Validators,
  FormGroup,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicios } from '../../../shared/services/servicios.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { QuillModule } from 'ngx-quill';


@Component({
  selector: 'app-edit-service',
  standalone: true,
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    QuillModule,
  ],
  providers: [{ provide: ToastrService, useClass: ToastrService }],
  templateUrl: './edit-service.html',
  styleUrl: './edit-service.scss',
})
export class EditService implements OnInit {
  serviceForm: FormGroup;
  selectedFile: File | null = null;
  serviceId!: number;
  currentImage: string | null = null;

  modules = {
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
  };

  constructor(
    private fb: FormBuilder,
    private serviciosService: Servicios,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.serviceForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      lead: ['', Validators.required],
      image: [''],
      price_monthly: ['', Validators.required],
      features: this.fb.array([]),
    });
  }

  get features() {
    return this.serviceForm.get('features') as FormArray;
  }

  ngOnInit() {
    this.serviceId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Editing service with ID:', this.serviceId);
    this.loadServiceData();
  }

  removeFeature(i: number) {
    this.features.removeAt(i);
  }

  addFeature() {
    this.features.push(this.fb.control(''));
  }

  loadServiceData() {
    this.serviciosService.getServiceById(this.serviceId).subscribe({
      next: (res) => {
        // Guarda la URL actual de la imagen
        this.currentImage = `http://localhost:8000/storage/${res.image}`;

        this.serviceForm.patchValue({
          name: res.name,
          lead: res.lead,
          description: res.description,
          price_monthly: res.price_monthly,
        });

        this.features.clear();
        const featuresArray = Array.isArray(res.features)
          ? res.features
          : JSON.parse(res.features || '[]');

        featuresArray.forEach((f: string) =>
          this.features.push(this.fb.control(f))
        );
      },
      error: (err) => {
        console.error('Error cargando servicio', err);
        this.toastr.error('Error al cargar el servicio', 'Error');
      },
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] || null;
  }

  updateService() {
    if (this.serviceForm.invalid) {
      alert('Por favor completa todos los campos antes de actualizar.');
      return;
    }

    let descriptionHTML = this.serviceForm.value.description;

    const base64Images = descriptionHTML.match(/<img[^>]+src="data:image\/[^">]+"[^>]*>/g) || [];

    const imageFiles: File[] = [];

    

    const formData = new FormData();
    formData.append('name', this.serviceForm.value.name);
    formData.append('description', this.serviceForm.value.description);
    formData.append('lead', this.serviceForm.value.lead);
    formData.append('price_monthly', this.serviceForm.value.price_monthly);

    base64Images.forEach((tag: string, index: number) => {
      const match = tag.match(/src="([^"]+)"/);
      if (match && match[1]) {
        const base64 = match[1];
        const file = this.base64ToFile(base64, `quill_image_${index}.png`);
        formData.append(`images_quill[]`, file);
        imageFiles.push(file);
      }
    });

    // Características
    this.serviceForm.value.features.forEach(
      (feature: string, index: number) => {
        formData.append(`features[${index}]`, feature);
      }
    );

    // Imagen nueva (si se seleccionó)
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    // Método PUT
    formData.append('_method', 'PUT');

    this.serviciosService.updateService(this.serviceId, formData).subscribe({
      next: (res) => {

        res.uploaded_urls.forEach((url: string, index: number) => {
          descriptionHTML = descriptionHTML.replace(
            base64Images[index],
            `<img src="${url}">`
          );
        });

        const fd2 = new FormData();
        fd2.append('description', descriptionHTML);
        fd2.append('_method', 'PUT');

        this.serviciosService
          .updateService(this.serviceId, fd2)
          .subscribe(() => {
            this.toastr.success('Servicio actualizado correctamente', 'Éxito');
            this.router.navigate(['/services/view-service']);
          });
      },
      error: (err) => {
        console.error('Error al actualizar:', err);
        this.toastr.error('Error al actualizar el servicio', 'Error');
      },
    });
  }

  base64ToFile(dataBase64: string, filename: string) {
    const arr = dataBase64.split(',');
    const mimeMatch = arr[0].match(/:(.*?);/);
    const mime = mimeMatch ? mimeMatch[1] : 'image/png';
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
}
