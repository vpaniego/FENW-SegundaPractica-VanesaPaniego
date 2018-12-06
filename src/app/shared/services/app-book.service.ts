import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppAuthenticationService} from './app-authentication.service';
import {Reservation} from '../model/reservation';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppBookService {

  private baseurl = 'http://fenw.etsisi.upm.es:5555';

  reservationLoaded = new BehaviorSubject<boolean>(false);

  get isReservationLoaded() {
    return this.reservationLoaded.asObservable();
  }

  constructor(private http: HttpClient, private appAuthService: AppAuthenticationService) {
  }

  postReserva(newreserva) {
    return this.http.post(this.baseurl + '/reservations/', newreserva);
  }


  getReservasByFecha(rsvdateTime) {
    if (rsvdateTime) {
      return this.http.get(this.baseurl + '/reservations/' + rsvdateTime);
    }
  }

  getAllReservas() {
    return this.http.get<Reservation>(this.baseurl + '/reservations/listUserReservations');
  }

}
