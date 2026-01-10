import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

interface AuthResponse {
  message: string;
  token: string;
  user: any;
  roles: string[];
}

interface userData {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
  created_at?: string;
  updated_at?: string;
}

export interface UserProfile {
  id: number;
  user_id: number;
  profile_image?: string;
  profile_image_bg?: string;
  phone_number?: string;
  age?: number;
  bio?: string;
  language?: string;
  timezone?: string;
  is_two_factor_enabled: boolean;
  require_password_for_changes: boolean;
  in_app_notifications: boolean;
  email_notifications: boolean;
  push_notifications: boolean;
  sms_notifications: boolean;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

interface UpdateProfileRequest {
  name?: string;
  email?: string;
  profile_image?: File | null; // Para subir archivos
  profile_image_bg?: File | null; // Para subir archivos
  phone_number?: string;
  age?: number | null;
  bio?: string;
  language?: string;
  timezone?: string;
  is_two_factor_enabled?: boolean;
  require_password_for_changes?: boolean;
  in_app_notifications?: boolean;
  email_notifications?: boolean;
  push_notifications?: boolean;
  sms_notifications?: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  error?: string;
}


export interface FullProfileResponse {
  user: userData;
  profile: UserProfile;
}


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://backend.kaica.co/public/api/profile';
  private tokenKey = 'auth_token';
  private currentUserSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  private handleAuthResponse(response: AuthResponse) {
    localStorage.setItem(this.tokenKey, response.token);
    this.currentUserSubject.next(response.user);
  }

  getProfile(): Observable<ApiResponse<FullProfileResponse>> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });

    return this.http.get<ApiResponse<FullProfileResponse>>(this.apiUrl, { headers });
  }

  updateProfile(data: FormData)
  {
    return this.http.post<any>(`${this.apiUrl}/update-profile?_method=PUT`, data);
  }

  updateNotification(data: FormData)
  {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });

    return this.http.post<any>(`${this.apiUrl}/update-profile-notifications`, data, {headers});
  }

  changePassword(data: FormData)
  {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });

    return this.http.post<any>(`${this.apiUrl}/update-profile-password`, data, {headers});
  }

  deleteProfileImage()
  {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });

    return this.http.delete<any>(`${this.apiUrl}/update-delete-image-profile`, {headers});

  }
}
