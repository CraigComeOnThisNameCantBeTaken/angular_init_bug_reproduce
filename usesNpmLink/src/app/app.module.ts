import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnderTestModule } from 'under-test';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UnderTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
