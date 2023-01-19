import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { StatusBudzeta } from '../enum/status-budzeta';
import { Student } from '../model/student';
import { LoggingService } from '../services/logging.service';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})

export class StudentDetailsComponent implements OnInit {

  @Input()
  student_child: Student

  @Output()
  dogadjaj = new EventEmitter<boolean>();

  proslediPrikazDetalja: boolean;
  omoguciDugme = true;
  unesiStudenta = 'Nijedan student nije unet';

  constructor(private studentService: StudentsService) {
    setTimeout(() => {
      this.omoguciDugme = false;
    }, 2000);
  }

  students = this.studentService.students;

  student: Student = new Student();

  ngOnInit(): void {
  }

  ugasiDetalje() {
    this.proslediPrikazDetalja = false;
    this.dogadjaj.emit(this.proslediPrikazDetalja);
  }

  sacuvajStudenta() {
    this.unesiStudenta = "Student je uspesno unet!";
    this.studentService.logujStudenta(this.student.ime, this.student.prezime);
  }

  obrisiUnos() {
    this.unesiStudenta = "Nijedan student nije unet."
    this.student.ime = "";
    this.student.prezime = "";
    this.student.brojIndeksa = "";
    this.student.godinaStudiranja = null;
    this.student.statusBudzeta = null;
    this.student.aktivan = null;
  }

}
