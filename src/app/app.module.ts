import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AppBootstrapModule} from './app-bootstrap/app-bootstrap.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE} from 'ng-pick-datetime';

import {AppHeaderNavbarComponent} from './app-header-navbar/app-header-navbar.component';
import {AppServiciosComponent} from './app-servicios/app-servicios.component';
import {AppInstalacionesComponent} from './app-instalaciones/app-instalaciones.component';
import {AppLoginComponent} from './app-login/app-login.component';
import {AppRegistroComponent} from './app-registro/app-registro.component';
import {AppReservarComponent} from './app-reservar/app-reservar.component';
import {AppHomeComponent} from './app-home/app-home.component';
import {AppLogoutComponent} from './app-logout/app-logout.component';

import {AppAuthenticationService} from './shared/services/app-authentication.service';
import {AppTokenInterceptor} from './shared/interceptors/app-token-interceptor';
import {AppUserService} from './shared/services/app-user.service';
import {UsernameValidator} from './shared/validators/username';
import {AppBookService} from './shared/services/app-book.service';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderNavbarComponent,
    AppServiciosComponent,
    AppInstalacionesComponent,
    AppLoginComponent,
    AppRegistroComponent,
    AppReservarComponent,
    AppHomeComponent,
    AppLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [
    AppAuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppTokenInterceptor,
      multi: true
    },
    AppUserService,
    UsernameValidator,
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'es'},
    AppBookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
