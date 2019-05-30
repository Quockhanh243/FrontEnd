import { Component, OnInit } from '@angular/core';
import {CourseRegistrationService} from '../course-registration.service';
import {StudentService} from '../student.service';
import {CourseService} from '../course.service';
import {Registration} from '../registration';
import {Student} from '../student';
import {Course} from '../course';

@Component({
  selector: 'app-add-registration',
  templateUrl: './add-registration.component.html',
  styleUrls: ['./add-registration.component.css']
})
export class AddRegistrationComponent implements OnInit {

  constructor(private courseRegistrationService: CourseRegistrationService,
              private studentService: StudentService, private courseService: CourseService) { }

  students: Student[];
  courses: Course[];
  courseFee: any;
  ngOnInit() {
    this.studentService.getStudent().subscribe(data => this.students = data);
    this.courseService.getCourse().subscribe(data => this.courses = data);
  }
}
