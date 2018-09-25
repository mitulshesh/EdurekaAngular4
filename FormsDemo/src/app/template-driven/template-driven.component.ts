import { Component, OnInit } from '@angular/core';
import {User} from '../user'

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Initialise a user list with empty array
  userList:User[]=[];

  addUser(form){
	console.log(form.value);
	var userInfo = form.value;
	this.userList.push(userInfo);
  }

}
