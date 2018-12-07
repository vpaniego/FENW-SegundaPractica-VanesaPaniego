export class ReservationView {
  namerv: string;
  court1: boolean;
  court2: boolean;
  court3: boolean;
  court4: boolean;
  rsvtime: string;
  rsvtimevalue: number;

  constructor(namerv: string, court1: boolean, court2: boolean, court3: boolean, court4: boolean, rsvtime: string, rsvtimevalue: number) {
    this.namerv = namerv;
    this.court1 = court1;
    this.court2 = court2;
    this.court3 = court3;
    this.court4 = court4;
    this.rsvtime = rsvtime;
    this.rsvtimevalue = rsvtimevalue;
  }
}
