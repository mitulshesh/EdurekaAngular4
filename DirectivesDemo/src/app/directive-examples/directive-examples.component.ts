import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-examples',
  templateUrl: './directive-examples.component.html',
  styleUrls: ['./directive-examples.component.css']
})
export class DirectiveExamplesComponent implements OnInit {

	dcHeros:string[] = ['Batman','Superman','Wonder Woman','Flash'];
	showHeros:boolean=true;
	heroName:string;
	myStyle:{};
	color:string;
	currentCSSClass='styleRed';
	inputColor:string='red';

	changeCSS(){
		if(this.currentCSSClass == 'styleRed'){
			this.currentCSSClass = 'styleWhite';
		}else{
			this.currentCSSClass = 'styleRed';
		}
	}

	toggleHeros(){
		this.showHeros=!this.showHeros;
		if(!this.showHeros){
			this.heroName=undefined;
		}
	}

	showRealName(hero){
		this.heroName=hero;
	}

	setStyle(){
		this.myStyle={
			'font-weight':'bold',
			'font-size' : '24px',
			'color' : this.generateRandomColor()

		}
	}

	generateRandomColor(){
		this.color="#";
		var letters = [ '1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','0'];
		for(var i=0;i<6;i++){
			this.color+= letters[Math.floor(Math.random()*16)];
		}
		console.log(this.color);
		return this.color;
	}

  constructor() { }

  ngOnInit() {
  }

}
