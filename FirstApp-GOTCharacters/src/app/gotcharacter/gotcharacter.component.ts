import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-gotcharacter',
  templateUrl: './gotcharacter.component.html',
  styleUrls: ['./gotcharacter.component.css']
})
export class GOTCharacterComponent implements OnInit {

	GOTCharacter:string[];
  	GOTFirstName: string[] = ['John','Arya','cersel','Denneryes'];
  	GOTLastName: string[] = ['Snow','Stark','lennister','Targeyerian'];
  	i = 0;
  	intervalRetObject:any;
  	enableStopSwitch :boolean = true;

switchFirstAndLastName(){
	this.intervalRetObject = setInterval(()=>{
  		if(this.i % 2 == 0){
  			this.GOTCharacter=this.GOTFirstName;
  		}else{
  			this.GOTCharacter=this.GOTLastName;
  		}
  		this.i++;
  	},1000);
  	this.enableStopSwitch = false;
}

stopSwitchFirstAndLast(){
		clearInterval(this.intervalRetObject);
		this.enableStopSwitch = true;
}

  constructor() { 
  	this.GOTCharacter=this.GOTFirstName;
  }
  	

 //Two way data binding
 twoWayBinding = 'Tyrion';

 //pass data between components
 @Input() imgUrlChild:string;


  ngOnInit() {
    console.log(this.imgUrlChild);
  }

}
