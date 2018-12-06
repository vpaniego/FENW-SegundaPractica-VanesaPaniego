import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppBookService} from '../shared/services/app-book.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Reservation} from '../shared/model/reservation';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-app-reservar',
  templateUrl: './app-reservar.component.html',
  styleUrls: ['./app-reservar.component.css']
})
export class AppReservarComponent implements OnInit {

  reservationList: Reservation[] = [];
  allReservationsByDate: Reservation[] = [];
  isReservationLoaded$: Observable<boolean>;

  booksForm: FormGroup;
  submitted = false;

  selectReserva() {
    console.log('Click Reserva');
  }

  doSearchReservations() {
    console.log('doSearchReservations');

    this.submitted = true;
    this.reservationList = [];
    this.allReservationsByDate = [];

    // Se detiene aquí el formulario si es inválido
    if (this.booksForm.invalid) {
      return;
    }

    this.appBookService.getReservasByFecha(new Date(this.formFields.bookDate.value).getTime()).subscribe(
      (value: Reservation[]) => {
        this.allReservationsByDate = value;
        this.allReservationsByDate.sort((a, b) => a.rsvtime.localeCompare(b.rsvtime));
        this.appBookService.reservationLoaded.next(true);
        console.log(this.allReservationsByDate);
      }, error1 => {
        this.toastrService.error('Error en la búsqueda de reservas');
      }
    );

  }

  constructor(private fb: FormBuilder, private appBookService: AppBookService, private toastrService: ToastrService) {
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
