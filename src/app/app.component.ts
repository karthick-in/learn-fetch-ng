import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { APIServiceService } from './apiservice.service';
import { Employees } from './employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyApp';
  _employeesList: Employees[];
  empSelected: Number = 0;

  constructor(private apiserve: APIServiceService) { }

  ngOnInit() {
    this.setEmployees();
  }

  setEmployees() {
    console.log("Im from setEmployees() ... ")
    this.apiserve.getEmployees().subscribe(data => {
      this._employeesList = data;
    })
    console.log(this._employeesList);
  }

  removeEmp(user: Employees) {
    this.apiserve.removeEmployee(user).subscribe( // delete gonna return void
      () => {
        console.log("Employee " + user.name + " deleted ");
        if (Error) console.log(Error);

      });
    this.setEmployees();
    this.setEmployees(); 
  }

  changeEmp(user: Employees) {
    user.age = 30;
    this.apiserve.changeEmployee(user).subscribe(
      () => {
        console.log("Employee " + user.name + " 's age got changed!");
        if (Error) console.log(Error);
      });
      this.setEmployees();
      this.setEmployees();
  }

}
