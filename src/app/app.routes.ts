import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { GenerateAltText } from './pages/generate-alt-text/generate-alt-text';
import { Login } from './pages/login/login';
import { NovaPublish } from './pages/nova-publish/nova-publish';
import { Signup } from './pages/signup/signup';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'generate-alt-text', component: GenerateAltText },
  { path: 'login', component: Login },
  { path: 'nova-publish', component: NovaPublish },
  { path: 'signup', component: Signup },
  { path: '**', redirectTo: '' },
];
