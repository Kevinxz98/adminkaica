import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { UserService } from '../../../shared/services/user-service.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { SpkEditProfileSkeleton } from '../../../@spk/reusable-pages/spk-edit-profile-skeleton/spk-edit-profile-skeleton';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { SpkNotificationsSkeleton } from '../../../@spk/reusable-pages/spk-notifications-skeleton/spk-notifications-skeleton';
import { UserStateService } from '../../../shared/services/user-state.service';

interface Languageoptions {
  value: string;
  label: string;
}
@Component({
  selector: 'app-profile-settings',
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SpkEditProfileSkeleton,
    SpkNotificationsSkeleton,
  ],
  templateUrl: './profile-settings.html',
  styleUrl: './profile-settings.scss',
})
export class ProfileSettings implements OnInit {
  profileForm!: FormGroup;
  notificationForm!: FormGroup;
  passwordForm!: FormGroup;

  selectedFile: File | null = null;
  previewImage: string | ArrayBuffer | null = null;
  loading = false;
  saving = false;
  userData: any;
  profileData: any;
  profile_image = '';
  imageLoading = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService,
    private userStateService: UserStateService
  ) {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone_number: [''],
      age: [null, [Validators.min(1), Validators.max(150)]],
      bio: ['', [Validators.maxLength(500)]],
      language: ['es'],
      timezone: ['UTC'],
    });
    this.notificationForm = this.fb.group({
      require_password_for_changes: [false],
      in_app_notifications: [false],
      email_notifications: [false],
      push_notifications: [false],
      sms_notifications: [false],
    });

    this.passwordForm = this.fb.group(
      {
        current_password: ['', [Validators.required]],
        new_password: ['', [Validators.required, Validators.minLength(8)]],
        new_password_confirmation: ['', [Validators.required]],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  ngOnInit() {
    this.loadProfileData();
  }

  loadProfileData() {
    this.loading = true;
    this.userService.getProfile().subscribe({
      next: (user) => {
        if (user.success) {
          this.userData = user.data.user;
          this.profileData = user.data.profile;
          this.profile_image = this.profileData.profile_image
            ? `https://backend.kaica.co/public/storage/${this.profileData.profile_image}`
            : 'assets/images/faces/9.jpg';
          this.populateForm();
        }
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }

  private populateForm(): void {
    this.profileForm.patchValue({
      name: this.userData.name,
      email: this.userData.email,
      phone_number: this.profileData.phone_number || '',
      age: this.profileData.age || null,
      bio: this.profileData.bio || '',
      language: this.profileData.language || 'es',
      timezone: this.profileData.timezone || 'UTC',
      is_two_factor_enabled: this.profileData.is_two_factor_enabled || false,
    });

    this.notificationForm.patchValue({
      require_password_for_changes:
        this.profileData.require_password_for_changes ?? false,
      in_app_notifications: this.profileData.in_app_notifications ?? false,
      email_notifications: this.profileData.email_notifications ?? false,
      push_notifications: this.profileData.push_notifications ?? false,
      sms_notifications: this.profileData.sms_notifications ?? false,
    });

    this.cdr.detectChanges();
  }

  private passwordMatchValidator(
    form: FormGroup
  ): { [key: string]: boolean } | null {
    const password = form.get('new_password');
    const confirmPassword = form.get('new_password_confirmation');

    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      confirmPassword.setErrors({ mismatch: true });
      return { mismatch: true };
    }
    return null;
  }

  changePassword(): void {
    if (this.passwordForm.invalid) {
      this.markFormGroupTouched(this.passwordForm);
      return;
    }

    const formData = new FormData();
    formData.append('password', this.passwordForm.value.new_password);
    formData.append(
      'password_confirmation',
      this.passwordForm.value.new_password_confirmation
    );

    formData.append(
      'current_password',
      this.passwordForm.value.current_password
    );

    this.userService.changePassword(formData).subscribe({
      next: () => {
        this.toastr.success('Contraseña Actualizada', 'Kaica', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.passwordForm.reset();
      },
      error: (error) => {
        this.toastr.warning('Error cambiando contraseña', 'Kaica', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      },
    });
  }

  saveProfile() {
    if (this.profileForm.invalid) {
      this.markFormGroupTouched(this.profileForm);
      return;
    }

    this.saving = true;
    const formData = new FormData();

    Object.keys(this.profileForm.value).forEach((key) => {
      const value = this.profileForm.get(key)?.value;
      if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });

    if (this.selectedFile) {
      formData.append('profile_image', this.selectedFile);
    }

    this.userService.updateProfile(formData).subscribe({
      next: (response) => {
        console.log(response);
        if (response.success) {
          // Actualizar datos locales
          this.profileData = response.data;

          if (response.user.profile?.profile_image) {
            const fullImageUrl = `https://backend.kaica.co/public/storage/${response.user.profile.profile_image}`;
            this.userStateService.updateProfileImage(fullImageUrl);

            // También actualizar el preview local
            this.previewImage = fullImageUrl;
          } else {
            // Si no hay imagen, limpiar
            this.userStateService.clearProfileImage();
            this.previewImage = null;
          }

          this.userStateService.updateUserProfile(response.data);

          this.selectedFile = null; // Limpiar archivo seleccionado después de guardar
          this.toastr.success('Perfil actualizado correctamente', 'Kaica', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        }
        this.saving = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.saving = false;
        this.toastr.warning('Error actualizando perfil', 'Kaica', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      },
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Validar tamaño (2MB máximo)
      if (file.size > 2 * 1024 * 1024) {
        this.toastr.warning('El archivo no debe superar los 2MB', 'Kaica', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        return;
      }

      // Validar tipo
      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        this.toastr.warning(
          'Solo se permiten imágenes JPEG, PNG o GIF',
          'Kaica',
          {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          }
        );
        return;
      }

      this.selectedFile = file;
      this.imageLoading = true;

      // Crear preview
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result;
        this.imageLoading = false;
        this.cdr.detectChanges();
      };

      reader.onerror = () => {
        this.imageLoading = false;
        this.toastr.error('Error cargando la imagen', 'Kaica');
      };
      reader.readAsDataURL(file);
    }
  }

  deleteProfileImage(): void {
    this.userService.deleteProfileImage().subscribe({
      next: (response) => {
        if (response.success) {
          // Actualizar el estado global
          this.userStateService.clearProfileImage();

          // Actualizar localmente
          this.previewImage = null;
          this.selectedFile = null;

          this.profile_image = 'assets/images/faces/9.jpg'; // fallback default
          this.toastr.success('Imagen eliminada correctamente', 'Kaica', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        }

        this.cdr.detectChanges();
      },
      error: () => {
        this.toastr.error('Error al eliminar la imagen', 'Kaica', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.cdr.detectChanges();
      },
    });
  }

  saveNotifications(): void {
    const formData = new FormData();

    Object.keys(this.notificationForm.value).forEach((key) => {
      const value = this.notificationForm.get(key)?.value;

      if (value !== null && value !== undefined) {
        formData.append(key, value ? '1' : '0');
      }
    });

    this.userService.updateNotification(formData).subscribe({
      next: () => {
        this.toastr.success('Notificaciones actualizadas', 'Kaica', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      },
      error: () => {
        this.toastr.error('Error al actualizar notificaciones', 'Kaica', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      },
    });
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  back() {
    this.router.navigate(['/pages/profile']);
  }

  languages: Languageoptions[] = [
    { value: 'Español', label: 'Español' },
    { value: 'Us English', label: 'Us English' },
    { value: 'Arabic', label: 'Arabic' },
    { value: 'korein', label: 'korein' },
  ];

  timezones: Languageoptions[] = [
    { value: 'Pacific/Midway', label: '(GMT-11:00) Midway Island, Samoa' },
    { value: 'America/Adak', label: '(GMT-10:00) Hawaii-Aleutian' },
    { value: 'Etc/GMT+10', label: '(GMT-10:00) Hawaii' },
    { value: 'Pacific/Marquesas', label: '(GMT-09:30) Marquesas Islands' },
    { value: 'Pacific/Gambier', label: '(GMT-09:00) Gambier Islands' },
    { value: 'America/Anchorage', label: '(GMT-09:00) Alaska' },
    {
      value: 'America/Ensenada',
      label: '(GMT-08:00) Tijuana, Baja California',
    },
    { value: 'Etc/GMT+8', label: '(GMT-08:00) Pitcairn Islands' },
    {
      value: 'America/Los_Angeles',
      label: '(GMT-08:00) Pacific Time (US & Canada)',
    },
    {
      value: 'America/Denver',
      label: '(GMT-07:00) Mountain Time (US & Canada)',
    },
    {
      value: 'America/Chihuahua',
      label: '(GMT-07:00) Chihuahua, La Paz, Mazatlan',
    },
    { value: 'America/Dawson_Creek', label: '(GMT-07:00) Arizona' },
    {
      value: 'America/Belize',
      label: '(GMT-06:00) Saskatchewan, Central America',
    },
    {
      value: 'America/Cancun',
      label: '(GMT-06:00) Guadalajara, Mexico City, Monterrey',
    },
    { value: 'Chile/EasterIsland', label: '(GMT-06:00) Easter Island' },
    {
      value: 'America/Chicago',
      label: '(GMT-06:00) Central Time (US & Canada)',
    },
    {
      value: 'America/New_York',
      label: '(GMT-05:00) Eastern Time (US & Canada)',
    },
    { value: 'America/Havana', label: '(GMT-05:00) Cuba' },
    {
      value: 'America/Bogota',
      label: '(GMT-05:00) Bogota, Lima, Quito, Rio Branco',
    },
    { value: 'America/Caracas', label: '(GMT-04:30) Caracas' },
    { value: 'America/Santiago', label: '(GMT-04:00) Santiago' },
    { value: 'America/La_Paz', label: '(GMT-04:00) La Paz' },
    { value: 'Atlantic/Stanley', label: '(GMT-04:00) Faukland Islands' },
    { value: 'America/Campo_Grande', label: '(GMT-04:00) Brazil' },
    {
      value: 'America/Goose_Bay',
      label: '(GMT-04:00) Atlantic Time (Goose Bay)',
    },
    { value: 'America/Glace_Bay', label: '(GMT-04:00) Atlantic Time (Canada)' },
    { value: 'America/St_Johns', label: '(GMT-03:30) Newfoundland' },
    { value: 'America/Araguaina', label: '(GMT-03:00) UTC-3' },
    { value: 'America/Montevideo', label: '(GMT-03:00) Montevideo' },
    { value: 'America/Miquelon', label: '(GMT-03:00) Miquelon, St. Pierre' },
    { value: 'America/Godthab', label: '(GMT-03:00) Greenland' },
    {
      value: 'America/Argentina/Buenos_Aires',
      label: '(GMT-03:00) Buenos Aires',
    },
    { value: 'America/Sao_Paulo', label: '(GMT-03:00) Brasilia' },
    { value: 'America/Noronha', label: '(GMT-02:00) Mid-Atlantic' },
    { value: 'Atlantic/Cape_Verde', label: '(GMT-01:00) Cape Verde Is.' },
    { value: 'Atlantic/Azores', label: '(GMT-01:00) Azores' },
    { value: 'Europe/Belfast', label: '(GMT) Greenwich Mean Time : Belfast' },
    { value: 'Europe/Dublin', label: '(GMT) Greenwich Mean Time : Dublin' },
    { value: 'Europe/Lisbon', label: '(GMT) Greenwich Mean Time : Lisbon' },
    { value: 'Europe/London', label: '(GMT) Greenwich Mean Time : London' },
    { value: 'Africa/Abidjan', label: '(GMT) Monrovia, Reykjavik' },
    {
      value: 'Europe/Amsterdam',
      label: '(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
    },
    {
      value: 'Europe/Belgrade',
      label: '(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
    },
    {
      value: 'Europe/Brussels',
      label: '(GMT+01:00) Brussels, Copenhagen, Madrid, Paris',
    },
    { value: 'Africa/Algiers', label: '(GMT+01:00) West Central Africa' },
    { value: 'Africa/Windhoek', label: '(GMT+01:00) Windhoek' },
    { value: 'Asia/Beirut', label: '(GMT+02:00) Beirut' },
    { value: 'Africa/Cairo', label: '(GMT+02:00) Cairo' },
    { value: 'Asia/Gaza', label: '(GMT+02:00) Gaza' },
    { value: 'Africa/Blantyre', label: '(GMT+02:00) Harare, Pretoria' },
    { value: 'Asia/Jerusalem', label: '(GMT+02:00) Jerusalem' },
    { value: 'Europe/Minsk', label: '(GMT+02:00) Minsk' },
    { value: 'Asia/Damascus', label: '(GMT+02:00) Syria' },
    {
      value: 'Europe/Moscow',
      label: '(GMT+03:00) Moscow, St. Petersburg, Volgograd',
    },
    { value: 'Africa/Addis_Ababa', label: '(GMT+03:00) Nairobi' },
    { value: 'Asia/Tehran', label: '(GMT+03:30) Tehran' },
    { value: 'Asia/Dubai', label: '(GMT+04:00) Abu Dhabi, Muscat' },
    { value: 'Asia/Yerevan', label: '(GMT+04:00) Yerevan' },
    { value: 'Asia/Kabul', label: '(GMT+04:30) Kabul' },
    { value: 'Asia/Yekaterinburg', label: '(GMT+05:00) Ekaterinburg' },
    { value: 'Asia/Tashkent', label: '(GMT+05:00) Tashkent' },
    {
      value: 'Asia/Kolkata',
      label: '(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi',
    },
    { value: 'Asia/Katmandu', label: '(GMT+05:45) Kathmandu' },
    { value: 'Asia/Dhaka', label: '(GMT+06:00) Astana, Dhaka' },
    { value: 'Asia/Novosibirsk', label: '(GMT+06:00) Novosibirsk' },
    { value: 'Asia/Rangoon', label: '(GMT+06:30) Yangon (Rangoon)' },
    { value: 'Asia/Bangkok', label: '(GMT+07:00) Bangkok, Hanoi, Jakarta' },
    { value: 'Asia/Krasnoyarsk', label: '(GMT+07:00) Krasnoyarsk' },
    {
      value: 'Asia/Hong_Kong',
      label: '(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
    },
    { value: 'Asia/Irkutsk', label: '(GMT+08:00) Irkutsk, Ulaan Bataar' },
    { value: 'Australia/Perth', label: '(GMT+08:00) Perth' },
    { value: 'Australia/Eucla', label: '(GMT+08:45) Eucla' },
    { value: 'Asia/Tokyo', label: '(GMT+09:00) Osaka, Sapporo, Tokyo' },
    { value: 'Asia/Seoul', label: '(GMT+09:00) Seoul' },
    { value: 'Asia/Yakutsk', label: '(GMT+09:00) Yakutsk' },
    { value: 'Australia/Adelaide', label: '(GMT+09:30) Adelaide' },
    { value: 'Australia/Darwin', label: '(GMT+09:30) Darwin' },
    { value: 'Australia/Brisbane', label: '(GMT+10:00) Brisbane' },
    { value: 'Australia/Hobart', label: '(GMT+10:00) Hobart' },
    { value: 'Asia/Vladivostok', label: '(GMT+10:00) Vladivostok' },
    { value: 'Australia/Lord_Howe', label: '(GMT+10:30) Lord Howe Island' },
    { value: 'Etc/GMT-11', label: '(GMT+11:00) Solomon Is., New Caledonia' },
    { value: 'Asia/Magadan', label: '(GMT+11:00) Magadan' },
    { value: 'Pacific/Norfolk', label: '(GMT+11:30) Norfolk Island' },
    { value: 'Asia/Anadyr', label: '(GMT+12:00) Anadyr, Kamchatka' },
    { value: 'Pacific/Auckland', label: '(GMT+12:00) Auckland, Wellington' },
    { value: 'Etc/GMT-12', label: '(GMT+12:00) Fiji, Kamchatka, Marshall Is.' },
    { value: 'Pacific/Chatham', label: '(GMT+12:45) Chatham Islands' },
    { value: 'Pacific/Tongatapu', label: "(GMT+13:00) Nuku'alofa" },
    { value: 'Pacific/Kiritimati', label: '(GMT+14:00) Kiritimati' },
  ];
}
