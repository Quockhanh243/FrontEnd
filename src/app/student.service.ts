import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  public url = 'http://localhost:8080/api/student';

  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.url}` + `/${id}`);
  }

  addStudent(studentData){
    return this.http.post<any>(`${this.url}`+`/create`,studentData);
  }

  delete(id: number){
    return this.http.delete(`${this.url}` + `/delete/${id}`);
  }

  updateStudent(id: number, studentData: any) {
    return this.http.put(`${this.url}` + `/update/${id}`, studentData);
  }
}
