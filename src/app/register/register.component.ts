import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { APIServiceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  newEmployee = {name:"",age:""};
  @Output() myEvent = new EventEmitter();

  constructor(private apiserve : APIServiceService,
    private router : Router){ }

  ngOnInit() {
  }

  registerNewEmp(){
    this.apiserve.registerEmployee(this.newEmployee).subscribe(res =>{
        console.log(res);
        this.myEvent.emit(null);
        this.router.navigate(["/login"]);        
    })
  }

}
