import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from './employees';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private http : HttpClient) { }

  getEmployees() : Observable<Employees[]>{
    const url = 'http://localhost:3000/employees';
 
    return this.http.get<Employees[]>(url);
    
  }
}
