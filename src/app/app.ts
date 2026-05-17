import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private router: Router) {}

  get isLoggedIn() {
    return !!localStorage.getItem('novaPublishToken');
  }

  get userEmail() {
    return localStorage.getItem('novaPublishUserEmail') || 'Logged in user';
  }

  get userInitial() {
    return this.userEmail.charAt(0).toUpperCase();
  }

  logout() {
    localStorage.removeItem('novaPublishToken');
    localStorage.removeItem('novaPublishTokenType');
    localStorage.removeItem('novaPublishTokenExpiresAt');
    localStorage.removeItem('novaPublishUserEmail');
    this.router.navigate(['/login']);
  }
}
