import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppServiciosComponent } from './app-servicios/app-servicios.component';
import { AppInstalacionesComponent } from './app-instalaciones/app-instalaciones.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppRegistroComponent } from './app-registro/app-registro.component';
import { AppReservarComponent } from './app-reservar/app-reservar.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppLogoutComponent } from './app-logout/app-logout.component';

const routes: Routes = [
  { path: 'home', component: AppHomeComponent },
  { path: 'servicios', component: AppServiciosComponent },
  { path: 'instalaciones', component: AppInstalacionesComponent },
  { path: 'reservar', component: AppReservarComponent },
  { path: 'registro', component: AppRegistroComponent },
  { path: 'login', component: AppLoginComponent },
  { path: 'logout', component: AppLogoutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
