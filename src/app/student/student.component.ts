import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student_parent: Student = {
    studentId: 1,
    ime: 'Nenad',
    prezime: 'Nenadic',
    brojIndeksa: '2i1/0050/2020',
    statusBudzeta: 0,
    godinaStudiranja: 1,
    aktivan: true
  }

  prikaziDetalje: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  ucitajDetalje(prikaz: boolean) {
    this.prikaziDetalje = prikaz
  }

  prikazi() {
    this.prikaziDetalje = true
  }

}
