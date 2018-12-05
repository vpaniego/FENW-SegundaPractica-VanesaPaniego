import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppAuthenticationService } from '../shared/services/app-authentication.service';

@Component({
  selector: 'app-app-header-navbar',
  templateUrl: './app-header-navbar.component.html',
  styleUrls: ['./app-header-navbar.component.css']
})
export class AppHeaderNavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isUserLoggedIn$: Observable<string>;
  isLoggedOut$: Observable<boolean>;

  constructor(private appAuthenticationService: AppAuthenticationService) {  }

  ngOnInit() {
    this.isLoggedIn$ = this.appAuthenticationService.isLoggedIn;
    this.isUserLoggedIn$ = this.appAuthenticationService.isUserLoggedIn;
    this.isLoggedOut$ = this.appAuthenticationService.isLoggedOut;
  }

}
