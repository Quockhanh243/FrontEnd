import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service';
import {Course} from '../course';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Course[];
  course: Course;
  dtOptions: DataTables.Settings = {};
  editCourseForm: FormGroup;
  constructor(private courseService: CourseService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.reloadData();
    this.dtOptions = {
      pagingType: 'full_numbers',
      processing: true
    };
    this.editCourseForm = this.fb.group({
      name: [''],
      fee: ['']
    });
  }

  onDelete(id: number){
    this.courseService.delete(id).subscribe(data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
    location.reload();
  }
  getCourseById(id: number) {
    return this.courseService.getCourseById(id).subscribe(data => this.course = data);
  }
  addCourse(){
    this.router.navigate(['addCourse']);
  }
  onUpdate(id: number) {
    this.router.navigate(['updateCourse', id]);
  }
  reloadData(){
    this.courseService.getCourse().subscribe(data => this.courses = data);
  }
}
