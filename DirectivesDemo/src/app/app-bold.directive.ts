import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appAppBold]'
})

//Custom Directive
export class AppBoldDirective {

  constructor(private elementRef:ElementRef) { }

  @HostListener('mouseenter')onMouseEnter(){
  	this.elementRef.nativeElement.style.fontWeight='bold';
  	this.elementRef.nativeElement.style.backgroundColor='grey';
  }

   @HostListener('mouseleave')onMouseLeave(){
  	this.elementRef.nativeElement.style.fontWeight='normal';
  	this.elementRef.nativeElement.style.backgroundColor='initial';
  }

}
