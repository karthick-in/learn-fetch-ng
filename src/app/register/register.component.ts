import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { APIServiceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  newEmployee = {name:"",age:""};
  // @Output() myEvent = new EventEmitter();

  constructor(private apiserve : APIServiceService,
    private router : Router,
    private appComponent : AppComponent){ }

  ngOnInit() {
  }

  registerNewEmp(){
    this.apiserve.registerEmployee(this.newEmployee).subscribe(res =>{
        console.log(res);  
        this.appComponent.setEmployees();
        // this.myEvent.emit(null);
        this.newEmployee.name = "";
        this.newEmployee.age = "";
        this.router.navigate(["/login"]);        
    })
  }

}
