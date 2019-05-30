import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {StudentService} from './student.service';
import {CourseService} from './course.service';
import {CourseRegistrationService} from './course-registration.service';
import {DataTablesModule} from 'angular-datatables';
import { HeaderComponent } from './header/header.component';
import {routingComponent} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddRegistrationComponent } from './add-registration/add-registration.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HeaderComponent,
    AddStudentComponent,
    AddCourseComponent,
    AddRegistrationComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StudentService, CourseService, CourseRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
