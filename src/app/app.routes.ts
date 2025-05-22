import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    loadComponent: () => import('./features/users/users.component').then((c) => c.UsersComponent)
  }
];
