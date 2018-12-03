import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AppUserService {

  private baseurl = 'http://fenw.etsisi.upm.es:5555';

  constructor(private http: HttpClient) { }

  postUser(newuser) {
    // 1. Comprobar que el usuario no está ya registrado antes de la inserción
    return this.http.post(this.baseurl + '/users/', newuser);
  }

}
