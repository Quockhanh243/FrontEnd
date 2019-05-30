import { Component, OnInit } from '@angular/core';
import {CourseRegistrationService} from '../course-registration.service';
import {StudentService} from '../student.service';
import {CourseService} from '../course.service';
import {Registration} from '../registration';
import {Student} from '../student';
import {Course} from '../course';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-registration',
  templateUrl: './add-registration.component.html',
  styleUrls: ['./add-registration.component.css']
})
export class AddRegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(private courseRegistrationService: CourseRegistrationService,
              private studentService: StudentService, private courseService: CourseService,
              private fb: FormBuilder, private router: Router) { }

  students: Student[];
  courses: Course[];
  ngOnInit() {
    this.studentService.getStudent().subscribe(data => this.students = data);
    this.courseService.getCourse().subscribe(data => this.courses = data);

    this.registrationForm = this.fb.group({
      student: [new Student()],
      course: [new Course()],
      startDate: Date,
      endDate: Date,
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.courseRegistrationService.addRegistration(this.registrationForm.value).subscribe(
      response => {
        console.log('Success', response),
          location.reload();
      },
      error => console.log('Error', error));
    this.router.navigate([
      'registration'
    ]);
  }
}
