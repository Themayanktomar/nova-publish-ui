import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface LoginResponse {
  token: string;
  tokenType: string;
  expiresAt: string;
  issuedAt: string;
}

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email: string = '';
  password: string = '';
  isLoading = false;
  errorMessage = '';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login() {
    this.errorMessage = '';

    const body = {
      email: this.email.trim(),
      password: this.password,
    };

    if (!body.email || !body.password) {
      this.errorMessage = 'Please enter your email and password.';
      return;
    }

    this.isLoading = true;

    this.http.post<LoginResponse>('/api/auth/login', body).subscribe({
      next: (response) => {
        this.isLoading = false;
        localStorage.setItem('novaPublishToken', response.token);
        localStorage.setItem('novaPublishTokenType', response.tokenType);
        localStorage.setItem('novaPublishTokenExpiresAt', response.expiresAt);
        localStorage.setItem('novaPublishUserEmail', body.email);

        this.router.navigate(['/nova-publish']);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage =
          error?.error?.message || 'Login failed. Please check your email and password.';
      },
    });
  }
}
