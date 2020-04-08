import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreetingModule } from './greeting/greeting.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GreetingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
