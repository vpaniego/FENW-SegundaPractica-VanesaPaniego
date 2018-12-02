import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header-navbar',
  templateUrl: './app-header-navbar.component.html',
  styleUrls: ['./app-header-navbar.component.css']
})
export class AppHeaderNavbarComponent implements OnInit {
  logged = false;
  tologin = true;
  token: string;
  usernameLogged: string;

  constructor() { }

  ngOnInit() {
    this.token = sessionStorage.getItem('CURRENT_TOKEN');
    if (this.token) {
      console.log('Loggin realizado correctamente y se cambia el menu');
      this.logged = true;
      this.tologin = false;
      this.usernameLogged = sessionStorage.getItem('CURRENT_USER');
    }
  }

}
