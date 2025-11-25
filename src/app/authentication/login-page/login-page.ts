import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Container, Engine } from '@tsparticles/engine'; // Updated imports
import { NgParticlesService } from '@tsparticles/angular';
import { loadFull } from 'tsparticles';
import { NgxParticlesModule } from '@tsparticles/angular';
import { FirebaseService } from '../../shared/services/firebase.service';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../shared/services/auth_old.service';
import { Auth } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule,
    SharedModule,
    NgxParticlesModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ToastrModule,
  ],
  providers: [
    FirebaseService,
    { provide: ToastrService, useClass: ToastrService },
  ],
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss'],
})
export class LoginPage implements OnInit {
  disabled = '';
  active: any = 'Angular';
  showLoader: boolean | undefined;
  id = 'tsparticles';
  loginForm: FormGroup;
  loading = false;

  particlesOptions: any = {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 400,
        },
      },
      color: {
        value: '#4d99ff',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000',
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: '',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 1.5,
        random: false,
        anim: {
          enable: false,
          speed: 5,
          size_min: 0,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000,
        },
      },
      array: [],
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: 0.4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
      mouse: {},
    },
    retina_detect: false,
  };

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private elementRef: ElementRef,
    private sanitizer: DomSanitizer,
    public authservice: AuthService,
    private authServiceApi: Auth,
    private router: Router,
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private firebaseService: FirebaseService,
    private toastr: ToastrService,
    private readonly ngParticlesService: NgParticlesService
  ) {
    // AngularFireModule.initializeApp(environment.firebase);

    const bodyElement = this.renderer.selectRootElement('body', true);
    //  this.renderer.setAttribute(bodyElement, 'class', 'cover1 justify-center');

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }
  firestoreModule: any;
  databaseModule: any;
  authModule: any;
  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'authentication-background');

    this.ngParticlesService.init(async (engine: Engine) => {
      await loadFull(engine); // Load core features (optional, depending on needs)
    });

    this.firestoreModule = this.firebaseService.getFirestore();
    this.databaseModule = this.firebaseService.getDatabase();
    this.authModule = this.firebaseService.getAuth();
  }
  particlesLoaded(container: Container): void {
    console.log(container);
  }
  // firebase
  email = '';
  password = '';
  errorMessage = ''; // validation _error handle
  _error: { name: string; message: string } = { name: '', message: '' }; // for firbase _error handle

  clearErrorMessage() {
    this.errorMessage = '';
    this._error = { name: '', message: '' };
  }

  validateForm(email: string, password: string) {
    if (email.length === 0) {
      this.errorMessage = 'please enter email id';
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = 'please enter password';
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = 'password should be at least 6 char';
      return false;
    }

    this.errorMessage = '';
    return true;
  }

  public error: any = '';

  get form() {
    return this.loginForm.controls;
  }

  Submit() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Por favor completa todos los campos.';
      return;
    }

    this.loading = true;
    this.authServiceApi.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log('Usuario logueado:', response);
        this.router.navigate(['/dashboards/main']); 
        this.toastr.success('login successful', 'Kaica', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Error al iniciar sesión';
        this.loading = false;
      },
    });
  }

  ngOnDestroy(): void {
    const bodyElement = this.renderer.selectRootElement('body', true);
    this.renderer.removeAttribute(bodyElement, 'class');
  }

  public showPassword: boolean = false;

  toggleClass = 'ri-eye-off-line';
  public togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === 'ri-eye-line') {
      this.toggleClass = 'ri-eye-off-line';
    } else {
      this.toggleClass = 'ri-eye-line';
    }
  }
}
