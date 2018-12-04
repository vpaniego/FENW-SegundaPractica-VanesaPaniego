import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppUserService {

  private baseurl = 'http://fenw.etsisi.upm.es:5555';

  constructor(private http: HttpClient) {
  }

  postUser(newuser) {
    return this.http.post(this.baseurl + '/users/', newuser);
  }

  getUserByUsername(username) {
    console.log('getUserByUsername');
    if (username) {
    return this.http.get<User>(this.baseurl + '/users/' + username, {
      observe: 'response',
      headers: new HttpHeaders({'Auhorization': sessionStorage.getItem('CURRENT_TOKEN')})
    });
  }
}

}
