import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from './course';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  public url = 'http://localhost:8080/api/course';

  getCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.url}` + `/${id}`);
  }

  addCourse(courseData){
    return this.http.post<any>(`${this.url}`+`/create`,courseData);
  }

  delete(id: number){
    return this.http.delete(`${this.url}` + `/delete/${id}`);
  }
}
