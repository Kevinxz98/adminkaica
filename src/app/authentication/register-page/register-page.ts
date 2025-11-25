import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Auth } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-page',
  imports: [
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
  ],
    providers: [
      { provide: ToastrService, useClass: ToastrService },
    ],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss',
})
export class RegisterPage {
  registerForm: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: Auth,
    private router: Router,
    private toastr: ToastrService,
  ) {
    document.body.classList.add('authentication-background');

    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.errorMessage = 'Por favor completa todos los campos.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.authService.register(this.registerForm.value).subscribe({
      next: (response) => {
        console.log('Usuario registrado:', response);
        this.router.navigate(['/dashboards/sales']); // redirige donde desees
        this.toastr.success('login successful', 'Kaica', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Error al registrarse';
        this.loading = false;
      },
    });
  }
  ngOnDestroy(): void {
    document.body.classList.remove('authentication-background');
  }
  showPassword = false;
  showPassword1 = false;
  toggleClass = 'off-line';
  toggleClass1 = 'off-line';
  createpassword() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === 'off-line') {
      this.toggleClass = 'line';
    } else {
      this.toggleClass = 'off-line';
    }
  }
  createpassword1() {
    this.showPassword1 = !this.showPassword1;
    if (this.toggleClass1 === 'off-line') {
      this.toggleClass1 = 'line';
    } else {
      this.toggleClass1 = 'off-line';
    }
  }
}
