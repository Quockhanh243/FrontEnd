import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Registration} from "./registration";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CourseRegistrationService {

  constructor(private http: HttpClient) { }
  public url = 'http://localhost:8080/api/courseRegs';

  getRegistration(): Observable<Registration[]> {
    return this.http.get<Registration[]>(this.url);
  }

  getRegistrationById(id: number): Observable<Registration> {
    return this.http.get<Registration>(`${this.url}` + `/${id}`);
  }

  addRegistration(registrationData){
    return this.http.post<any>(`${this.url}`+`/create`, registrationData, httpOptions);
  }

  delete(id: number){
    return this.http.delete(`${this.url}` + `/delete/${id}`);
  }
}
