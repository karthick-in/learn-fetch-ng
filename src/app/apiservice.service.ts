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
    var url = 'http://localhost:3000/employees';
    url = 'https://noderestapi1.000webhostapp.com/';
 
    return this.http.get<Employees[]>(url);
    
  }
}
