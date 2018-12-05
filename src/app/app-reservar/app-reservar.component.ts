import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-reservar',
  templateUrl: './app-reservar.component.html',
  styleUrls: ['./app-reservar.component.css']
})
export class AppReservarComponent implements OnInit {

  minHour: number;
  maxHour: number;
  minDate: Date;




  constructor() { }

  ngOnInit() {
    this.minHour = new Date().setHours(10, 0);
    this.maxHour = new Date().setHours(22, 0);
    this.minDate = new Date();
  }

}

