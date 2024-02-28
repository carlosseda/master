import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { FaqsComponent } from './faqs/faqs.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Inicio' },
  { path: 'usuarios', component: UsersComponent, title: 'Usuarios' },
  { path: 'faqs', component: FaqsComponent, title: 'Faqs' }
];
