import { Component, OnInit } from '@angular/core';
import { AppAuthenticationService} from '../shared/services/app-authentication.service';

@Component({
  selector: 'app-app-logout',
  templateUrl: './app-logout.component.html',
  styleUrls: ['./app-logout.component.css']
})
export class AppLogoutComponent implements OnInit {

  constructor(private appAuthenticationService: AppAuthenticationService) { }

  ngOnInit() {
    this.appAuthenticationService.logout();
  }

}
