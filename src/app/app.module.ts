import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { AppHeaderNavbarComponent } from './app-header-navbar/app-header-navbar.component';
import { AppServiciosComponent } from './app-servicios/app-servicios.component';
import { AppInstalacionesComponent } from './app-instalaciones/app-instalaciones.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppRegistroComponent } from './app-registro/app-registro.component';
import { AppReservarComponent } from './app-reservar/app-reservar.component';
import { AppHomeComponent } from './app-home/app-home.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderNavbarComponent,
    AppServiciosComponent,
    AppInstalacionesComponent,
    AppLoginComponent,
    AppRegistroComponent,
    AppReservarComponent,
    AppHomeComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
