import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { UserService } from '../../../service/user.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    PasswordModule,
    ImageModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    InputTextModule,
    CardModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email], // Email validation
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(5)], // Password validation
      ],
      rememberMe:[false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe({
        next: (response: any) => {
          // console.log(response);
          this.userService.user=response.user;
          this.userService.saveUserToSessionStorage(response.user);
          this.router.navigate(['/dashboard'])
        },
        error: (error) => {
          console.error('Login error:', error);
          alert('Invalid credentials or server error');
        },
      });
    }
  }
}
