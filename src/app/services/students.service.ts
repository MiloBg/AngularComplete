import { Injectable } from '@angular/core';
import { StatusBudzeta } from '../enum/status-budzeta';
import { Student } from '../model/student';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  constructor(private logging: LoggingService) { }

  students: Student[] = [
    {
      studentId: 1,
      ime: "Marko",
      prezime: "Markovic",
      brojIndeksa: '1I1/0001/20',
      godinaStudiranja: 1,
      statusBudzeta: StatusBudzeta.Budzet,
      aktivan: true
    },
    {
      studentId: 2,
      ime: "Jovan",
      prezime: "Jovanovic",
      brojIndeksa: '1I1/0002/20',
      godinaStudiranja: 1,
      statusBudzeta: StatusBudzeta.Budzet,
      aktivan: true
    },
    {
      studentId: 3,
      ime: "Nevena",
      prezime: "Ilic",
      brojIndeksa: '2I1/0010/20',
      godinaStudiranja: 1,
      statusBudzeta: StatusBudzeta.Samofinansirajuci,
      aktivan: true
    },
    {
      studentId: 4,
      ime: "Goran",
      prezime: "NJegus",
      brojIndeksa: '2I1/0011/19',
      godinaStudiranja: 2,
      statusBudzeta: StatusBudzeta.Samofinansirajuci,
      aktivan: false
    }
  ]

  logujStudenta(ime: string, prezime: string) {
    this.logging.logIme(ime);
    this.logging.logPrezime(prezime);
  }
  
}
