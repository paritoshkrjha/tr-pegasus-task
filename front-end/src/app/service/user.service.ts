import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  uid: string;
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | null = null;
  constructor(private http: HttpClient) {
    const user = sessionStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
    }
  }
 
  saveUserToSessionStorage(user: User) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }
}
