import { Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { HomeComponent } from './screens/home/home.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: HomeComponent}
];
