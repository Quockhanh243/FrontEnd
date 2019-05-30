import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Registration} from "../registration";
import {CourseRegistrationService} from "../course-registration.service";

@Component({
  selector: 'app-course-registration',
  templateUrl: './course-registration.component.html',
  styleUrls: ['./course-registration.component.css']
})
export class CourseRegistrationComponent implements OnInit {

  constructor(private registrationService: CourseRegistrationService, private fb: FormBuilder, private router: Router) { }
  registrations: Registration[];
  registration: Registration;
  dtOptions: DataTables.Settings = {};
  editRegistrationForm: FormGroup;
  ngOnInit() {
    this.reloadData();
    this.dtOptions = {
      pagingType: 'full_numbers',
      processing: true
    };
    this.editRegistrationForm = this.fb.group({
      name: [''],
      birth: ['']
    });
  }
  addRegistration(){
    this.router.navigate(['addRegistration']);
  }
  getRegistrationById(id: number) {
    return this.registrationService.getRegistrationById(id).subscribe(data => this.registration = data);
  }

  reloadData() {
    this.registrationService.getRegistration().subscribe(data => this.registrations = data);
  }

  onDelete(id: number){
    this.registrationService.delete(id).subscribe(data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
    location.reload();
  }
  onSubmitEdit(){
    console.log(this.editRegistrationForm.value);
  }

}
