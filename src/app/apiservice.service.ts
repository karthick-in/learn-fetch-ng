import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Employees } from './employees';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employees[]> {
    var url = 'http://localhost:3000/employees';
    return this.http.get<Employees[]>(url).pipe(catchError(this.handleError));
  }

  registerEmployee(Emp) {
    var url = "http://localhost:3000/register";
    return this.http.post<any[]>(url, Emp);
  }

  removeEmployee(emp: Employees): Observable<void> {
    var url = "http://localhost:3000/remove";
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        "name": emp.name
      }
    };
    return this.http.delete<void>(url, options).pipe(catchError(this.handleError));
  }

  changeEmployee(emp : Employees): Observable<void>{
    var url = "http://localhost:3000/change";
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<void>(url, emp, options).pipe(catchError(this.handleError));
  }

  handleError(errResponse: HttpErrorResponse) {
    if (errResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errResponse.error.message);
    } else {
      console.error('Server Side Error :', errResponse);
    }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');

  }

}
