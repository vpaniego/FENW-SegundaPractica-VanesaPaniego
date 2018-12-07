import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppBookService} from '../shared/services/app-book.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Reservation} from '../shared/model/reservation';
import {Observable} from 'rxjs';
import {ReservationView} from '../shared/model/reservation-view';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-app-reservar',
  templateUrl: './app-reservar.component.html',
  styleUrls: ['./app-reservar.component.css']
})
export class AppReservarComponent implements OnInit {

  isReservationLoaded$: Observable<boolean>;

  booksForm: FormGroup;
  submitted = false;
  newBookDate: Date;

  reservationRows: ReservationView[] = [];
  allReservationsByDate: Reservation[] = [];

  newcortId: number;
  newreservaDay: number;

  selectReserva(reservaView: ReservationView, inputRadioClicked: string) {

    // Se busca cual ha sido la pista seleccionada
    if (inputRadioClicked === '#input_radio1') {
      this.newcortId = 1;
    } else if (inputRadioClicked === '#input_radio2') {
      this.newcortId = 2;
    } else if (inputRadioClicked === '#input_radio3') {
      this.newcortId = 3;
    } else {
      this.newcortId = 4;
    }

    // Se genera la nueva fecha de reserva
    this.newreservaDay = reservaView.rsvtimevalue;
    this.newBookDate = new Date(this.formFields.bookDate.value);
    this.newBookDate.setHours(this.newreservaDay, 0, 0);

    // Se llama al servicio de reserva para crear una nueva entrada
    this.appBookService.postReserva(this.newcortId, this.newBookDate.getTime()).subscribe(
      response => {
        this.toastrService.success('Reserva realizada correctamente ', 'Reserva correcta!');
      }, error => {
        this.toastrService.error('Error en el registro de una nueva reserva.', 'Registro no realizado!');
        return;
      });

    this.newreservaDay = 0;
    this.newBookDate = null;
    this.newcortId = 0;
  }

  doSearchReservations() {

    this.submitted = true;
    this.allReservationsByDate = [];
    this.reservationRows = [];

    // Se detiene aquí el formulario si es inválido
    if (this.booksForm.invalid) {
      return;
    }

    this.appBookService.getReservasByFecha(new Date(this.formFields.bookDate.value).getTime()).subscribe(
      (value: Reservation[]) => {
        this.allReservationsByDate = value;
        this.allReservationsByDate.sort((a, b) => a.rsvtime.localeCompare(b.rsvtime));

        this.reservationRows = [
          new ReservationView('10 - 11 am', false, false, false, false, '10:00', 10),
          new ReservationView('11 - 12 am', false, false, false, false, '11:00', 11),
          new ReservationView('12 - 13 pm', false, false, false, false, '12:00', 12),
          new ReservationView('13 - 14 pm', false, false, false, false, '13:00', 13),
          new ReservationView('14 - 15 pm', false, false, false, false, '14:00', 14),
          new ReservationView('15 - 16 pm', false, false, false, false, '15:00', 15),
          new ReservationView('16 - 17 pm', false, false, false, false, '16:00', 16),
          new ReservationView('17 - 18 pm', false, false, false, false, '17:00', 17),
          new ReservationView('18 - 19 pm', false, false, false, false, '18:00', 18),
          new ReservationView('19 - 20 pm', false, false, false, false, '19:00', 19),
          new ReservationView('20 - 21 pm', false, false, false, false, '20:00', 20)
        ];

        this.reservationRows.forEach(reservationView => {
          const timeView = reservationView.rsvtime;
          this.allReservationsByDate.forEach(reservation => {
            const time = reservation.rsvtime;
            if (timeView === time) {
              const courtId = reservation.courtId;
              switch (courtId) {
                case 1:
                  reservationView.court1 = true;
                  break;
                case 2:
                  reservationView.court2 = true;
                  break;
                case 3:
                  reservationView.court3 = true;
                  break;
                case 4:
                  reservationView.court4 = true;
                  break;
              }
            }
          });
        });

      }, error1 => {
        this.toastrService.error('Error en la búsqueda de reservas');
      }
    );

    this.appBookService.reservationLoaded.next(true);

  }

  constructor(private fb: FormBuilder, private appBookService: AppBookService,
              private toastrService: ToastrService, private router: Router) {
  }

  ngOnInit() {
    this.booksForm = this.fb.group({
      bookDate: ['', Validators.required],
      nospam: ['', [Validators.minLength(0), Validators.maxLength(0)]]
    });
    this.isReservationLoaded$ = this.appBookService.isReservationLoaded;
  }

  // Getter: Acceso a los campos de control del formulario
  get formFields() {
    return this.booksForm.controls;
  }

}
