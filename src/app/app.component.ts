import { Component, OnInit } from '@angular/core';
import { APIServiceService } from './apiservice.service';
import { Employees } from './employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MyApp';

  _employeesList : Employees[];
  constructor(private apiserve : APIServiceService){ }

  ngOnInit(){
    this.apiserve.getEmployees().subscribe(data=>{
      this._employeesList = data;
    })

  }

}
