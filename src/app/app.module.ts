import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentComponent } from './student/student.component';
import { HighlightDirective } from './directives/highlight.directive';
import { StudentsService } from './services/students.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
