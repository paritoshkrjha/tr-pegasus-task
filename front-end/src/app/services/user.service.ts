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
  constructor(private http: HttpClient) {}

  fetchUserData() {}
}
