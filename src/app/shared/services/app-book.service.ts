import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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

  postReserva(courtid, rsvdatetime ) {
    const newreservation = new Reservation(0, courtid, rsvdatetime, '', '');
    return this.http.post(this.baseurl + '/reservations/', newreservation);
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
