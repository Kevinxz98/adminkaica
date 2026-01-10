// user-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  // Subject para la imagen de perfil
  private profileImageSubject = new BehaviorSubject<string | null>(null);
  profileImage$: Observable<string | null> = this.profileImageSubject.asObservable();
  
  // Subject para datos completos del usuario
  private userProfileSubject = new BehaviorSubject<any>(null);
  userProfile$: Observable<any> = this.userProfileSubject.asObservable();
  
  constructor() {
    // Intentar cargar imagen del localStorage al iniciar
    const savedImage = localStorage.getItem('userProfileImage');
    if (savedImage) {
      this.profileImageSubject.next(savedImage);
    }
  }
  
  // Métodos para actualizar la imagen
  updateProfileImage(imageUrl: string | null): void {
    if (imageUrl) {
      localStorage.setItem('userProfileImage', imageUrl);
    } else {
      localStorage.removeItem('userProfileImage');
    }
    this.profileImageSubject.next(imageUrl);
  }
  
  clearProfileImage(): void {
    localStorage.removeItem('userProfileImage');
    this.profileImageSubject.next(null);
  }
  
  // Métodos para datos completos del usuario
  updateUserProfile(profile: any): void {
    this.userProfileSubject.next(profile);
  }
  
  // Obtener valor actual
  getCurrentProfileImage(): string | null {
    return this.profileImageSubject.value;
  }
  
  getCurrentUserProfile(): any {
    return this.userProfileSubject.value;
  }
}