import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../student';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService, private fb: FormBuilder, private router: Router) { }
  students: Student[];
  student: Student;
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.reloadData();
    this.dtOptions = {
      pagingType: 'full_numbers',
      processing: true
    };
  }
  addStudent(){
    this.router.navigate(['addStudent']);
  }
  getStudentById(id: number) {
    return this.studentService.getStudentById(id).subscribe(data => this.student = data);
  }

  reloadData() {
    this.studentService.getStudent().subscribe(data => this.students = data);
  }

  onDelete(id: number){
      this.studentService.delete(id).subscribe(data => {
        console.log(data);
        this.reloadData();
      },
        error => console.log(error));
    location.reload();
  }
  onUpdate(id: number) {
    this.router.navigate(['update', id]);
  }
}
