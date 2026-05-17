import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

interface RegisterResponse {
  userId: number;
  email: string;
  message: string;
}

@Component({
  selector: 'app-signup',
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  firstName = '';
  lastName = '';
  email = '';
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  register() {
    this.errorMessage = '';
    this.successMessage = '';

    const body = {
      firstName: this.firstName.trim(),
      lastName: this.lastName.trim(),
      email: this.email.trim(),
    };

    if (!body.firstName || !body.lastName || !body.email) {
      this.errorMessage = 'Please enter first name, last name, and email.';
      return;
    }

    this.isLoading = true;

    this.http.post<RegisterResponse>('/api/auth/register', body).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.successMessage = response.message || 'User registered successfully.';

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1800);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage =
          error?.error?.message || 'Registration failed. Please check the details and try again.';
      },
    });
  }
}
