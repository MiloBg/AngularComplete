import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logIme(ime: string) {
    console.log("Uneto je ime: " + ime);
  }
  
  logPrezime(prezime: string) {
    console.log("Uneto je prezime: " + prezime);
  }

}
