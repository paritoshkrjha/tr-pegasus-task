import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://f200-14-99-74-6.ngrok-free.app/api/user';
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {}

  login(email: string, password: string): Observable<any> {
    return   this.http.post(this.apiUrl+'/login',{ email: email, password:password });
  }

  saveToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}
