import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppAuthenticationService {

  private baseurl = 'http://fenw.etsisi.upm.es:5555';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.get(this.baseurl + '/users/login' + '?username=' + username + '&password=' + password);
  }

  logout() {
    this.removeDataUserSession();
    console.log('Logout de la aplicación');
  }

  saveDataUserSession(token: string, username: string) {
    this.saveTokenInSession(token);
    sessionStorage.setItem('CURRENT_USER', username);
  }

  saveTokenInSession(token: string) {
    sessionStorage.setItem('CURRENT_TOKEN', token);
    console.log('Token = ' + sessionStorage.getItem('CURRENT_TOKEN'));
  }

  removeDataUserSession() {
    sessionStorage.removeItem('CURRENT_TOKEN');
    sessionStorage.removeItem('CURRENT_USER');
    sessionStorage.clear();
  }


}
