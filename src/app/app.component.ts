import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
  empSelected : Number = 0;

  constructor(private apiserve : APIServiceService){ }

  ngOnInit(){
    this.setEmployees();    
  }

  setEmployees(){
    this.apiserve.getEmployees().subscribe(data=>{
      this._employeesList = data;
    })
  }

  removeEmp(user : Employees){
    console.log(user);
    /* this.apiserve.removeEmployee(user.name).subscribe(res=>{
      console.log(res);
    }); */
    this.setEmployees();
    console.log(this._employeesList);
  }

}
