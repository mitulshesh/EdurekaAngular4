import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectiveExamplesComponent } from './directive-examples/directive-examples.component';
import { AppBoldDirective } from './app-bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveExamplesComponent,
    AppBoldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
