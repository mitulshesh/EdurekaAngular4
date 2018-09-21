import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
 
 //Interpolation
 heading :string = 'This is a dynamic heading';

 returnString(){
 	return 'This is a String returned thru a function';
 }

 //property binding
 imageUrl :string = '../../assets/acer_predator_logo.jpg';

 //event binding
 headingTwo = 'This is heading two';

 clickEvent(){
 	if(this.headingTwo == 'This is heading two')
 	this.headingTwo = 'this text is changed';
 else
 	this.headingTwo = 'This is heading two';
 }
}
