import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CourseService} from '../course.service';
import { Router} from "@angular/router";
import {StudentService} from "../student.service";
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  addCourseForm: FormGroup;
  constructor(private fb: FormBuilder, private courseService: CourseService, private router: Router) { }

  ngOnInit() {
    this.addCourseForm = this.fb.group({
      name: [''],
      fee: ['']
    });
  }

  onSubmit() {
    console.log(this.addCourseForm.value);
    this.courseService.addCourse(this.addCourseForm.value).subscribe(
      response =>{
        console.log('Success', response),
          location.reload();
      },
      error => console.log('Error', error));
    this.router.navigate([
      'course'
    ]);
  }

}
