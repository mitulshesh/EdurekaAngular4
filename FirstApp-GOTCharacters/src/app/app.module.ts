import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GOTCharacterComponent } from './gotcharacter/gotcharacter.component';
import { FirstComponent } from './first/first.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    GOTCharacterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }