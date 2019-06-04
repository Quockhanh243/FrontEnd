import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student/student.component';
import {CourseComponent} from './course/course.component';
import {CourseRegistrationComponent} from './course-registration/course-registration.component';
import {AddStudentComponent} from './add-student/add-student.component';
import {AddCourseComponent} from "./add-course/add-course.component";
import {AddRegistrationComponent} from "./add-registration/add-registration.component";
import {UpdateStudentComponent} from './update-student/update-student.component';
import {UpdateCourseComponent} from './update-course/update-course.component';

const routes: Routes = [
  {path: 'student', component: StudentComponent},
  {path: 'course', component: CourseComponent},
  {path: 'registration', component: CourseRegistrationComponent},
  {path: 'addStudent', component: AddStudentComponent},
  {path: 'addCourse', component: AddCourseComponent},
  {path: 'addRegistration', component: AddRegistrationComponent},
  {path: 'update/:id', component: UpdateStudentComponent},
  {path: 'updateCourse/:id', component: UpdateCourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [StudentComponent, CourseRegistrationComponent, CourseComponent, AddStudentComponent];
