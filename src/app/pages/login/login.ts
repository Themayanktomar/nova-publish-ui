import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  login() {

    const body = {
      email: this.email,
      password: this.password
    };

    this.http.post(
      'http://localhost:8080/novapublish/login',
      body
    ).subscribe({
      next: (response) => {
        console.log('Login Success', response);
      },

      error: (error) => {
        console.log('Login Failed', error);
      }
    });
  }
}