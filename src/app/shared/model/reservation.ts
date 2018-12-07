export class Reservation {
  rsvId: number;
  courtId: number;
  rsvdateTime: number;
  rsvday: string;
  rsvtime: string;

  constructor(rsvId: number, courtId: number, rsvdateTime: number, rsvday: string, rsvtime: string) {
    this.rsvId = rsvId;
    this.courtId = courtId;
    this.rsvdateTime = rsvdateTime;
    this.rsvday = rsvday;
    this.rsvtime = rsvtime;
  }
}
