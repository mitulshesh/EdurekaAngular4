import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor() { }

  form :FormGroup;

  ngOnInit() {
  	this.form = new FormGroup({
  		name  : new FormControl('',[Validators.required, Validators.pattern("[a-zA-z][a-zA-Z]+")]),
  		contact : new FormControl('',[Validators.required, Validators.pattern("[0-9]*")
  				,Validators.minLength(10),Validators.maxLength(10)]),
  		email :new FormControl('',[Validators.required, Validators.email])
  	})
  }

  userList:User[]=[];

  addUser(){
  	//console.log(this.form);
  	this.userList.push(this.form.value);
  }

}
